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
