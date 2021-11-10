import logo from './assets/logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <section className="logo">
        <img src={logo} alt=""/>
      </section>
      <section className="main"> 
        <section class="container">
          <p>Bill</p>
          <div class="input-bar">
          <img src="images/icon-dollar.svg" alt="icon-dollar"/>
        <input type="number" name="bill" id="bill" placeholder="0"/>
      </div>
      {/* <!-- Beginning of tip-pad --> */}
      <p>Select tip %</p>
      <section class="tip-pad"> 
        <div class="tip-pad__row">
          <button class="percent-button">5%</button>
          <button class="percent-button">10%</button>
          <button class="percent-button">15%</button>
        </div>
          
        <div class="tip-pad__row">
          <button class="percent-button">25%</button>
          <button class="percent-button">50%</button>
          <input type="number" class="percent-button" placeholder="CUSTOM" name="percent" id="cus-percent"/>
        </div>
      </section>
      {/* <!-- End of tip-pad--> */}
      <p>Number of People</p>
      <div class="input-bar">
        <img src="images/icon-person.svg" alt="icon-person"/>
        <input type="number" name="people" min="1" id="people" placeholder="0"/>
      </div>
    </section>
      </section>
    </div>
  );
}

export default App;
