//Concept: Write down the type of a Pokemon Start (so Fire, Water, or Grass), then output a random Pokemon of that same type along with the Gen they're from

//Steps to Achieve:
    //I wanted this to not be case-sensitive, so I match the user's input to accepted values for spelling to then select the Pokemon array of that type
        //I then randomize the selected Pokemon Type array through a bit of a process
    //Then I match the selected Pokemon to one of the 6 Gens to store which Gen the Pokemon is from
        //And finally, I output
    //This was highkey kind of a chore but it was fun to make

//Defining Pokemon Types and Pokemon
let fire = ['Charmander', 'Cyndaquil', 'Torchic', 'Chimchar', 'Tepig', 'Fennekin'];
let water = ['Squirtle', 'Totadile', 'Mudkip', 'Piplup', 'Oshawott', 'Froakie'];
let grass = ['Bulbasaur', 'Chikorita', 'Treecko', 'Turtwig', 'Snivy', 'Chespin'];

let typeArray = [fire, water, grass];

//Accepted inputs
let fireSpellings = ["fire", "Fire", "FIRE"];
let waterSpellings = ["water", "Water", "WATER"];
let grassSpellings = ["grass", "Grass", "GRASS"];

//User Input
let input = process.argv[2];

    //I wanted to implement a system that cycled through this array as well to automate things a bit more, but that got confusing so this variable isn't used
let spellings = [fireSpellings, waterSpellings, grassSpellings];

//Temporary value for 'type'
let type = 0;

//Running through each value of typeArray
for (u = 0; u < typeArray.length; u++) {
    //Fire run
    for (i = 0; i < fireSpellings.length; i++) {

        let spellSelect = fireSpellings [i];
        if (input == spellSelect) {
            type = fire;
        }
    }

    //Water run
    for (i = 0; i < waterSpellings.length; i++) {

        let spellSelect = waterSpellings [i];
        if (input == spellSelect) {
            type = water;
        }
    }

    //Grass run
    for (i = 0; i < grassSpellings.length; i++) {

        let spellSelect = grassSpellings [i];
        if (input == spellSelect) {
            type = grass;
        }
    }
}


//Selected Pokemon Array
let pokemon = type;

    //Here I'm defining empty variables to fill them later
let pokeArray = [];
let pokeStore = [];
let pokeStore2 = [];

    function pokeRand() {
        return Math.floor(Math.random() * ((pokemon.length)));
    }
    
    //Poke Array Randomizer
    for (let pokeCount = 0; pokeCount < pokemon.length; pokeCount++) {
            //Assign Random Numbers
        let select1 = pokeRand();
        pokeStore.push(pokemon[select1]);
    
        let select2 = pokeRand();
    
                //select2 HAS to be diff from select1
        while (select2 == select1) {
            select2 = pokeRand();
        };
    
        pokeStore2.push(pokemon[select2]);
    
            //Reassign values from storage
            //Removing storage too
        pokemon.splice(select1, 1, pokeStore2[0]);
        pokeStore2.pop();
        pokemon.splice(select2, 1, pokeStore[0]);
        pokeStore.pop();
    };

    //Choosing selected Pokemon index
pokeSelect = pokemon.length - 1

    //Displaying selected pokemon
let displayPoke = pokemon[pokeSelect];

        //Assigning Gen a temporary value
let genSelect = 0;

//Hard coding the Pokemon from each Gen
if (displayPoke == 'Charmander' || displayPoke == 'Squirtle' || displayPoke == 'Bulbasaur') {
    genSelect = 1;
};

if (displayPoke == 'Cyndaquil' || displayPoke == 'Totadile' || displayPoke == 'Chikorita') {
    genSelect = 2;
};

if (displayPoke == 'Torchic' || displayPoke == 'Mudkip' || displayPoke == 'Treecko') {
    genSelect = 3;
};

if (displayPoke == 'Chimchar' || displayPoke == 'Piplup' || displayPoke == 'Turtwig') {
    genSelect = 4;
};

if (displayPoke == 'Tepig' || displayPoke == 'Oshawott' || displayPoke == 'Snivy') {
    genSelect = 5;
};

if (displayPoke == 'Fennekin' || displayPoke == 'Froakie' || displayPoke == 'Chespin') {
    genSelect = 6;
};


console.log ("The pokemon selected is", displayPoke, "from Gen", genSelect);