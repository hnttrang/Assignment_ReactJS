import dollar from "../../assets/icon-dollar.svg";
import person from "../../assets/icon-person.svg";
import React from "react";
import { useState, useContext, useEffect } from "react";
import Button from "../Button/Button";
import { SubmitContext } from "../context/SubmitContext";
import  "./Input.css"


function Input(){
    // const [value, setValue] = useState(
    //     {tip : null,
    //     bill : null,
    //     people : null}
    // );
    const {data, setData} = useContext(SubmitContext);
    const tippad = [
        [5, 10, 15],
        [20, 25]];

    return (
        <div className="input">
            <form id="input-form" 
                onSubmit={e => {
                    //submitForm();
                }}>
                <p>Bill</p>
                <div className="input-bar">
                    <img src={dollar} alt="icon-dollar"/>
                    <input type="number" name="bill" id="bill" placeholder="0"
                    onChange = {e => {
                        setData({...data, bill: parseFloat(e.target.value)});
                        //validateInput(e);
                    }}/>
                </div>
                <p>Select tip %</p>
                <div className="tip-pad">
                            {
                    tippad.flat().map((btn, idx) => {
                    return (
                        <Button
                        key = {idx}
                        className = {btn == data.tip ? "percent-button percent-button__target" : "percent-button"}
                        value = {btn}
                        onClick = {(e) => {
                        e.preventDefault();
                        setData({...data, tip: parseFloat(btn)});
                        }}>
                        </Button>
                    ) 
                    })}
                    <input id='cus-tip' 
                    className={tippad.flat().includes(data.tip) ? "percent-button" : "percent-button percent-button__target"} 
                    placeholder='CUSTOM' type='number'
                    onClick = { (e) => {
                        setData({...data, tip: parseFloat(e.target.value)});
                    }}
                    onChange = {e =>{
                        setData({...data, tip: parseFloat(e.target.value)});
                    }}/>
                </div>

                <p>Number of People</p>
                <div className="input-bar">
                    <img src={person} alt="icon-person"/>
                    <input 
                    type="number" id="people" placeholder="0"
                    onChange = {e => {
                        setData({...data, people: parseFloat(e.target.value)});
                    }} />
                </div>
            </form>
        </div>
        
    );
}

export default Input;