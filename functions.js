function makeBurger(bread, patty, pickles) {
    var newBurger = bread + patty + pickles + bread;
    return newBurger;
}

function makeChips(potato, salt, vinegar) {
    var newChips = potato + ((salt == true) ? salt : "") + ((vinegar == true) ? vinegar : "");
    return newChips;
}

function makeDrink(flavour, size) {
    var newDrink = flavour + size;
    return newDrink;
}

function makeFruitSalad(sugar, apple, banana, orange, grape, bowl, spoon) {
    var fruits = (apple ? "apple" : "") +
                 (banana ? "banana" : "") +
                 ((orange && grape) ? "orange grape" : "");

    var newFruitSalad = (fruits != "") ? (fruits + (sugar ? " sugar" : "")) : "No fruits";

    var serveType = (bowl && spoon) ? "served in a bowl with a spoon" : "served";

    return newFruitSalad + " " + serveType;
}

