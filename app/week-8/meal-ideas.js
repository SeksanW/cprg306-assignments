"use client";

import { useState, useEffect } from "react";

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

async function loadMealIdeas() {
    if (!ingredient) return;
    const mealList = await fetchMealIdeas(ingredient);
    setMeals(mealList);
}

useEffect(() => {
    loadMealIdeas();
}, [ingredient]);

return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-4">
        <h2 className="text-2xl font-bold text-blue-500 mb-4">
        Meal Ideas for {ingredient ? ingredient : "…"}
        </h2>

    {!ingredient && (
        <p className="text-gray-500 italic">
            Select an item from your shopping list to see meal ideas.
        </p>
    )}

    {ingredient && meals.length === 0 && (
        <p className="text-gray-500 italic">
            No meal ideas found for "{ingredient}".
        </p>
    )}

    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {meals.map((meal) => (
            <li
            key={meal.idMeal}
            className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition p-2 flex flex-col items-center"
            >
            <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="rounded-md w-40 h-40 object-cover"
            />
            <p className="mt-2 font-semibold text-center">{meal.strMeal}</p>
            </li>
        ))}
    </ul>

    </div>
);
}
