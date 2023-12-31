const recipes = [
    {
        id: "1",
        name: "Mushroom Skewer",
        ingredients: ["Any Mushroom"],
        effects: ["Effect Not Available"],
        notes: ["Cooked In Pot"]
    },
    {
        id: "2",
        name: "Meat and Mushroom Skewer",
        ingredients: ["Any Mushroom", "Any Meat"],
        effects: ["Effect Not Available"],
        notes: ["Cooked In Pot"]
    },
    {
        id: "3",
        name: "Fish and Mushroom Skewer",
        ingredients: ["Any Mushroom", "Any Fish"],
        effects: ["Effect Not Available"],
        notes: ["Cooked In Pot"]
    },
    {
        id: "4",
        name: "Meat Skewer",
        ingredients: ["Any Meat"],
        effects: ["Effect Not Available"],
        notes: ["Cooked In Pot"]
    },
    {
        id: "5",
        name: "Fish Skewer",
        ingredients: ["Any Fish"],
        effects: ["Effect Not Available"],
        notes: ["Cooked In Pot"]
    },
    {
        id: "6",
        name: "Seafood Skewer",
        ingredients: ["Any Snail or Crab"],
        effects: ["Effect Not Available"],
        notes: ["Cooked In Pot"]
    },
    {
        id: "7",
        name: "Copious Meat Skewers",
        ingredients: ["Any Four Different Meat"],
        effects: ["Effect Not Available"],
        notes: ["Cooked In Pot"]
    },
    {
        id: "8",
        name: "Copious Seafood Skewers",
        ingredients: ["Any Four Different Fish"],
        effects: ["Effect Not Available"],
        notes: ["Cooked In Pot"]
    },
    {
        id: "9",
        name: "Steamed Fruit",
        ingredients: ["Any Fruit", "Any Vegetable"],
        effects: ["Effect Not Available"],
        notes: ["Cooked In Pot"]
    },
    {
        id: "10",
        name: "Steamed Tomatoes",
        ingredients: ["Hylian Tomato", "Any Vegetable"],
        effects: ["Effect Not Available"],
        notes: ["Cooked In Pot"]
    },
    {
        id: "11",
        name: "Steamed Mushrooms",
        ingredients: ["Any Mushroom", "Any Vegetable"],
        effects: ["Effect Not Available"],
        notes: ["Cooked In Pot"]
    },
    {
        id: "12",
        name: "Steamed Meat",
        ingredients: ["Any Meat", "Any Vegetable"],
        effects: ["Effect Not Available"],
        notes: ["Cooked In Pot"]
    },
    {
        id: "13",
        name: "Steamed Fish",
        ingredients: ["Any Fish", "Any Vegetable"],
        effects: ["Effect Not Available"],
        notes: ["Cooked In Pot"]
    },
    {
        id: "14",
        name: "Sauteed Peppers",
        ingredients: ["Spicy Pepper"],
        effects: ["Effect Not Available"],
        notes: ["Cooked In Pot"]
    },
    {
        id: "15",
        name: "Sauteed Nuts",
        ingredients: ["Any Nut"],
        effects: ["Effect Not Available"],
        notes: ["Cooked In Pot"]
    }
]

function createNewHTML(HTML) {
    const template = document.createElement("template");
    template.innerHTML = HTML.trim();
    return template.content.firstElementChild;
}

function outputEach(recipeID, operation) {
    let i = 0;
    let data = ``;

    switch(operation) {
        case 'ingredients':
            while (i < recipes[recipeID].ingredients.length) {
                if (i + 1 === recipes[recipeID].ingredients.length)
                    data += `<li>${recipes[recipeID].ingredients[i]}</li>`;
                else {
                    data += `<li>${recipes[recipeID].ingredients[i]} +</li>`;
                }
                i++
            }
            break;
        case 'effects':
            while (i < recipes[recipeID].effects.length) {
                data += `<li>${recipes[recipeID].effects[i]}</li>`;
                i++
            }
            break;
        case 'notes':
            while (i < recipes[recipeID].notes.length) {
                data += `<li>${recipes[recipeID].notes[i]}</li>`;
                i++
            }
            break;
        default:
            break;
    }

    return data;
}

function addRecipe(recipe) {
    let newRecipe = createNewHTML(`
        <div class="cookbook-entry">
            <p>${recipes[recipe].id}</p>
            <div class="image-container">
                <img src="./images/recipes/${recipes[recipe].id}.png">
            </div>
            <p>${recipes[recipe].name}</p>
            <ul>
                ${outputEach(recipe, 'ingredients')}
            </ul>
            <ul>
                ${outputEach(recipe, 'effects')}
            </ul>
            <ul>
                ${outputEach(recipe, 'notes')}
            </ul>
        </div>
    `);

    document.getElementById("recipes").appendChild(newRecipe);
}

function populateRecipes() {
    let i = 0;

    while (i < recipes.length) {
        addRecipe(i);
        i++;
    }
}

function recipeSearch() {
    document.getElementById("queryTitle").innerHTML = "Search Results";
}