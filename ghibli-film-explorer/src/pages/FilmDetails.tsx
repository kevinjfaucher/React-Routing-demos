import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


interface FilmDetailsData {
    title: string;
    description: string;
    director: string;
    producer: string;
    release_date: string;
}

const FilmDetails: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const [film, setFilm] = useState<FilmDetailsData | null>(null);

    useEffect(() => {
        fetch(`https://ghibliapi.vercel.app/films/${id}`)
            .then((response) => response.json())
            .then((data) => setFilm(data))
            .catch((error) => console.error('Error fetchign film details: ', error));
    }, [id]);

    return (
        <div>
            {film ? (
                <div>
                    <h1>{film.title}</h1>
                    <p><strong>Description</strong> {film.description}</p>
                    <p><strong>Director</strong> {film.director}</p>
                    <p><strong>Producer</strong> {film.producer}</p>
                    <p><strong>Release Date:</strong> {film.release_date}</p>
                    <Link to="/"> ET go home</Link>
                </div>
            ) : (
                <p>Loading....</p>
            )}
        </div>
    );
};

export default FilmDetails;