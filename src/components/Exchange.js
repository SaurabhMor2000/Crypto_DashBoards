
const Exchange =({exchangeRate,chosenPrimaryCurrency,chosenSC}) => {
    return (
      <div className="Exchange">
        <h3>Exchange Rate :</h3>
   <h1> { exchangeRate}</h1>
   <p>{chosenPrimaryCurrency} to {chosenSC}</p>
      </div>
    );
  }
  
  export default Exchange;