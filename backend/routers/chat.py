import traceback

import httpx
from fastapi import APIRouter, HTTPException, Request
from fastapi.responses import JSONResponse

from backend import settings

router = APIRouter()


@router.post("/chat")
async def proxy_chat(request: Request):
    try:
        client_payload = await request.json()

        contents = client_payload.get("contents", [])
        if not contents:
            print("ERROR: contents array is empty or missing")
            raise HTTPException(status_code=400, detail="Missing 'contents' in payload")

        upstream_payload = {
            "contents": contents,
            "system_instruction": settings.SYSTEM_INSTRUCTION,
            "generationConfig": {"temperature": 0.4, "maxOutputTokens": 500},
        }

        async with httpx.AsyncClient(timeout=30) as client:
            print(f"--- Sending to Google ---\nURL: {settings.GEMINI_URL[:60]}...")
            response = await client.post(
                settings.GEMINI_URL,
                json=upstream_payload,
                headers={"Content-Type": "application/json"},
            )

        print(f"--- Google Response Status: {response.status_code} ---")

        if response.status_code >= 400:
            error_text = response.text
            print(f"Google Error Body: {error_text}")
            return JSONResponse(status_code=response.status_code, content=response.json())

        return response.json()

    except Exception as exc:
        print("!!! SERVER CRASHED !!!")
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(exc))
