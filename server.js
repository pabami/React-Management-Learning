const express = require('express');
const bodyParser = require('body-parser');
const apps = express();
const port = process.env.PORT || 5000;

apps.use(bodyParser.json());
apps.use(bodyParser.urlencoded({ extended: true}));

apps.get('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'});
});

apps.listen(port, () => console.log(`Listening on port ${port}`));
