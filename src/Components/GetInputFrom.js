import React from "react";
import InputForm from "./InputForm";

const GetInputFrom = (props) => {
    const inputForm = (receivedData) => {
        const receivedDataTwo = {
            ...receivedData , id : Math.random().toString()
        };
        props.onGetData(receivedDataTwo);
    }
    return (
        <div>
            <InputForm getData = {inputForm}></InputForm>
        </div>
    );
}

export default GetInputFrom;