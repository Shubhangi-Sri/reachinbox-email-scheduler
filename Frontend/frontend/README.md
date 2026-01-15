<div align="center">
  <h1>📧 ReachInbox Assignment — Email Scheduler</h1>
  <p>A full-stack email scheduling system using React, Node.js, BullMQ, Redis & MySQL</p>

  <img src="https://img.shields.io/badge/React-18-blue?logo=react" />
  <img src="https://img.shields.io/badge/Node.js-Express-green?logo=node.js" />
  <img src="https://img.shields.io/badge/MySQL-Database-blue?logo=mysql" />
  <img src="https://img.shields.io/badge/BullMQ-Queue-red" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript" />
</div>

---

# ReachInbox Assignment – Email Scheduler

This project is a full-stack Email Scheduling system built using:

- **Backend:** Node.js, Express.js, TypeScript, Redis Queue  
- **Frontend:** React + Vite  
- **Database:** MySQL  
- **Queue:** Bull / BullMQ  
- **Mail Service:** Nodemailer  

Users can:
✔ Schedule emails  
✔ View scheduled emails  
✔ View sent emails  

---

## 📁 Project Structure

```
ReachInbox-Assignment/
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── email/
│   │   ├── routes/
│   │   │   └── email.routes.ts
│   │   ├── app.ts
│   │   └── server.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
│
└── Frontend/
    └── frontend/
        ├── public/
        ├── src/
        │   ├── pages/
        │   │   ├── SchedulePage.jsx
        │   │   ├── ScheduledList.jsx
        │   │   └── SentList.jsx
        │   ├── App.jsx
        │   ├── App.css
        │   ├── main.jsx
        │   └── index.css
        ├── package.json
        ├── vite.config.js
        └── README.md
```

---

## 🚀 Backend Setup

### 1️⃣ Install Dependencies
```
cd Backend
npm install
```

### 2️⃣ Create `.env` in Backend/
```
PORT=5000
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=yourpassword
MYSQL_DATABASE=emaildb

REDIS_HOST=127.0.0.1
REDIS_PORT=6379

EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password
```

### 3️⃣ Start Backend Server
```
npm run dev
```

Backend runs at:  
👉 http://localhost:5000

---

## 🎨 Frontend Setup

### 1️⃣ Install dependencies
```
cd Frontend/frontend
npm install
```

### 2️⃣ Start frontend
```
npm run dev
```

Frontend runs at:  
👉 http://localhost:5173

---

## 🔗 API Endpoints

### **POST /api/schedule**
Schedule an email.

**Request Body**
```
{
  "subject": "Meeting",
  "body": "Discussion",
  "emails": ["test@example.com"],
  "startTime": "2026-01-16T12:30:00",
  "delayBetween": 2000
}
```

---

### **GET /api/scheduled-emails**
Returns all scheduled emails.

---

### **GET /api/sent-emails**
Returns all sent emails.

---

## ✔ Features Implemented

### Backend
- Schedule emails
- Process queue using BullMQ
- Send emails using Nodemailer
- MySQL storage
- Redis job queue
- CORS enabled
- TypeScript

### Frontend
- React + Vite app
- Three pages:
  - Schedule Email
  - Scheduled Emails
  - Sent Emails
- Axios API calls
- Clean UI

---

## 📦 Export as ZIP (For Submission)
To submit your project:

1. Go to your project root (ReachInbox-Assignment/)
2. Select:
   - `Backend/`
   - `Frontend/`
3. Right click → **Send to → Compressed (ZIP) folder**

---



