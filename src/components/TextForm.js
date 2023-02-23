import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");

    const uppercase = () => {
        if (text === '') {
            props.textAlert("Enter the text first!!", "warning");
        } else {
            setText(text.toUpperCase());
            props.textAlert("Converted to uppercase!", "success");
        }
    }

    const lowercase = () => {
        if (text === '') {
            props.textAlert("Enter the text first!!", "warning");
        } else {
            setText(text.toLowerCase());
            props.textAlert("Converted to lowercase!", "success");
        }
    }
    const clearText = () => {
        if (text === '') {
            props.textAlert("Enter the text first!!", "warning");
        } else {
            setText('');
            props.textAlert("Text has been cleared!", "success");
        }
    }
    const reverse = () => {
        if (text === '') {
            props.textAlert("Enter the text first!!", "warning");
        } else {
            let reversedText = text.split('').reverse().join('');
            setText(reversedText);
            props.textAlert("Text has been reversed!", "success");
        }
    }

    const copy = () => {
        navigator.clipboard.writeText(text);
        props.textAlert("Text has been copied to the clipboard!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container">
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} placeholder="Enter your text here" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'warning'} mx-2 my-2`} onClick={uppercase}>Convert to uppercase</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'warning'} mx-2 my-2`} onClick={lowercase}>Convert to lowercase</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'warning'} mx-2 my-2`} onClick={clearText}>Click to clear the text</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'warning'} mx-2 my-2`} onClick={reverse}>Click to reverse the text</button>
                <button disabled={text.length === 0} className={`btn btn-${props.mode === 'light' ? 'primary' : 'warning'} mx-2 my-2`} onClick={copy}>Click to copy the text</button>

            </div>

            <div className="container my-3">
                <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your text summary</h1>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h2>
                <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text === '' ? 'Enter the text to preview' : text}</p>
            </div>
        </>
    );
}
