# PC Builder AI Assistant – Installation & Setup Guide

This guide will help you install and run the **PC Builder AI Assistant** on your local machine. The project consists of a **React frontend** and a **Node.js backend** with AI agents powered by Groq. Follow these steps carefully.

---

## 📋 Prerequisites

Ensure you have the following installed:

| Software | Version | Download |
|----------|--------|----------|
| Node.js | 18.x or higher | [nodejs.org](https://nodejs.org) |
| npm | 9.x or higher | (comes with Node.js) |
| MongoDB | 6.x or higher | [mongodb.com](https://www.mongodb.com/try/download/community) |
| Git | latest | [git-scm.com](https://git-scm.com) |

Also, you’ll need a **Groq API key**. Get one for free at [console.groq.com](https://console.groq.com).

---

## 🚀 Step‑by‑Step Installation

### 1. Clone the Repository

```bash
git clone https://github.com/DesmondKarakara/PC-Builder_AI-assistant.git
cd PC-Builder_AI-assistant
```

### 2. Extract the Complete Codebase

The repository contains a compressed file `file_check.zip` which holds the backend and any additional frontend files. Extract it:

```bash
# On Linux / macOS
unzip file_check.zip

# On Windows (using PowerShell)
Expand-Archive -Path file_check.zip -DestinationPath .
```

After extraction, your folder should contain both **frontend** (React app) and **backend** (Node.js server). The structure may look like:

```
PC-Builder_AI-assistant/
├── backend/              (Node.js server)
├── src/                  (React frontend)
├── package.json          (frontend dependencies)
├── .env.example          (optional)
└── ...
```

If the zip does not create a `backend` folder, check its contents and move the backend files to a `backend/` directory manually.

### 3. Install Backend Dependencies

Navigate to the backend folder and install packages:

```bash
cd backend
npm install
```

### 4. Configure Backend Environment Variables

Create a `.env` file in the `backend/` folder. Use the following template:

```env
# Backend .env
PORT=3000
GROQ_API_KEY=your_groq_api_key_here
MONGODB_URI=mongodb://localhost:27017/pc_builder
TAVILY_API_KEY=your_tavily_api_key_here   # optional, for web search
```

- **GROQ_API_KEY**: Required for AI responses.
- **MONGODB_URI**: Use your local MongoDB or Atlas URI.
- **TAVILY_API_KEY**: Optional – only if you want real‑time price search.

### 5. Start the Backend Server

```bash
npm run dev
```

You should see:

```
Server is running on port 3000
Environment: development
```

Keep this terminal open.

### 6. Install Frontend Dependencies

Open a **new terminal** and go back to the project root, then install frontend packages:

```bash
cd ..   # back to project root
npm install
```

### 7. Configure Frontend Environment Variables

Create a `.env` file in the project root (same level as `src/`) with:

```env
VITE_API_URL=http://localhost:3000/api
```

This tells the frontend where to reach the backend.

### 8. Start the Frontend Development Server

```bash
npm run dev
```

You’ll see output like:

```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

Open your browser and go to `http://localhost:5173`. The application should load.

---

## ✅ Verify Everything Works

- Type a message like *“i5‑13500HX with ₹30,000 budget”* and press Send.
- The AI should respond with compatible component suggestions.
- If you see a 401 error, your Groq API key is invalid or missing – double‑check the `.env` file.

---

## 🛠️ Troubleshooting

| Issue | Solution |
|-------|----------|
| **Backend fails to start** | Check that MongoDB is running (`mongod`). Verify `MONGODB_URI` in `.env`. |
| **Frontend shows CORS error** | Ensure backend `.env` has `CORS_ORIGIN=http://localhost:5173` (add if missing). |
| **Groq 401 error** | Your API key is expired or incorrect. Generate a new one at [console.groq.com](https://console.groq.com). |
| **Port already in use** | Change `PORT` in backend `.env` or kill the process using the port. |

---

## 📦 Folder Structure (After Extraction)

```
PC-Builder_AI-assistant/
├── backend/
│   ├── src/
│   │   ├── agents/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── chain.mjs
│   │   ├── llm.mjs
│   │   └── server.mjs
│   ├── .env
│   └── package.json
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .env
├── index.html
├── package.json
└── vite.config.js
```

Happy building! 🖥️
