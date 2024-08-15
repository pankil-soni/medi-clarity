# MediClarity-Backend 🏥

MediClarity Backend is a Flask-based API service that powers the MediClarity application, designed to help patients understand their medical prescriptions and reports using AI technology. 🤖

## Overview 📋

The backend service provides an API endpoint that:
- 📷 Accepts medical prescription/report images
- 🧠 Utilizes GPT-4 Vision AI to analyze the images
- 📝 Returns detailed, patient-friendly explanations of prescriptions and medical reports
- 💊 Provides information about medications, dosages, and important medical instructions

## Features ⭐

- 🔍 Image processing capabilities for medical documents
- 🤖 AI-powered prescription and medical report analysis
- 📚 Clear, patient-friendly explanations of medical terminology
- 💊 Detailed medication information including dosage, frequency, and side effects
- 🔄 Cross-Origin Resource Sharing (CORS) enabled for frontend integration

## Installation 🛠️

1. Create and activate a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # For Unix/macOS
venv\Scripts\activate     # For Windows
```

2. Install required dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables:
Create a `.env` file in the root directory and add:
```
OPENAI_API_KEY=your_openai_api_key_here
```

## Usage 🚀

1. Start the Flask server:
```bash
python app.py
```

2. The server will start running on `http://localhost:5000`

### API Endpoints 🔌

#### 1. Health Check ✅
- **URL**: `/`
- **Method**: `GET`
- **Response**: Returns "Hello, World!" to confirm server is running

#### 2. Analyze Prescription 🔬
- **URL**: `/analyze_prescription`
- **Method**: `POST`
- **Content-Type**: `multipart/form-data`
- **Parameter**: 
  - `image`: Image file of the prescription/medical report
- **Response**: Detailed analysis and explanation of the prescription/report

## Deployment 🌐

The backend is configured to be deployed on Render. Follow Render's documentation for deployment instructions.

## Environment Variables 🔑

- `OPENAI_API_KEY`: Your OpenAI API key for GPT-4 Vision access

## Note ⚠️

This service requires a valid OpenAI API key with access to GPT-4 Vision model. Ensure you have the necessary API access before deployment.
