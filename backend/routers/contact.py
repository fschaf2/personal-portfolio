import smtplib
import ssl
from email.message import EmailMessage

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr

from backend import settings

router = APIRouter()


class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    project: str | None = None
    message: str


def send_contact_email(payload: ContactMessage):
    username = settings.SMTP_USERNAME
    password = settings.SMTP_PASSWORD
    recipient = settings.RECIPIENT_EMAIL

    if not username or not password or not recipient:
        raise HTTPException(
            status_code=500,
            detail="Email service is not configured. Set GMAIL_USERNAME, GMAIL_APP_PASSWORD, and CONTACT_RECIPIENT_EMAIL.",
        )

    msg = EmailMessage()
    msg["Subject"] = f"Portfolio Contact: {payload.name}"
    msg["From"] = username
    msg["To"] = recipient
    msg.set_content(
        f"Name: {payload.name}\nEmail: {payload.email}\nProject/Idea: {payload.project or 'N/A'}\n\nMessage:\n{payload.message}"
    )

    context = ssl.create_default_context()
    try:
        with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT) as server:
            server.starttls(context=context)
            server.login(username, password)
            server.send_message(msg)
    except Exception as exc:
        print("Email send failed:", exc)
        raise HTTPException(status_code=502, detail="Failed to send email. Please try again later.")


@router.post("/contact")
async def submit_contact(payload: ContactMessage):
    """
    Accepts contact form submissions and forwards them via Gmail SMTP.
    """
    send_contact_email(payload)
    return {"detail": "Message sent successfully."}
