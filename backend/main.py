from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.routers.chat import router as chat_router
from backend.routers.contact import router as contact_router

app = FastAPI(title="Schafer Portfolio API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat_router)
app.include_router(contact_router)
