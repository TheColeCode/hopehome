const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes')(app);

app.get('/', (req, res) => {
	res.send('PORT 5000');
})

// app.get('/volunteers', (req, res) => res.send({ express: 'volunteer' }));
// app.get('/leadership', (req, res) => res.send({ express: 'leader' }));
// app.get('/about', (req, res) => res.send({ express: 'pages/2' }));
// app.get('/disclaimer', (req, res) => res.send({ express: 'pages/2' }));
// app.get('/express_backend', (req, res) => {
//     res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));