// Code for getting the recipes into a format that can be manipulated

let rawText = '';
let recipes = [];
let recipesByName;
let names = [];

document.getElementById('button').addEventListener('click', buttonClicked);

class Recipe {
    constructor(title, sizeNtime, ingredients, procedure) {
        this.title = title;
        this.sizeNtime = sizeNtime;
        this.ingredients = ingredients;
        this.procedure = procedure;
        // Ther will be more variables to keep track of tips and recommendations of side dishes
    }
}

async function setUpFunction() {
    rawText = await fetch('./data.txt').then(r => r.text());
    parseRecipes();
}

function parseRecipes() {
    // A loop should read the recipes one at a time from rawText and stuff 
    // them into an array using relevant regex

    // First iteration of loop by hand for testing purposes
    //  Stuff the recipe elements into relevant variables
    let title = 'Mudderkager';
    let sizeNtime = '(4 pers) (1 time)';
    let ingredients = ['0.5 kg sand', '1L vand'];
    let procedure = ['Kom 0.5 kg sand i en spand', 'Rør 1L vand i', 'Form til kager'];
    
    // Stuff the variables into an Recipe object
    currentRecipe = new Recipe(title, sizeNtime, ingredients, procedure);
    
    // Push the object into an array of all recipes
    recipes.push(currentRecipe);
    
    // Second iteration of loop by hand for testing purposes
    title = 'Vafler';
    sizeNtime = '(4 pers) (1 time)';
    ingredients = ['0.5 L fløde', '2 dL mel'];
    procedure = ['Pisk 0.5 L fløde til flødeskum', 'Rør 2 dL mel i', 'Bag vaflerne'];
    
    // Stuff the variables into an Recipe object
    currentRecipe = new Recipe(title, sizeNtime, ingredients, procedure);
    
    // Push the object into an array of all recipes
    recipes.push(currentRecipe);

    // End of loop

    // Get an array containing the recipe names
    for (item of recipes) {names.push(item.title)};
    // Sort the names (NOTE: sort() is case sentitive: M is before a)
    names.sort();
    console.log(names);

    
    // Transform the recipes array into a Map in order to get recipes from the title
    recipesByName = new Map(recipes.map(item => [item.title, item]));

    // Get specific recipe by recipesByName.get('Mudderkager') and address ingredients by 
    // recipesByName.get('Mudderkager').recipeText.ingredients
    // Test for existence of recipe by recipesByName.has('Pangalactic Gargleblaster')
}

// Add functionality to button, just for funsies
function buttonClicked() {
    console.log('Button clicked!');
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    document.getElementById('button').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.getElementById('button').style.borderRadius = `${Math.round(Math.random()*10)}px`;
}