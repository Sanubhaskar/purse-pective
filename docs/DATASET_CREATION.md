# Dataset Creation Methodology

Project
**Purse-pective AI – Handbag Virtual Try-On**

---

# 1. Objective

The objective of this dataset creation process was to construct a high-quality paired dataset for training a virtual handbag try-on model.

The dataset was designed to teach the model the relationship between:

- A standalone handbag image
- A human model image without the handbag
- A target image showing the same model naturally carrying the handbag

By creating paired examples, the model can learn how to realistically place handbags onto human models while preserving the appearance of both the model and the product.

---

# 2. Dataset Overview

The dataset consists of three corresponding image categories.

```
Dataset/
│
├── Product/
├── Model/
└── Result/
```

Each training sample contains one image from each folder.

Example:

```
Product/
001.png

Model/
001.png

Result/
001.png
```

Where:

- **Product Image** – Standalone handbag image.
- **Model Image** – Human model without the handbag.
- **Result Image** – Human model naturally carrying the handbag.

---

# 3. Product and Lifestyle Image Collection

## Source

Reference product images and their corresponding lifestyle images were collected from publicly available **Myntra** product listings.

The original images were used solely as reference data for dataset preparation and research.

The original reference images are **not distributed** as part of this repository.

---

## Product Image Selection

Standalone handbag images were selected using the following criteria:

- High image resolution
- Complete handbag visible
- Minimal background distractions
- Front-facing view
- Good lighting
- Clear product details
- No heavy reflections or occlusions

Only images satisfying these criteria were included in the dataset.

---

## Lifestyle Image Selection

For every selected handbag, the corresponding lifestyle image from the same product listing was collected.

These images show the same handbag naturally carried by a fashion model.

The following criteria were followed:

- High-quality commercial photograph
- Complete handbag visibility
- Natural handbag placement
- Minimal motion blur
- Good lighting
- Consistent pose

These images served as the target reference during dataset construction.

---

# 4. Model Image Generation

Standalone images of the same fashion models without handbags were not available.

Therefore, model-only images were generated using **Google Gemini AI**.

---

## Procedure

For each lifestyle image:

1. Upload the lifestyle image to Google Gemini AI.
2. Remove only the handbag from the image.
3. Preserve every other visual characteristic.

The following attributes were intentionally preserved:

- Face
- Identity
- Hairstyle
- Facial expression
- Clothing
- Body posture
- Camera angle
- Background
- Lighting
- Shadows

Only the handbag was removed.

This produced a model image that perfectly corresponds to the lifestyle image while removing only the handbag.

---

# 5. Dataset Pairing

Each dataset sample contains three aligned images.

```
Product Image
        │
        ▼

Model Image
        │
        ▼

Result Image
```

Each sample was manually verified to ensure:

- Correct handbag pairing
- Correct model pairing
- Matching pose
- Matching lighting
- Matching background
- Matching camera angle

Incorrectly aligned samples were discarded.

---

# 6. Image Organization

The dataset was organized into three folders.

```
Dataset/
│
├── Product/
├── Model/
└── Result/
```

Each sample follows a consistent naming convention.

Example:

```
001.png
002.png
003.png
...
```

The same filename represents one complete dataset sample across all three folders.

---

# 7. Dataset Validation

Each dataset sample underwent manual inspection before being included.

The following quality checks were performed:

- Correct handbag selected
- Correct model selected
- Matching handbag across Product and Result images
- Matching model across Model and Result images
- High image quality
- No duplicate images
- Proper image alignment

Only samples satisfying all validation criteria were retained.

---

# 8. Final Dataset Structure

```
Dataset/
│
├── Product/
│   ├── 001.png
│   ├── 002.png
│   └── ...
│
├── Model/
│   ├── 001.png
│   ├── 002.png
│   └── ...
│
├── Result/
│   ├── 001.png
│   ├── 002.png
│   └── ...
```

Each training sample consists of:

- One product image
- One model image
- One corresponding result image

---

# 9. Dataset Statistics

| Component | Description |
|-----------|-------------|
| Product Images | Standalone handbag images |
| Model Images | AI-generated handbag-free model images |
| Result Images | Lifestyle reference images showing handbags on models |
| Image Format | PNG |
| Organization | Folder-based paired dataset |

---

# 10. Tools Used

| Purpose | Tool |
|---------|------|
| Product Reference Image Collection | Myntra |
| Lifestyle Reference Image Collection | Myntra |
| Model Image Generation | Google Gemini AI |
| Image Validation | Manual Inspection |
| Dataset Organization | Folder-based Structure |

---

# 11. Summary

A paired dataset was constructed by combining:

- Standalone handbag reference images
- Corresponding lifestyle reference images
- AI-generated handbag-free model images

The resulting dataset provides aligned Product, Model, and Result image triplets suitable for training a virtual handbag try-on model.

The entire dataset creation process focused on maintaining visual consistency between samples while ensuring high image quality and accurate pairing.