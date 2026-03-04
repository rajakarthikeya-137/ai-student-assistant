# AI Student Assistant

AI Student Assistant is a web application that helps students **explain concepts, generate MCQs, summarize text, and improve writing** using Google Gemini AI.

## Tech Stack

Frontend:
- React
- Axios

Backend:
- Node.js
- Express
- CORS
- Dotenv

AI:
- Google Gemini API (@google/genai)

## Features

- Explain academic concepts
- Generate multiple choice questions
- Summarize long text
- Improve writing clarity
- Simple and clean React interface
- Express API backend

## Setup

### Backend

```
cd server
npm install
node server.js
```

### Frontend

```
cd client
npm install
npm start
```

## Environment Variables

Create `.env` file in root:

```
AI_API_KEY=YOUR_GEMINI_API_KEY
PORT=5000
```

## API Endpoint

```
POST /api/ai/generate
```

Request body:

```
{
 "prompt": "Explain Artificial Intelligence",
 "mode": "explain"
}
```

Modes:
- explain
- mcq
- summarize
- improve
