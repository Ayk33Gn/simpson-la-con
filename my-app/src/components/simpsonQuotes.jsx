import React, { useEffect, useState } from "react";
import axios from "axios";
const Quotes = () => {
  const [getQuote, setGetQuote] = useState([]);
  const onButtonClick = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes/")
      .then((res) => res.data)
      .then((data) => {
        setGetQuote(data);
      });
  }
  useEffect(() => {
    onButtonClick();
  }, []);
  return (
    <div className="quotes">
      <ul>
        <button type="button" onClick={onButtonClick}>
          Click me{" "}
        </button>
        {getQuote.map((simpsonQuotes, index) => (
          <div>
            <div> {simpsonQuotes.character}</div>
            <img src={simpsonQuotes.image} alt="" />
            <div key={index}>{simpsonQuotes.quote}</div>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default Quotes;