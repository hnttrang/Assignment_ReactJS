import './styles/css/style.css';
import Logo from './assets/logo.svg';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Display from './components/Display/Display';

//const tippad
let data = {
  amount : '0.00', total : '0.00'
}


function App() {
  return (
    //  />
    <body>
      <div className="logo"><img src={Logo} /></div>
      <div className="main">
      <Input>
        <Button
        className="percent-button"
        value = "0"
        onClick={(e) => {
          e.preventDefault();
          console.log("clicked");
        }}>
        </Button>
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
