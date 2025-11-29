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


const hasSelection = Boolean(ingredient);        
const hasMeals = hasSelection && meals.length > 0; 

return (
    <div className="space-y-4">
        {!hasSelection ? (
        <h2 className="text-1xl font-bold ">
            Select an item to see meal ideas
        </h2>
        ):(
        <h2 className="text-1xl font-bold">
            Here are some meal ideas using {ingredient}: 
        </h2> )}

{hasMeals && (
    <ul className=" gap-4 space-y-2">
        {meals.map((meal) => {
            const isOpen = selectedMeal?.id === meal.idMeal;

            return (
                <li
                    key={meal.idMeal}
                    onClick={async () => {
                        if (isOpen) {
                            setSelectedMeal(null);
                        } else {
                            const details = await fetchMealDetails(meal.idMeal);
                            const ingredients = getIngredients(details);
                            setSelectedMeal({
                                id: meal.idMeal,
                                name: meal.strMeal,
                                ingredients,
                            });
                        }
                    }}
                    className="border p-3 cursor-pointer transition-all hover:bg-orange-500 hover:shadow-md"
                >
                    <p className="font-semibold">{meal.strMeal}</p>
                    {isOpen && (
                        <div className="mt-2 p-3 rounded">
                            <p className="text-sm mb-1">Ingredients Needed:</p>
                            <ul className="text-sm space-y-1">
                                {selectedMeal.ingredients.map((ing, i) => (
                                    <li key={i}>{ing}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </li>
            );
        })}
    </ul>
)}


            {hasSelection && !hasMeals && (
        <p className="text-gray-500">No meal found.</p> 
    )}
    </div>
);
}
