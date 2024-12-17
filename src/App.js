
import { useEffect, useState } from 'react';
import './App.css';
import Button from './Button';
import Header from './Header';
import Quote from './Quote';

function App() {

  const [quote, Setquote] = useState({});

  async function fetchQuote() {
    try{
      const url = "https://zenquotes.io/api/quotes/[your_key]"
      const response = await fetch(url);
      const data = await response.json();
      if (data.length > 0) {
        const firstQuote = data[0];
        Setquote({
          text: firstQuote.q,
          author: firstQuote.a,
        })
      }

    }
    catch(error) {
      return(
        <div>
          <h1>Oops!!!</h1>
        </div>
      )
    }
  }

  useEffect(()=> {
    fetchQuote()
  }, [])

  return (
    <div className="App container bg-white w-11/12 h-5/6 max-w-md place-self-center px-4 py-4 flex flex-col items-center rounded-2xl justify-around">
      <Header />
      <Quote 
      text={quote.text}
      author={quote.author}
      />
      <Button fetchQuote={fetchQuote} />
    </div>
  );
}

export default App;
