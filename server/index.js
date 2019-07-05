const path = require('path');
const fs = require('fs');
const express = require('express');
const React = require('react');
import ReactDOMServer from 'react-dom/server';

import App from '../src/components/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
    const app = ReactDOMServer.renderToString(<App />);
    const indexFile = path.join(__dirname, 'build', 'index.html');

    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error("Something went wrong", err);
            return res.status(500).send("Oops, better luck next time!);
        } else {
            return res.send(data.replace('<div id="root"></div>', `<div id="root">${app}</div>`))
        }
    })
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});