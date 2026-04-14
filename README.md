....
# Secure Job Application Portal  
A full-stack, security-focused client–server application built for demonstrating secure architecture, OWASP Top 10 mitigations, STRIDE threat modelling, and layered design.

---

## 📌 Overview  
This project is a **secure job application portal** where users can create accounts, log in, upload resumes, and submit job applications.  
Admins can log in to a protected dashboard to search, filter, and review applications.

The system demonstrates secure coding practices, authentication, authorization, file upload security, and database safety.

---

## 🏗 Architecture  
The application follows a strict layered architecture:

### **Frontend (UI Layer)**
- HTML/CSS/JS (or React)
- No direct database access
- Communicates only through backend APIs

### **Backend (Application Layer)**
- Node.js + Express
- Authentication (JWT)
- Authorization (role-based)
- Validation (Joi)
- Logging (Winston)
- Rate limiting
- Secure file upload (Multer)

### **Database Layer**
- MongoDB (Atlas)
- Collections:
  - Users
  - Applications
  - Resumes
  - Audit Logs

---

## 🔐 Security Features  
This project implements multiple OWASP Top 10 controls:

- **A01 Broken Access Control**  
  Role-based middleware, admin-only routes

- **A03 Injection**  
  Mongoose ORM, validated inputs

- **A05 Security Misconfiguration**  
  Safe file upload config, environment variables

- **A07 Identification & Authentication Failures**  
  JWT, bcrypt password hashing

- **A09 Logging & Monitoring Failures**  
  Audit logs + Winston logging

---

## 📂 Repository Structure  
