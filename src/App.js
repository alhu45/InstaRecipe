import React, { useState, useEffect } from "react";
import Homepage from "./Components/Homepage.js"
import Navbar from "./Components/Navbar.js"
import ImageClassifier from "./Components/ImageClassifier.js";
import Background from './Components/Background';
import { useAuth0 } from '@auth0/auth0-react';
import "./App.css";



function App() {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  React.useEffect(() => {
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

  // useState for setting a JavaScript object for storing and using data
  const [data, setData] = useState([]);

  // Using useEffect for single rendering
  useEffect(() => {
    // Using fetch to fetch the API
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => {
        // Extracting the "original" values from the JSON response
        const extractedData = data.flatMap((recipe) =>
          [...recipe.missedIngredients, ...recipe.usedIngredients].map((ingredient) => ingredient.original)
        );
        // Setting the extracted data
        setData(extractedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Navbar />
      <Background />
      <ImageClassifier />
      <div className="App">
        <header className="App-header">
          <h1>React and Flask</h1>
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
