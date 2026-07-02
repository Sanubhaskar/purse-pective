# API Documentation

---

## POST /api/upload

Uploads an image to Supabase Storage.

Request

FormData

```
file
```

Response

```
{
"url":"..."
}
```

---

## POST /api/generate

Generates handbag try-on image.

Request

```
{
modelImage:"",
productImage:""
}
```

Response

```
{
success:true,
output:[]
}
```

---

## POST /api/save-result

Downloads generated image.

Stores it permanently inside Supabase.

Returns

```
{
url:"..."
}
```