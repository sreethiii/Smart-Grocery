"use client";

import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Particles from "react-tsparticles";

const categories = {
  Vegetables: ["carrot", "potato", "onion", "tomato", "brinjal"],
  LeafyVegetables: ["spinach", "lettuce", "coriander", "mint", "fenugreek"],
  Fruits: ["apple", "banana", "orange", "mango"],
  Spices: ["salt", "pepper", "turmeric", "cumin"],
  Flours: ["wheat flour", "rice flour", "maida"],
};

type Item = {
  id: string;
  name: string;
  category: string;
  checked: boolean;
  quantity: string;
};

export default function Dashboard() {
  const [items, setItems] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [quantity, setQuantity] = useState("1");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddItem = () => {
    if (!inputValue.trim()) return;

    const name = inputValue.trim().toLowerCase();
    const category =
      Object.entries(categories).find(([_, list]) =>
        list.includes(name)
      )?.[0] || "Others";

    const newItem: Item = {
      id: uuidv4(),
      name,
      category,
      checked: false,
      quantity,
    };

    setItems((prev) => [...prev, newItem]);
    setInputValue("");
    setQuantity("1");
  };

  const handleCheckbox = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAddItem();
  };

  const categorizedItems = Object.keys(categories).reduce((acc, category) => {
    acc[category] = items.filter((item) => item.category === category);
    return acc;
  }, {} as Record<string, Item[]>);

  categorizedItems["Others"] = items.filter((item) => item.category === "Others");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Smart Grocery Dashboard</h1>

        <div className="flex flex-wrap justify-center mb-6 gap-3">
          <input
            type="text"
            placeholder="Add grocery item..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            ref={inputRef}
            className="px-4 py-2 w-1/2 rounded-lg bg-white text-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="Qty"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="px-3 py-2 w-20 rounded-lg bg-white text-black focus:outline-none"
          />
          <button
            onClick={handleAddItem}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
          >
            Add
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(categorizedItems).map(([category, items]) => (
            <div key={category} className="bg-white/10 p-4 rounded-xl shadow-lg backdrop-blur border border-white/20">
              <h2 className="text-xl font-semibold mb-4 text-white">{category.replace(/([A-Z])/g, ' $1').trim()}</h2>
              {items.length === 0 ? (
                <p className="text-sm text-gray-300">No items</p>
              ) : (
                items.map((item) => (
                  <label key={item.id} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={() => handleCheckbox(item.id)}
                      className="accent-green-500"
                    />
                    <span className={item.checked ? "line-through text-gray-400" : ""}>
                      {item.name} ({item.quantity})
                    </span>
                  </label>
                ))
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-lg rounded-xl font-semibold transition">
            🍽 Generate Meal Ideas
          </button>
        </div>
      </div>
    </div>
  );
}
