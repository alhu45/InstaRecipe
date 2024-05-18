import { useState } from "react";
import axios from "axios";


function Input() {

    const [ file, setFile ] = useState(null);
    const [ progress, setProgress ] = useState({ started: false, pc: 0 });
    const [ msg, setMsg ] = useState(null);

    function handleUpload() {
        if(!file) {
            console.log("No File Selected");
            return;
        }

        const fd = new FormData();
        fd.append('file', file);

        axios.post('http:/httpbin.org/post', fd, {
            onUploadProgress: (progressEvent) => { console.log(progressEvent.progress*100) },
            headers: {
                "Custom-Header": "value",

            }
        })
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
    }

    return(
        <>
            <h3><center>Input image of ingredients here</center></h3>
            <center>
                <input onChange = { (e) => { setFile(e.target.files[0]) } } type = "file"/>
                <button onClick = { handleUpload }>Upload</button>
            </center>
        </>
    );

}

export default Input