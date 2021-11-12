import { createContext, useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { API } from "../../APIs";

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
		setValueValid(
            !(data.tip == null || data.bill == null || data.people == null)
        );
        setIsCalc(valueValid);
		//console.log(data);
		
    }, [valueValid, data])

	const calculate = async (e) => {
		console.log("click");
		
		try {
			axios.get(`${API}?bill=${data.bill}&people=${data.people}&tipPercent=${data.tip}`).then((response) => {
				console.log(response);
				setResult({
					total: response.data.amount.toFixed(2),
					amount: response.data.amount.toFixed(2)})
					
			  });

			//console.log(result);
		} catch (error) {
			alert("Something has problems")
		}
	};

	const value = {
        setValueValid,
		setData,
        isCalc,
		isReset,
		setIsCalc,
		validateInput,
		result,
		data,
		calculate,
	};

	return (
		<SubmitContext.Provider value={value}>{children}</SubmitContext.Provider>
	);
}

export default SubmitProvider;
