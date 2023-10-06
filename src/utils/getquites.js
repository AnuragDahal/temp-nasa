const axios = require("axios")

// API endpoint URL
const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
// API key for authentication (Replace with your own key)
const apiKey = "7S7aM8eolqU1o3g3iVAoSQ==Ka7vqV9AJ7nTFII3";

// Function to fetch a quote from the API
const getQuote = async (category) => {
    try {
        // Configuration object for the request
        const config = {
            method: 'GET', 
            url: category === '' || category === undefined || category === null ? `${apiUrl}` : `${apiUrl}?category=${category}`, // Complete URL with the category query parameter
            headers: {
                'X-Api-Key': apiKey, // Authentication API key
                'Accept': 'image/jpg' // Specify the desired response content type as image/jpg
            },
        };

        const response = await axios(config);
        return response.data;
    } catch (error) {
        // If an error occurs during the API request, log the error message from the response
        console.error('An error occurred while fetching the quote');
        // Return null to indicate that no quote was fetched
        return null;
    }
};
const quote=await getQuote();

```