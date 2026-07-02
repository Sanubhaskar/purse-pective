# Database Schema

## Database

Supabase PostgreSQL

---

# Table

## generations

| Column | Type |
|---------|------|
| id | UUID |
| user_id | UUID |
| model_url | TEXT |
| product_url | TEXT |
| result_url | TEXT |
| created_at | TIMESTAMP |

---

# Relationships

One User

↓

Many Generations

---

# Storage Buckets

images/

Folder Structure

```
images/

UUID/

model.png

product.png

result.png
```

---

# Purpose

The table stores metadata for every generated image while the actual images remain inside Supabase Storage.