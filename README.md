# Felix Schafer – Portfolio

Modern stack with Next.js (App Router, Tailwind) for the UI and FastAPI for the chat/contact backend.

## Quick start
Frontend (from repo root):
```bash
npm install
npm run dev
# http://localhost:3000
```

Backend:
```bash
python3 -m venv .venv
source .venv/bin/activate  # or .venv\Scripts\activate on Windows
pip install -r backend/requirements.txt
export AI_API_KEY="your-google-genai-key"
export GMAIL_USERNAME="you@gmail.com"
export GMAIL_APP_PASSWORD="your-app-password"
# optional override:
export CONTACT_RECIPIENT_EMAIL="where to send contact form"  # defaults to GMAIL_USERNAME
# run from repo root so imports resolve
uvicorn backend.main:app --host 0.0.0.0 --port 8000
```

## Environment variables
- Frontend: `NEXT_PUBLIC_API_BASE_URL` (defaults to `http://localhost:8000`).
- Backend (required): `AI_API_KEY`, `GMAIL_USERNAME`, `GMAIL_APP_PASSWORD`.
- Backend (optional): `CONTACT_RECIPIENT_EMAIL` (falls back to `GMAIL_USERNAME`).

## API endpoints
- `POST /chat` — body `{ "contents": [...] }` (Gemini-style history). Returns the upstream Gemini response.
- `POST /contact` — body `{ name, email, project?, message }`. Sends via Gmail SMTP.

## Deployment
- Frontend: Vercel (set `NEXT_PUBLIC_API_BASE_URL` to the backend URL).
- Backend: Koyeb (see `koyeb.yaml`); builds from `backend/`, runs `uvicorn backend.main:app` from repo root, exposes port 8000.

## Notes
- AI prompt is tuned to Felix’s projects (LaCulture, AI Digit Classifier, LSU Student Datastore, BrainScan AI [private]) and skills (AI/ML, FastAPI, Angular/React/Next, ASP.NET, SQL/SQLite, Unity, Godot, Java/C#, Windows/Linux).
- Favicon lives in `public/favicon.ico`; metadata set in `app/layout.tsx`.
