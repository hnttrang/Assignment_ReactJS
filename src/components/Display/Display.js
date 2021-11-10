import './Display.css';

const Display = ({amount, total, children }) => {
    return (
        <section className="right-side">
        <div class="display">
          <h5>Tip Amount <br/> <p>/ people</p></h5>
          <h1 id="tipAmount">0.00</h1>
        </div>
        <div className="display">
          <h5>Total <br/> <p>/ people</p></h5>
          <h1 id="total">0.00</h1>
        </div>
        <div className="container">
          <button id="reset">RESET</button>
          <button type='submit' form='input-form' disabled={true}>CAL</button>
        </div>
      </section>
    );
  };
  export default Display;