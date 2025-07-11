const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker');

// Middleware to parse JSON
app.use(express.json());

// Function to create a fake user
const createUser = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
};

// Function to create a fake company
const createCompany = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        }
    };
};

// Route to get a new user
app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

// Route to get a new company
app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

// Route to get both a new user and a company
app.get('/api/user/company', (req, res) => {
    const user = createUser();
    const company = createCompany();
    res.json({ user, company });
});

// Start server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

// http://localhost:8000/api/users/new → Returns a random user
// http://localhost:8000/api/companies/new → Returns a random company
// http://localhost:8000/api/user/company → Returns both

