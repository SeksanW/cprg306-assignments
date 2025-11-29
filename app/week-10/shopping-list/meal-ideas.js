import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);

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

async function fetchMealDetails(mealId) {
        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
            );
            const data = await response.json();
            return data.meals?.[0] || null;
        } catch (error) {
            console.error("Error fetching meal details:", error);
            return null;
        }
    }

function getIngredients(meal) {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ing = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if ( ing && ing.trim() ) {
                const line = measure && measure.trim()
                    ? `${ing.trim()} (${measure.trim()})`
                    : ing.trim();
                ingredients.push(line);
            }
        }
        return ingredients;
    }

useEffect(() => {
    async function load() {
        if (!ingredient) {
        setMeals([]); 
        setSelectedMeal(null);
        return;
        }
        const data = await fetchMealIdeas(ingredient);
        setMeals(data);
        setSelectedMeal(null);
    }
    load();
}, [ingredient]);

async function handleMealClick(meal) {
        const details = await fetchMealDetails(meal.idMeal);
        if (!details) {
            setSelectedMeal(null);
            return;
        }

        const ingredients = getIngredients(details);
        setSelectedMeal({
            name: details.strMeal,
            ingredients,
        });
}

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
                onClick={() => handleMealClick(meal)}
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
        {selectedMeal && (
            <div className="border rounded p-4 bg-slate-900 space-y-2">
                <h3 className="font-semibold text-lg">
                    {selectedMeal.name}
                </h3>
                <p className="text-sm">Ingredients needed:</p>
                    <ul className="mt-1 text-sm space-y-1">
                        {selectedMeal.ingredients.map((ing, index) => (
                            <li key={index}>{ing}</li>
                        ))}
                    </ul>
            </div>
        )}
    </div>
);
}