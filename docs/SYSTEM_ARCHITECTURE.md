# System Architecture

## Project

Purse-pective AI – Handbag Virtual Try-On

---

# Overview

Purse-pective is an AI-powered web application that enables users to upload a model image and a handbag image to generate realistic handbag try-on images using a custom-trained LoRA model.

The application consists of four major layers:

- Frontend
- Backend
- AI Inference
- Cloud Storage

---

# Architecture Diagram

```
                User
                  │
                  ▼
        Next.js Frontend
                  │
      ┌───────────┴────────────┐
      ▼                        ▼
 Upload APIs              Authentication
      │                        │
      ▼                        ▼
 Supabase Storage      Supabase Auth
      │
      ▼
 Replicate API
      │
      ▼
 FLUX.2 Klein 9B Base
      +
 Custom LoRA
      │
      ▼
 Generated Image
      │
      ▼
 Save Result
      │
      ▼
 Supabase Storage
      │
      ▼
 Library Page
```

---

# Frontend

Technology:

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

Responsibilities:

- Authentication
- Image Upload
- Dashboard
- Library
- Settings
- Image Preview

---

# Backend

Implemented using Next.js API Routes.

Available APIs:

- /api/upload
- /api/generate
- /api/save-result

Responsibilities:

- Upload images
- Call Replicate API
- Store generated outputs
- Return URLs

---

# AI Layer

Model:

FLUX.2 Klein 9B Base

Fine-Tuning:

Custom LoRA

Inference:

Replicate

---

# Storage

Supabase Storage stores:

- Model Images
- Product Images
- Generated Images

Images are organized using UUID folders.

---

# Authentication

Implemented using Supabase Authentication.

Features:

- Sign Up
- Login
- Logout
- Session Management

---

# Database

Supabase PostgreSQL

Main Table:

generations

Stores:

- User ID
- Model Image URL
- Product Image URL
- Generated Image URL
- Timestamp

---

# Workflow

1. User uploads model image.
2. User uploads handbag image.
3. Images are stored in Supabase.
4. URLs are sent to Replicate.
5. AI generates try-on image.
6. Output stored in Supabase.
7. Metadata stored in PostgreSQL.
8. Library displays previous generations.