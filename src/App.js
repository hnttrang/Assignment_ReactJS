import './styles/css/style.css';
import React from 'react';
import Logo from './assets/logo.svg';
import Input from './components/Input/Input';
import Display from './components/Display/Display';
//const tippad
let data = {
  amount : '0.00', total : '0.00'
}




function App() {
  //setData()

  return (
    //  />
    <body>
      <div className="logo"><img src={Logo} /></div>
      <div className="main">
      <Input>
      </Input>
      <Display
      total = {data.total}
      amount = {data.amount}
      >
      </Display>
      </div>
    </body>
  );
}

export default App;
