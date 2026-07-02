# Model Training Methodology

## Project

**Purse-pective AI – Handbag Virtual Try-On**

---

# 1. Objective

The objective of the training process was to fine-tune a **FLUX.2 Klein 9B Base** model using Low-Rank Adaptation (LoRA) to improve its ability to generate realistic handbag try-on images.

The trained LoRA learns how to naturally integrate handbags into images of fashion models while preserving the identity of the model and the appearance of the handbag.

---

# 2. Training Framework

The model was trained using the **Ostris AI Toolkit**, which provides an efficient pipeline for LoRA fine-tuning of FLUX models.

The toolkit was selected because it offers:

- Native FLUX LoRA support
- Stable training workflow
- Checkpoint management
- Automated configuration
- Efficient GPU utilization

---

# 3. Base Model

The following base model was used during training.

| Component | Value |
|----------|-------|
| Base Model | FLUX.2 Klein 9B Base |
| Training Method | LoRA Fine-Tuning |
| Framework | Ostris AI Toolkit |

---

# 4. Dataset Preparation

The training dataset consisted of paired images organized into three folders.

```
Dataset/
│
├── Product/
├── Model/
└── Result/
```

Each training sample contained:

- Product image
- Model image
- Result image

The dataset preparation methodology is documented separately in **DATASET_CREATION.md**.

---

# 5. Captioning Strategy

Each training sample included a corresponding text caption.

The captions followed a consistent instruction format throughout the training dataset.

Example:

```
Make the model wear or carry the product.
```

The phrase **"wear or carry"** was intentionally maintained across all captions to establish a consistent semantic relationship during LoRA training.

---

# 6. Training Process

The dataset was loaded into the Ostris AI Toolkit.

The toolkit performed:

- Dataset loading
- Caption processing
- LoRA fine-tuning
- Checkpoint generation
- Periodic model saving

Training was monitored throughout the process to ensure stable convergence.

---

# 7. Checkpoint Generation

During training, checkpoints were generated at regular intervals.

Training continued until the **1500-step checkpoint**, which was selected for evaluation based on the observed training progress.

The selected checkpoint file:

```
catalogue_training_000001500.safetensors
```

was exported for inference and testing.

---

# 8. Model Evaluation

After training, the generated checkpoint was evaluated using **ComfyUI**.

ComfyUI was used to:

- Load the FLUX.2 Klein 9B Base model
- Apply the trained LoRA
- Generate handbag try-on images
- Evaluate visual quality
- Compare different prompts
- Assess handbag placement and identity preservation

This iterative evaluation process helped determine the most suitable checkpoint for deployment.

---

# 9. Evaluation Criteria

Generated images were evaluated based on the following characteristics.

### Model Preservation

- Face consistency
- Identity preservation
- Pose preservation
- Hairstyle preservation
- Clothing preservation

### Product Preservation

- Shape
- Color
- Texture
- Stitching
- Hardware
- Branding

### Overall Image Quality

- Realism
- Lighting consistency
- Natural handbag placement
- Shadow consistency
- Background preservation

---

# 10. Export

After evaluation, the selected checkpoint was exported as a LoRA weight file.

```
catalogue_training_000001500.safetensors
```

The exported LoRA was later uploaded to Hugging Face for inference.

---

# 11. Testing Workflow

The trained checkpoint was tested using the following workflow.

```
Dataset
        │
        ▼

Ostris AI Toolkit
        │
        ▼

LoRA Training
        │
        ▼

1500 Checkpoint
        │
        ▼

ComfyUI
        │
        ▼

Visual Evaluation
        │
        ▼

Selected Checkpoint
```

---

# 12. Tools Used

| Purpose | Tool |
|---------|------|
| Model Training | Ostris AI Toolkit |
| Base Model | FLUX.2 Klein 9B Base |
| Fine-Tuning | LoRA |
| Checkpoint Evaluation | ComfyUI |
| Model Hosting | Hugging Face |

---

# 13. Observations

During evaluation, the trained LoRA demonstrated the ability to:

- Preserve model identity
- Generate realistic handbag placement
- Maintain fashion photography composition
- Produce visually coherent outputs

Some challenges were also observed:

- Minor distortion of handbag geometry in certain cases
- Occasional loss of branding details
- Variation in product fidelity depending on inference settings

These observations are being addressed through continued experimentation with inference parameters and prompt engineering.


# 14. Summary

A custom LoRA was successfully trained using the Ostris AI Toolkit on top of the FLUX.2 Klein 9B Base model.

The model was trained until the **1500-step checkpoint**, evaluated using ComfyUI, and the selected checkpoint was exported as a `.safetensors` file for deployment and inference.

This trained LoRA serves as the core AI component of the Purse-pective virtual handbag try-on system.


### 🤗 Model Weights

https://huggingface.co/sanu1408/purse-pective-lora
