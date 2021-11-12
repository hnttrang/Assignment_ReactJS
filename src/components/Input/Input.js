import dollar from "../../assets/icon-dollar.svg";
import person from "../../assets/icon-person.svg";
import React from "react";
import { useState, useContext, useEffect } from "react";
import Button from "../Button/Button";
import { SubmitContext } from "../context/SubmitContext";
import  "./Input.css"


function Input(){
    const {data, setData, isValid} = useContext(SubmitContext);
    //console.log(data);
    const tippad = [
        [5, 10, 15],
        [20, 25]];

    const preventOperator = e =>{
            if (e.key == '-' || e.key == '+'){
                e.preventDefault();
            }
        };
        //Int value
    const preventFloat = e =>{
        if (e.key == '.'){
            e.preventDefault();
        }
    };

    return (
        <div className="input">
            <form id="input-form" 
                onSubmit={e => {
                    //submitForm();
                }}>
                <p>Bill</p>
                
                <div className={isValid.bill ? "input-bar" : "input-bar input-bar__invalid"}>
                    <img src={dollar} alt="icon-dollar"/>
                    <input type="number" 
                    placeholder="0"
                    onKeyPress = {e =>{
                        preventOperator(e);
                    }}
                    onChange = {e => {
                        setData({...data, bill: parseFloat(e.target.value)});
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
                    onKeyPress = {e => {
                        preventOperator(e);
                    }}
                    onClick = { (e) => {
                        setData({...data, tip: parseFloat(e.target.value)});
                    }}
                    onChange = {e =>{
                        setData({...data, tip: parseFloat(e.target.value)});
                    }}/>
                </div>

                <p>Number of People</p>
                <div className={isValid.people ? "input-bar" : "input-bar input-bar__invalid"}>
                    <img src={person} alt="icon-person"/>
                    <input 
                    type="number" placeholder="0"
                    onKeyPress = {e => {
                        preventOperator(e);
                        preventFloat(e);
                    }}
                    onChange = {e => {
                        setData({...data, people: parseFloat(e.target.value)});
                    }} />
                </div>
            </form>
        </div>
        
    );
}

export default Input;