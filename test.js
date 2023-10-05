const axios = require('axios');
axios.get('/profile/readme.md', {
    headers: {
      Authorization: `Bearer ghu_3F0wHBgnUm4N1nbnMRxEcdV7OTVrTA2d0CwX`,
    },
  }).then(response => {
    const readmeContent = response.data;
  
    // Do something with the README content
    console.log(readmeContent);
  }).catch(error => {
    // Handle the error
    console.log(error);
  });
  