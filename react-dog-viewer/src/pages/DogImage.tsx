import React, { useState, useEffect } from 'react';

const DogImage: React.FC = () => {
    const [dogImage, setDogImage] = useState<string>('');
    


    const fectDogImage = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => setDogImage(data.message))
        .catch((error) => console.error('Error fetching dog image: ', error));
    }

    useEffect(() => {
        fectDogImage();
    }, []);

    return (
        <div>
            <h1>Random Dog Image</h1>
            {dogImage ? <img src={dogImage} alt="Random Dog" />: <p>Loading...</p>}
            <button onClick={fectDogImage} >sdfsdf</button>
        </div>
    );
};

export default DogImage;