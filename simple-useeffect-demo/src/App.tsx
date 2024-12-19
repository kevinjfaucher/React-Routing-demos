import { useState, useEffect } from 'react'
import './App.css'


interface CatFact {
  fact: string;
  length: number;
}


const API_URL = 'https://catfact.ninja/fact';

function App() {
  const [catFact, setCatFact] = useState<string>('Loading...');


  useEffect(() => {
   fetch(API_URL)
      .then((response) => response.json())
      .then((data: CatFact) => {
        setCatFact(data.fact);
      })
      .catch((error) => {
        console.error('Error fetching cat fact:', error);
        setCatFact('Failed to load cat fact');
      });
    }, []);


    return (
      <div>
        <h1>Random Cat Fact</h1>
        <p>{catFact}</p>
      </div>
    );
}

export default App
