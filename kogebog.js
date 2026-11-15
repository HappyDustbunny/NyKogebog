// Global variables
let rawText = '';
let recipes = [];
let recipesByName;
let names = [];
let whichTabButtonIsClicked = 'categoryButton';


// Eventlisteners
document.getElementById('button').addEventListener('click', buttonClicked);
document.getElementById('sorting').addEventListener('click', sortCategories);
document.getElementById('tabButtons').addEventListener('click', function(event) { tabButtonsClicked(event); })


// Classes
class Recipe {
    constructor(title, sizeNtime, ingredients, procedure) {
        this.title = title;
        this.sizeNtime = sizeNtime;
        this.ingredients = ingredients;
        this.procedure = procedure;
        // Ther will be more variables to keep track of tips and recommendations of side dishes
    }
}


// Functions
async function setUpFunction() {
    rawText = await fetch('./data.txt').then(r => r.text());
    parseRecipes();
}


function parseRecipes() { // Code for getting the recipes into a format that can be manipulated
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


function tabButtonsClicked(event) {
    let whichTabButtonIsClicked = event.target.id;
    
    // Toggle colour for the tabs and display or remove the sorting option for categories
    if (whichTabButtonIsClicked === 'categoryButton') {
        document.getElementById('alphabeticalButton').classList.remove('tabActive');
        document.getElementById('categoryButton').classList.add('tabActive');
        document.getElementById('sortDiv').style.display = 'block';
    } else {
        document.getElementById('alphabeticalButton').classList.add('tabActive');
        document.getElementById('categoryButton').classList.remove('tabActive');
        document.getElementById('sortDiv').style.display = 'none';
    }

    fillTab(whichTabButtonIsClicked);
}


function fillTab(whichTabButtonIsClicked) {
    console.log('Stuff to do here...');  // TODO
    // Test which tab button was clicked using the functions parameter and then 
    // use the value returned from sortCategories to fill the categories tab
}


function sortCategories() {
    console.log('Stuff to do here...');  // TODO
    // Test for whichSorting and sort categories and return them ready to be filled into the category tab
}


function whichSorting() {  // Return status of radio buttons 
    return document.getElementById('sorting').elements['sort'].value;
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