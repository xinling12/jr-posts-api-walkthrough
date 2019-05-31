const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

/* Basic logic*/


app.listen(PORT, ()=> console.log(`app listen on port ${PORT}`));