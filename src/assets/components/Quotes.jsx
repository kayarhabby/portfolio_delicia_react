import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Title from "./Title.jsx";

const Quotes = () => {
    // Correct useState syntax to initialize state
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        const getQuote = async () => {
            try {
                // Replace 'YOUR_API_KEY' with your actual API key
                const response = await axios.get(
                    'https://api.api-ninjas.com/v1/quotes?category=education',
                    {
                        headers: {
                            'X-Api-Key': 'wOAsrkUVCXgtBo8DGP4WuA==PZZ2uQvyILlNQtuI',
                        },
                    }
                );
                console.log(response.data);
                setQuotes(response.data);
            } catch (err) {
                console.error('Error fetching quotes:', err);
            }
        };

        getQuote(); // Call the function to fetch the quotes
    }, []); // Empty dependency array means this runs once on component mount

    return (
        <div className="quotes">
            <Title title="Quotes on Happiness" />
            {/* Render the quotes if they exist */}
            {quotes.length > 0 ? (
                quotes.map((quote, index) => (
                    <div key={index} className="quote">
                        <p>{quote.quote}</p>
                        <p><em>- {quote.author}</em></p>
                    </div>
                ))
            ) : (
                <p>Loading...</p> // Fallback text while quotes are being fetched
            )}
        </div>
    );
};

export default Quotes;
