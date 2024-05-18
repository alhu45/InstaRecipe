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

        setProgress(prevState => {
            return {...prevState, started: true}
        })
        axios.post('http:/httpbin.org/post', fd, {
            onUploadProgress: (progressEvent) => { setProgress(prevState => {
                return {...prevState, pc: progressEvent.progress*1000}
            })},
            headers: {
                "Custom-Header": "value",

            }
        })
        .then(res => {
            setMsg("Upload Sucessful");
            console.log(res.data);
        })
        .catch(err => {
            setMsg("Upload Failed");
            console.error(err)
        });
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