import dollar from "../../assets/icon-dollar.svg";
import person from "../../assets/icon-person.svg";
import  "./Input.css"
function input({children}){
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
                        //validateInput(e);
                    }}/>
                </div>
                <p>Select tip %</p>
                <div className="tip-pad">
                    {children}
                    <input className='percent-button' placeholder='CUSTOM' type='number'/>
                </div>

                <p>Number of People</p>
                <div className="input-bar">
                    <img src={person} alt="icon-person"/>
                    <input type="number" name="people" id="people" placeholder="0"/>
                </div>
            </form>
        </div>
        
    );
}

export default input;