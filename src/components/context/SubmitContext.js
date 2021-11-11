import { createContext, useEffect, useState } from "react";
import React from "react";

export const SubmitContext = createContext();

function SubmitProvider({ children }) {
	const [valueValid, setValueValid] = useState(false);
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

	
    useEffect(() =>{
        setIsCalc(valueValid);
		//console.log(data);
		
    }, [valueValid, data])

	const calculate = async (e) => {
		console.log("click");
		
		try {
			console.log(data);
			let callAPI = await fetch(
				`https://plitter-server.vercel.app/api/calculate?bill=${data.bill}&people=${data.people}&tipPercent=${data.tip}`
			);

			let res = await callAPI.json();
			setResult({
				amount: res.amount.toFixed(2),
				total: res.total.toFixed(2),
			});

			console.log(result);
		} catch (error) {
			console.log('catch error');
		}
	};

	const validateInput = (value) => {
		let valid = (value.tip == null || value.bill == null || value.people == null);
		// console.log(valid);
		// console.log(value);
        setValueValid(
            !(value.tip == null || value.bill == null || value.people == null)
        );
		setData({...data, tip: value.tip, bill : value.bill, people : value.people});
	}


	const value = {
        setValueValid,
        isCalc,
		isReset,
		setIsCalc,
		validateInput,
		result,
		calculate,
	};

	return (
		<SubmitContext.Provider value={value}>{children}</SubmitContext.Provider>
	);
}

export default SubmitProvider;
