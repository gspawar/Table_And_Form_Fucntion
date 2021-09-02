import React, { useState } from "react";

const InputForm = (props) => {
    const [fullname , setFullName] = useState("");
    const [mobile , setMobile] = useState("");
    const [age , setAge] = useState("");
    const onFormSubmit = (event) => {
        event.preventDefault();
        const myUser = {
            fname : fullname,
            mobile : mobile,
            age : age
        }
        props.getData(myUser);
        window.alert("Data is Submitted...");
        setFullName("");
        setMobile("");
        setAge("");
    }
    return (
        <div>
            <form onSubmit = {onFormSubmit}>
                <div>

                    <input value = {fullname} id = "q" type = "text"
                        placeholder = "Enter a FullName..."
                        onChange = {(e) => {
                            setFullName(e.target.value)
                    }}/>

                    <input value = {mobile} id = "s" type = "number"
                        placeholder = "Enter A MobileNo..."
                        onChange = {(e) => {
                            setMobile(e.target.value)
                    }}/>

                    <input value = {age} id = "u" type = "number"
                        placeholder = "Enter a Age..."
                        onChange = {(e) => {
                            setAge(e.target.value)
                    }}/>

                    <button className = "four" type = "submit">Submit</button>
                </div>
                
            </form>

        </div>
    );
}

export default InputForm;
