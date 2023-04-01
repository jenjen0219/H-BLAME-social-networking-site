const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomEmail, getRandomThoughts, getRandomUsername } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {

    // Drop existing thoughts
    await Thought.deleteMany({});

    // Drop existing users
    await User.deleteMany({});

    // Create empty array to hold the students
    const users = [];

    // Loop 10 times 
    for (let i = 0; i < 10; i++) {
        // Get some random assignment objects using a helper function that we imported from ./data
        const thoughts = getRandomThoughts(5);

        const email = getRandomEmail();
        const username = getRandomUsername();
        const friends = getRandomUsername(5);


        students.push({
            email,
            thoughts,
            username,
            friends,
        });
    }

    // Add students to the collection and await the results
    await Student.collection.insertMany(students);


    // Log out the seed data to indicate what should appear in the database
    console.table(students);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});
