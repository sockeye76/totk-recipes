/* Recipe Data */

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

/* Recipe Display Functions */

function createNewHTML(HTML) {
    const template = document.createElement("template");
    template.innerHTML = HTML.trim();
    return template.content.firstElementChild;
}

function generateList(recipeNum, operation) {
    let i = 0;
    let data = ``;

    switch(operation) {
        case 'ingredients':
            while (i < recipes[recipeNum].ingredients.length) {
                if (i + 1 === recipes[recipeNum].ingredients.length) {
                    data += `<li>${recipes[recipeNum].ingredients[i]}</li>`;
                }
                else {
                    data += `<li>${recipes[recipeNum].ingredients[i]} +</li>`;
                }
                i++
            }
            break;

        case 'effects':
            while (i < recipes[recipeNum].effects.length) {
                data += `<li>${recipes[recipeNum].effects[i]}</li>`;
                i++
            }
            break;

        case 'notes':
            while (i < recipes[recipeNum].notes.length) {
                data += `<li>${recipes[recipeNum].notes[i]}</li>`;
                i++
            }
            break;
            
        default:
            break;
    }

    return data;
}

function addRecipe(recipeNum) {
    let newRecipe = ``;

    switch(recipes[recipeNum].id) {
        case '1':
            newRecipe += `<div class="cookbook-entry" id="potSection">`;
            break;

        case (recipes[recipeNum].id >= 147 && recipes[recipeNum].id < 198):
            if (recipes[recipeNum].id === 147) {
                newRecipe += `<div class="cookbook-entry heat" id="heatSection">`;
            }
            else {
                newRecipe += `<div class="cookbook-entry heat">`;
            }
            break;

        case '198':
            newRecipe += `<div class="cookbook-entry spring" id="springSection">`;
            break;

        case (recipes[recipeNum].id >= 199 && recipes[recipeNum].id < 215):
            if (recipes[recipeNum].id === 199) {
                newRecipe += `<div class="cookbook-entry cold" id="coldSection">`;
            }
            else {
                newRecipe += `<div class="cookbook-entry cold">`;
            }
            break;

        case (recipes[recipeNum].id >= 215):
            if (recipes[recipeNum].id === 215) {
                newRecipe += `<div class="cookbook-entry elixir" id="elixirSection">`;
            }
            else {
                newRecipe += `<div class="cookbook-entry elixir">`;
            }
            break;

        default:
            newRecipe += `<div class="cookbook-entry">`;
            break;
    }

    newRecipe += `
            <p>${recipes[recipeNum].id}</p>
            <div class="image-container">
                <img src="./images/recipes/${recipes[recipeNum].id}.png">
            </div>
            <p>${recipes[recipeNum].name}</p>
            <ul>
                ${generateList(recipeNum, 'ingredients')}
            </ul>
            <ul>
                ${generateList(recipeNum, 'effects')}
            </ul>
            <ul>
                ${generateList(recipeNum, 'notes')}
            </ul>
        </div>
    `;

    newRecipe = createNewHTML(newRecipe);
    document.getElementById("recipes").appendChild(newRecipe);
}

function populateRecipes() {
    let i = 0;

    while (i < recipes.length) {
        addRecipe(i);
        i++;
    }
}