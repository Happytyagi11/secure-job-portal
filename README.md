# Secure Job Portal – Client–Server Application

A secure, full‑stack job application portal built with a layered architecture:
Frontend (HTML/CSS/JS), Backend (Node.js/Express), Middleware (Security Layer), and
Database (MongoDB Atlas). The system includes authentication, authorization,
file uploads, admin review, search, and strong security controls aligned with
OWASP Top 10 and STRIDE threat modeling.

---

## 🚀 Features

### User Features
- User registration & login (JWT-based)
- Submit job applications
- Upload resume (PDF only, size-limited)
- View application status

### Admin Features
- Admin login
- View all applications
- Search/filter applications
- Approve/reject applications

---

## 🔐 Security Features
- JWT authentication & role-based authorization
- Input validation & sanitization
- Rate limiting (prevents brute force)
- CORS configuration
- Secure file upload (type/size validation)
- Logging & monitoring
- Environment variables for secrets
- MongoDB Atlas with secure connection string

---

## 🧱 Architecture

### Frontend (UI Layer)
- HTML/CSS/JS
- Forms for login, application, admin panel
- Fetch API to backend

### Backend (Application Layer)
- Node.js + Express
- Routes: `/auth`, `/applications`, `/admin`
- Middleware: validation, auth, rate limiting, logging

### Database Layer
MongoDB Collections:
- Users
- Applications
- Admins
- Logs

---

## 📦 Installation & Setup

### 1. Clone the repository
