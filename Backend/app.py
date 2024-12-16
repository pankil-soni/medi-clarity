from flask import Flask, request, jsonify, Response
from PIL import Image
import openai
import base64
import io
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")

app = Flask(__name__)
CORS(app, origins="*", methods=["GET", "POST"], allow_headers=["Content-Type"])
openai.api_key = api_key

initial_prompt = """
## YOUR TASK

- Analyze the following given image of a doctor's prescription or a medical report.
- In response Please provide a clear and simple explanation of the medications prescribed that can be easily understood by a patient. 
- Also provide a guide on what they should do next.
- Do highlight any important information mentioned in the report or prescription.
- Ensure that the explanation is general and harmless.
- If medications are given in the given image then give a detailed explanation of each medication for eg. Dosage, Purpose, Frequency, Side effects, etc.
- In the output firstly provide what is the report about then provide the important things that the patient should know about the report/prescription and then provide the explanation of the medications prescribed and lastly give a summary.
- If the given image is not a prescription or report then give a response that the given image is not a prescription or report.
- Give detailed and clear response that can be easily understood by a patient.
"""


def convert_image_to_base64(image_file):
    with Image.open(image_file) as img:
        rgb_img = img.convert("RGB")
        buffered = io.BytesIO()
        rgb_img.save(buffered, format="JPEG")
        base64_encoded_image = base64.b64encode(buffered.getvalue())
        base64_string = base64_encoded_image.decode()
        return base64_string


def get_gpt4_response(messages):

    response = openai.chat.completions.create(
        model="gpt-4o", temperature=0.7, messages=messages
    )

    return response.choices[0].message.content


@app.route("/", methods=["GET"])
def hello():
    return "Hello, World!"


@app.route("/analyze_prescription", methods=["POST"])
def analyze_prescription():
    if "image" not in request.files:
        return jsonify({"error": "No image file provided"}), 400

    image_file = request.files["image"]
    if image_file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    base64_string = convert_image_to_base64(image_file)
    base64url = f"data:image/jpeg;base64,{base64_string}"

    messages = [
        {
            "role": "system",
            "content": "You are a helpful Medical Assistant who is assisting a patient with understanding their doctor's prescription/reports.",
        },
        {"role": "user", "content": initial_prompt + base64url},
    ]

    gpt_response = get_gpt4_response(messages)

    return Response(gpt_response, mimetype="text/plain")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
