"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function MealIdeas({ ingredient }) {
const [meals, setMeals] = useState([]);

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
}

useEffect(() => {
    async function loadMealIdeas() {
        if (ingredient) {
        const data = await fetchMealIdeas(ingredient);
        setMeals(data);
        }
    }
    loadMealIdeas();
}, [ingredient]); 


return (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold text-blue-600">
        Meal Ideas for &quot;{ingredient}&quot; 
        </h2>

    {meals.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {meals.map((meal) => (
            <li
                key={meal.idMeal}
                className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
            <Image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width={200}
                height={200}
                className="rounded-lg mx-auto mb-2" // 🆕 optimized Image
            />
                <p className="font-semibold">{meal.strMeal}</p>
            </li>
        ))}
        </ul>
        ) : (
        <p className="text-gray-500 italic">
            No meal ideas found for &quot;{ingredient}&quot;.
        </p>
        )}
    </div>
);
}