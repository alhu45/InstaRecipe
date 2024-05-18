import React, { useState } from 'react';
import axios from 'axios';
import "../Styles/ImageClassifier.css"
import { MdCloudUpload, MdDelete} from 'react-icons/md'

const ImageUpload = () => {
    const [file, setFile] = useState(null);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(false);

    const [image, setImage] = useState(null)
    const [fileName, setFileName] = useState("No selected file")

    // Function that converts the image file into Base64 encoded string
    const loadImageBase64 = (file) => {
        return new Promise((resolve, reject) => {

            // Creates a new FileReader object. This API reads the contents of the file 
            const reader = new FileReader();

            // Represent the files data as Base64 encoded string
            reader.readAsDataURL(file);

            // Event handler if the file has been sucessufully read
            reader.onload = () => resolve(reader.result);

            // Event handler error occured during read operation
            reader.onerror = (error) => reject(error);
        });
    };

    // Updates the state of the componet with the most recent file the user has selected
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setFileName(selectedFile.name);
        setImage(URL.createObjectURL(selectedFile));
    };
    

    const handleUpload = async () => {
        // If the file is not set, calls the state setter function from the useState hook to display an error message
        if (!file) {
            setError("Please select a file first.");
            return;
        }

        setLoading(true);

        try {
            // Calls function to return file in Base64 string
            const image = await loadImageBase64(file);

            // Sends a post request to the ML model using axios
            const res = await axios({
                method: "POST",
                url: "https://detect.roboflow.com/whatsinyourfridge-1cbaa/1",
                params: {
                    api_key: "whbSYZNCp9KHksNwdJk6"
                },
                data: image,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });

            // If request is sucessful, stores the state inside of setResponse
            setResponse(res.data);

            // Sets error state to NULL, removing previous errors if they existed
            setError(null);
        } catch (err) {
            // If request is not sucessful, stores error message in setError
            setError(err.message);

            // Sets response to NULL
            setResponse(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className = "container">
            <center>
                <main>
                    <form className = "form-border" onClick = {() => document.querySelector(".input-field").click()}>
                        <input 
                            className='input-field' 
                            type="file" 
                            onChange={handleFileChange} 
                            accept='image/*' 
                            hidden 
                        />

                        {image ?
                        <img src = {image} width = {275} height = {150} alt = {fileName} />
                        :
                        <>
                        < MdCloudUpload color = '#1475cf' size = {60} />
                        <p>Upload your ingredients for a yummy recipe!</p>
                        </>
                        }
                    </form>
                </main>
{/* 
                <input type="file" onChange={handleFileChange} /> */}

                <button className = "upload" onClick={handleUpload} alt="Upload">
                    <i>U</i>
                    <i>P</i>
                    <i>L</i>
                    <i>O</i>
                    <i>A</i>
                    <i>D</i>
                </button>

                {/* <button onClick={handleUpload}>Upload</button> */}

                {loading && <div>Loading...</div>}
                {!loading && response && (
                    <div>
                        <h3>Nice! I see you have the following ingredient(s):</h3>
                        <ul>
                            {response.predictions.map((prediction, index) => (
                                <li key={index}>
                                    {prediction.class}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {error && <div>Error: {error}</div>}
            </center>
        </div>
    );
    



};

export default ImageUpload;
