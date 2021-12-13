import React from "react"
import ATMDeposit from "./atmDeposit";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [atmMode, setAtmMode] = React.useState("");
  const [validTransaction, setValidTransaction] = React.useState(false);
  // Clears input field after form is submitted or ATM mode Changed
  const [value, setValue] = React.useState("");
  let status = `Available Funds $ ${totalState} `;
  const handleChange = (event) => {
    setValue(event.target.value);
    setDeposit(Number(event.target.value));
    if(event.target.value<=0){
      setValidTransaction(false);
    } else if(atmMode=="Cash Back" && Number(event.target.value) >totalState){
      setValidTransaction(false);
    } else setValidTransaction(true);
  };
  const handleSubmit = (event) => {
    let newTotal = 0;
    if(atmMode=="Cash Back" && Number(deposit) >totalState){
      newTotal = totalState;
      setValidTransaction(false);
    }else if(atmMode=="Cash Back" && Number(deposit) <=totalState){
       newTotal = totalState - deposit;
    } else if (atmMode=="Deposit" && Number(deposit) >=0){
      newTotal = totalState + deposit;
    } else newTotal = totalState;
    setTotalState(newTotal);
    // Clears input field after form is submitted
    setValue("");
    event.preventDefault();
  };

  const handleModeSelect = (event) => {
    setAtmMode(event.target.value);
    // Clears input field after ATM mode Changed
    setValue("");
    event.preventDefault();
  };


  return (
    <div className="vh-100 w-100 pt-5"style={{backgroundColor: 'LightSteelBlue', marginTop:0}}>
    <form 
    className="mx-auto shadow-lg w-75 card text-center p-3" style={{maxWidth: 400, minWidth: 300, borderRadius: 10, backgroundColor: 'MediumTurquoise'}}
    onSubmit={handleSubmit}>
      <h2 className="pt-1">Neighborhood ATM</h2>
      
      <label className="py-2">Select an action below to continue</label>
      <select className="form-select py-2 mb-2 w-50 mx-auto" onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
        <option id="no-selection" value=""></option>
        <option id="deposit-selection" value="Deposit">Deposit</option>
        <option id="cashback-selection" value="Cash Back">Cash Back</option>
      </select>
      <h3 className="py-2" id="total">{status}</h3>
      <ATMDeposit onChange={handleChange} atmMode={atmMode} validTransaction={validTransaction} value={value}></ATMDeposit>
    </form>
    </div>
  );
};
export default App;
