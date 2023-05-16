import { useState } from "react";
import Exchange from "./Exchange";
import axios from "axios";

const CurrencyConvertor =() => {
    const currencies =['BTC','ETH','USD','XRP','LTC','ADA'];
    const [chosenPrimaryCurrency,setchosenPrimaryCurrency]=useState('BTC')
    console.log(chosenPrimaryCurrency)
    const [chosenSC, setchosenSC]=useState('USD')
    console.log(chosenSC)
    const [amount,setamount]=useState(1)
    console.log(amount);
    const[exchangeRate,setexchangeRate]=useState(0)
    const [Result,setResult]=useState(0)
    const convert=()=>{


var options = {
  method: 'GET',
  url: 'https://alpha-vantage.p.rapidapi.com/query',
  params: {
    from_currency: chosenPrimaryCurrency,
    function: 'CURRENCY_EXCHANGE_RATE',
    to_currency: chosenSC
  },
  headers: {
    'X-RapidAPI-Key': 'f877cc701amsh4e9a5428c2e8213p153f7djsnb73b52f5e30b',
    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
  }
};

axios.request(options).then	((response)=>{console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
setexchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
setResult((response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])*amount)})
.catch ((error) =>{
	console.error(error)
})

    }
    console.log(Result);
    return (
      <div className="Currency-Convertor">
        <div></div>
     <h2>Currency</h2>
     <table className="input-box">
        <tbody >
            <tr>{chosenPrimaryCurrency}</tr>
            <td>
                <input type="number" name="currency-amount-1" value={amount}
                onChange={(e)=> setamount(e.target.value)}></input>
            </td>
            
            <td>
                <select value={chosenPrimaryCurrency} name="currrency-option-1" className="currency-options"
                onChange={(e)=>setchosenPrimaryCurrency(e.target.value)}>
                    {currencies.map((currency,_index)=><option key={_index}>{currency}</option>)}
                </select>
            </td>
            <tr>{chosenSC}</tr>
            <td>
                <input type="number" name="currency-amount-1" value={Result} disabled={true}></input>
            </td>
            <td>
                <select value={chosenSC} name="currrency-option-2" className="currency-options"
                 onChange={(e)=> setchosenSC(e.target.value)}>
                {currencies.map((currency,_index)=><option key={_index}>{currency}</option>)}
                </select>
            </td>
           
        </tbody>
     </table>
     <button id ="convert-button" onClick={convert}>Convert</button><br/>
     <Exchange
    exchangeRate={exchangeRate} 
    chosenPrimaryCurrency={chosenPrimaryCurrency}
    chosenSC={chosenSC} />
      </div>
    );
  }
  
  export default CurrencyConvertor;