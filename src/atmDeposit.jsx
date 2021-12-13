import 'bootstrap/dist/css/bootstrap.min.css';
const ATMDeposit = ({ onChange, atmMode, validTransaction, value }) => {
    console.log(`ATM mode: ${atmMode}`);
      if(atmMode != "")  {  return (
            <div>
              <input id="number-input" type="number" value={value} onChange={onChange}></input>
              <input className="button mx-1" type="submit" value="Submit" disabled={!validTransaction} id="submit-input"></input>
            </div>
          );
    } else return <></>;
  };

  export default ATMDeposit;