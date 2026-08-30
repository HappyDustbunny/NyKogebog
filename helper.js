let rawText = '';
let recipes = [];

document.getElementById('button').addEventListener('click', buttonClicked);

class Recipe {
    constructor(title, sizeNtime, ingredients, procedure) {
        this.title;
        this.sizeNtime;
        this.ingredients;
        this.procedure;
        // Der kommer flere ting som tips og forslag til tilbehør
    }
}

async function setUpFunction() {
    rawText = await fetch('./data.txt').then(r => r.text());
    // console.log(rawText);
    parseRecipes();
}

function parseRecipes() {
    // En løkke med noget regex-tjavs der læser en linje ad gangen, og 
    // stopper resultatet ind i et recipe-object
    let title = 'Mudderkager';
    let sizeNtime = '(4 pers) (1 time)';
    let ingredients = ['0.5 kg sand', '1L vand'];
    let procedure = ['Kom 0.5 kg sand i en spand', 'Rør 1L vand i'];
    currentRecipe = new Recipe(title, sizeNtime, ingredients, procedure);
    
    // Prop objectet ind i en dictionary, så der kan søges på titlen
    recipes.push({
        recipeName: title,
        recipeText: currentRecipe
    });
    // Slut på løkken
}

function buttonClicked() {
    console.log('Button clicked!');
}