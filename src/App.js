import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar.js"
import ImageClassifier from "./Components/ImageClassifier.js";
import Background from './Components/Background';
import { useAuth0 } from '@auth0/auth0-react';
import "./App.css";

function App() {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  // State for storing the recipe title and ingredients
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  // Using useEffect for single rendering
  useEffect(() => {
    // Fetching the API
    fetch("http://127.0.0.1:5000/")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          const recipe = data[0]; // Assuming you're interested in the first recipe

          // Setting the title
          setTitle(recipe.title);

          // Extracting the "original" values from the ingredients
          const extractedData = [...recipe.missedIngredients, ...recipe.usedIngredients].map(ingredient => ingredient.original);

          // Setting the extracted data
          setData(extractedData);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect();
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>Redirecting to login...</div>;
  }

  return (
    <>
      <Navbar />
      <Background />
      <ImageClassifier />
      <div className="App">
        <header className="App-header">
          <h1>Your Recipe:</h1>
          {/* Displaying the recipe title */}
          {title && <h2>{title}</h2>}
          {/* Displaying the extracted data */}
          {data.length > 0 ? (
            <ul>
              {data.map((original, index) => (
                <li key={index}>{original}</li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </header>
      </div>
    </>
  );
}

export default App;
