const username = [
    'jenben1029',
    'dylan344',
    '333juarez',
    'amanda.Bynes',
    'brattyCat39',
    'jamesJames88',
    'crook00',
    'arona09',
    'chocolate8',
    'chonkyMilk37',
    'rawr88',
    'iiop0',
    'heathen07',
    'hoppper67',
    'holla45',
    'zebraGirl33',
    'abraham92',
    'crazy99',
    'Abdula88',
    '77cranberry',
];

const additionalUsername = [
    'fizzy',
    'jazz',
    'breezy',
    'tulip',
    'pixie',
    'peppy',
    'snappy',
    'glitter',
    'daisy',
    'sunny',
    'butter',
    'sugar',
    'frisky',
    'buzzy',
    'witty',
    'sneaky',
    'sassy',
    'dizzy',
    'sprout',
    'spunky',
];

const email = [
    'sillyGuy@yahoo.com',
    'bubbles90@hotmail.com',
    'hedgehoggy88@gmail.com',
    'zebraCage44@yahoo.com',
    'sunflowerBeam89@gmail.com',
    'gigglin78@yahoo.com',
    'movieluver45@yahoo.com',
    'worldyluv45@gmail.com',
    'socialfly67@yahoo.com',
    'nicegirly56@yahoo.com',
    'walrusguy777@hotmail.com',
    'bearhugger88@hotmail.com',
    'foxymomma@yahoo.com',
    'caramelruins45@yahoo.com',
    'panda88@yahoo.com',
    'cheekyluv9@yahoo.com',
    'poker4face@hotmail.com',
    'baseball44@hotmail.com',
    'hoops4lyfe@yahoo.com',
    'gotcha88@gmail.com',
];

const thoughts = [
    'Life is a journey, not a destination.',
    'The only way to do great work is to love what you do.',
    'The best way to predict the future is to invent it.',
    'Believe you can and you\'re halfway there.',
    'We become what we think about.',
    'Don\'t let yesterday take up too much of today.',
    'The future belongs to those who believe in the beauty of their dreams.',
    'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    'If you want to lift yourself up, lift up someone else.',
    'Happiness is not something ready made. It comes from your own actions.',
    'Chase your dreams but always know the road that will lead you home again.',
    'You can\'t go back and change the beginning, but you can start where you are and change the ending.',
    'The best way out is always through.',
    'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.',
    'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    'It does not matter how slowly you go as long as you do not stop.',
    'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    'You have within you right now, everything you need to deal with whatever the world can throw at you.',
    'If you can dream it, you can achieve it.',
    'If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough.'
];

// Getting a random item from an array
const getRandomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

//generating a random email that will be unique according to the username
const getRandomEmail = () =>
    `${getRandomArrItem(username)} ${getRandomArrItem(email)}`;

const getRandomUsername = () =>
    `${getRandomArrItem(username)} ${getRandomArrItem(additionalUsername)}`;


// Function to generate random thoughts
const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thought: getRandomArrayItem(thoughts),
        });
    }
    return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomEmail, getRandomThoughts, getRandomUsername };
