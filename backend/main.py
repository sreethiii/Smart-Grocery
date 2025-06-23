from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
from dotenv import load_dotenv
import os

# 🔐 Load environment variables from .env file
load_dotenv()

# ✅ Initialize OpenAI client securely
client = OpenAI(api_key=os.getenv("KEY"))

app = FastAPI()

# ✅ Allow CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🧺 Request body model
class PantryRequest(BaseModel):
    items: list[str]

# 🍽️ Meal suggestion endpoint
@app.post("/suggest-meals")
async def suggest_meals(request: PantryRequest):
    prompt = (
        f"I have these ingredients in my pantry: {', '.join(request.items)}. "
        "Suggest 3 healthy dinner ideas I can make for 2 people."
    )

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7,
        max_tokens=300,
    )

    return {"meals": response.choices[0].message.content}
