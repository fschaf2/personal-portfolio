from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from backend.routers.chat import router as chat_router
from backend.routers.contact import router as contact_router

import time
from collections import defaultdict
from starlette.middleware.base import BaseHTTPMiddleware

RATE_LIMIT = 5       # requests allowed
WINDOW = 10          # seconds
requests_store = defaultdict(list)

class RateLimitMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        ip = request.client.host
        now = time.time()

        # sliding window
        requests_store[ip] = [t for t in requests_store[ip] if now - t < WINDOW]

        # limit
        if len(requests_store[ip]) >= RATE_LIMIT:
            return JSONResponse(
                status_code=429,
                content={"detail": "Too many requests. Slow down."}
            )

        # Record this request
        requests_store[ip].append(now)

        # Continue to actual endpoint
        return await call_next(request)



app = FastAPI(title="Schafer Portfolio API")

# Add the rate limiter FIRST so it wraps everything
app.add_middleware(RateLimitMiddleware)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat_router)
app.include_router(contact_router)
