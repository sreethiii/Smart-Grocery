# 🛒 Smart Grocery App

An aesthetic, intelligent grocery and meal planning app that helps you manage your pantry, track groceries, and generate meal ideas based on available ingredients — all with a fun and interactive UI.

---

## ✨ Features

- 🔐 **Login/Signup with Firebase Auth**
  - Press `Enter` to navigate between fields and trigger login.
  - Bubbly animated grocery items float and burst on successful login.

- 🧺 **Smart Dashboard**
  - Add grocery items via input field and categorize automatically (vegetables, fruits, spices, etc).
  - Interactive checkboxes with quantity input.
  - Pressing `Enter` adds an item directly.
  - Supports new category: **Leafy Vegetables** 🥬
  - Beautiful particle background and organized layout.

- 🍽️ **Generate Meal Ideas**
  - Click the **"Generate Meal Ideas"** button based on pantry items.

---

## 📁 Project Structure


```bash
Smart-Grocery-App/
│
├── backend/              # FastAPI backend (meal ideas, pantry logic)
│   └── main.py
│
├── frontend/             # Next.js + Tailwind CSS frontend
│   └── app/dashboard     # Dashboard page
│   └── app/login         # Login page with animation
│
├── public/animations/    # Grocery images for floating bubbles
│
├── .gitignore
└── README.md             # This file
```


## ⚙️ Backend (FastAPI)

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## 🎨 Frontend (Next.js + Tailwind CSS)

```bash
cd frontend
npm install
npm run dev
```

---

## 📸 Screenshots

### 🔐 Login Page with Floating Veggies
![Login Screenshot](https://github.com/user-attachments/assets/ca0accdd-7c72-4b1a-8331-5fa17c295bb2)

### 🧾 Dashboard with Categorized Inputs
![Dashboard Screenshot](https://github.com/user-attachments/assets/be509feb-a54d-47ec-aaec-312bbb583ad3)

---

## ✨ Features

- 🥬 Animated login screen with veggie bubbles
- 🧠 AI-powered meal idea generator
- 📝 Category-based input (veggies, fruits, spices, etc.)
- 📦 Quantity tracking and checkbox progress
- 🔐 Enter-key navigation and auto-submit

---

