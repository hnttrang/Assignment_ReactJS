import './Display.css';
import React from 'react';
import { useContext } from 'react';
import { SubmitContext } from '../context/SubmitContext';

const Display = (props) => {
  const {isCalc, isReset, result, calculate} = useContext(SubmitContext);

    return (
        <section className="right-side">
        <div class="display">
          <h5>Tip Amount <br/> <p>/ people</p></h5>
          <h1 id="tipAmount">{result.amount}</h1>
        </div>
        <div className="display">
          <h5>Total <br/> <p>/ people</p></h5>
          <h1 id="total">{result.total}</h1>
        </div>
        <div className="container">
          <button
          disabled={!isReset}
          >RESET</button>
          <button type='button'
          disabled={!isCalc}
          onClick = {e => {
            e.preventDefault();
            calculate(e);
          }}
          >CAL</button>
        </div>
      </section>
    );
  };
  export default Display;