# Our Project
During our HawkHacks hackathon, our team decided to create a web application called InstaRecipe. InstaRecipe is a website where users can upload pictures of ingredients they have, and in turn, they will be given a recipe that is generated based on the classified ingredients.

# How it is built
Using React.js and a Flask backend, we were able to create our project InstaRecipe. 

We first started off building the initial website with React so we were able to have a basic foundation of how the website will look. Using react components and hooks, we were able to create multiple components to create the UI of the website. This included handling user interactions and managing the state of the application.

One of the key components we developed was the image upload feature. This allowed users to upload an image of their ingredients, which was then sent to the backend for processing.

Since we needed to detect what ingredients were required, we used a pre-existing ML model that is used to detect what ingredients were in a photo. To integrate, we first had to load the pre-trained model, then the model was linked to the user’s image upload feature. When a user uploads an image, the model processes the image and makes predictions about the ingredients present.

Afterwards, we had to integrate a backend to use an API called Spoonacular to fetch the recipe respect to the ingredients the model predicted. By creating multiple endpoints using Flask, we were able to integrate the ML model and the recipe API together to return a recipe.

To personalize the user experience, we implemented a login system using Auth0. This allowed users to create accounts and log in securely to access their recipes they previously generated. This functionality was integrated seamlessly into the React frontend and Flask backend.

# Workflow
Here’s a simple workflow of how our application works:

- User Authentication: The user is prompted to log in or sign up using Auth0.
- Image Upload: After logging in, the user can upload an image of their ingredients.
- Ingredient Detection: The uploaded image is sent to the backend, where the ML model classifies the image and identifies the ingredients.
- Recipe Generation: The identified ingredients are sent to another backend endpoint, which calls the Spoonacular API to fetch recipes based on those ingredients.
- Display Recipes: The recipes are returned to the frontend and displayed to the user.

This setup ensures a smooth and interactive experience for the user, leveraging the power of machine learning and API integrations to provide useful recipes based on the ingredients they have.

# Project Link
https://taikai.network/hackbox/hackathons/hawkhacks/projects/clwcxyo9z0ca0yg018fkv6meu/idea
