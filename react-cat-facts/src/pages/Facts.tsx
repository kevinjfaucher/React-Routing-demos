import React, { useState, useEffect } from 'react';

const Facts: React.FC = () => {
  const [fact, setFact] = useState<string>('');

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then((response) => response.json())
      .then((data) => setFact(data.fact))
      .catch((error) => console.error('Error fetching cat fact:', error));
  }, []);

  return (
    <div>
      <h1>Random Cat Fact</h1>
      <p>{fact || 'Loading...'}</p>
    </div>
  );
};

export default Facts;
