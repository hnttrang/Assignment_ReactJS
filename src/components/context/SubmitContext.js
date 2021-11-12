import { createContext, useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { API } from "../../APIs";

export const SubmitContext = createContext();

function SubmitProvider({ children }) {
	const [isValid, setIsValid] = useState(
		{tip : false,
		bill : false,
		people : false}
	);
    const [isCalc, setIsCalc] = useState(false);
	const [isReset, setIsReset] = useState(false);
	const [result, setResult] = useState(
		{total: '0.00',
		amount: '0.00'}
	)
	const [data, setData] = useState(
        {tip : null,
        bill : null,
        people : null}
    );

	const validateInput = () => {

		if (data.tip == null && data.bill == null && data.people == null){
			return {...isValid, tip : false, bill : false, people : false};
		}
		const floatReg = /^[0-9]*\.?[0-9]*$/;
		const positiveIntReg = /^[1-9]*$/;

		return  {...isValid, tip : floatReg.test(data.tip), bill : floatReg.test(data.bill), people : positiveIntReg.test(data.people)};;
	}


    useEffect(() =>{
		// //console.log(data);
		setIsValid(validateInput());
		setIsReset(
			!(data.tip == null && data.bill == null && data.people == null)
		)
        
    }, [data, isReset])

	useEffect(() => {
		//console.log(isValid);
		setIsCalc(isValid.tip && isValid.people && isValid.bill);
	},[isValid])

	const calculate = async (e) => {
		//console.log("click");
		
		try {
			axios.get(`${API}?bill=${data.bill}&people=${data.people}&tipPercent=${data.tip}`).then((response) => {
				//console.log(response);
				setResult({
					total: response.data.amount.toFixed(2),
					amount: response.data.amount.toFixed(2)})
					
			  });

			////console.log(result);
		} catch (error) {
			alert("Something has problems")
		}
	};

	const value = {
        setIsValid,
		setData,
		isValid,
        isCalc,
		isReset,
		setIsCalc,
		result,
		data,
		calculate,
	};

	return (
		<SubmitContext.Provider value={value}>{children}</SubmitContext.Provider>
	);
}

export default SubmitProvider;
