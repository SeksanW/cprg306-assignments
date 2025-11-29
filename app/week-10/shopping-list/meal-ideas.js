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

useEffect(() => {
    async function load() {
        if (!ingredient) {
        setMeals([]); 
        return;
        }
        const data = await fetchMealIdeas(ingredient);
        setMeals(data);
    }
    load();
}, [ingredient]);

const hasSelection = Boolean(ingredient);        
const hasMeals = hasSelection && meals.length > 0; 

return (
    <div className="space-y-4">
        {!hasSelection ? (
        <h2 className="text-1xl font-bold ">
            Meal Ideas for (select an item)
        </h2>
        ):(
        <h2 className="text-1xl font-bold">
            Meal Ideas for &quot;{ingredient}&quot; 
        </h2> )}

        {hasMeals && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {meals.map((meal) => (
            <li
                key={meal.idMeal}
                className=" border 1 rounded p-2 hover:shadow-md transition">
                {meal.strMeal}
            </li>))}
            </ul>
        )}
            {!hasSelection && (
        <p className="text-gray-500">Choose an item to see ideas.</p>)}
            {hasSelection && !hasMeals && (
        <p className="text-gray-500">No meal found.</p> 
    )}
    </div>
);
}