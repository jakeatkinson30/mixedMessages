const wands = ['Acacia', 'Alder', 'Apple', 'Ash', 'Aspen', 'Beech', 'Blackthorn', 'Black Walnut', 'Cedar', 'Cherry', 'Chestnut', 'Cypress', 'Dogwood', 'Ebony', 'Elder', 'Elm', 'English Oak', 'Fir', 'Hawthorn', 'Hazel', 'Holly', 'Hornbeam', 'Larch', 'Laurel', 'Maple', 'Pear', 'Pine', 'Poplar', 'Red Oak', 'Redwood', 'Rowan', 'Silver Lime', 'Spruce', 'Sycamore', 'Vine', 'Walnut', 'Willow', 'Yew'];

const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

const patronus = ['Stag', 'Jack Russel Terrier', 'Otter', 'Horse', 'Hare', 'Phoenix', 'Doe', 'Cat', 'Wolf', 'Weasel', 'Lynx', 'Fox', 'Swan', 'Boar', 'Goat', 'Ass', 'Sloth']; 

const myFunction = () => {
    const getRandomElement = arr => {
        var max = (arr.length - 1);
        var randIndex = Math.floor(Math.random() * (max)); 
        return arr[randIndex];
    }
    document.getElementById('newText').innerHTML = '';
    document.getElementById('newText').innerHTML = `Congratulations, your official wand is: ${getRandomElement(wands)}, your house will be: ${getRandomElement(houses)} and your patronus will be: ${getRandomElement(patronus)}!`;
}


