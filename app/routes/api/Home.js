const fetch = require('node-fetch');

module.exports = (app) => {
    app.get('/', (req, res) => {
        const baseUrl = 'http://hopehome.jonuday.com/wp/wp-json/wp/v2/';
        const apiUrl = baseUrl + 'pages/2';

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                res.send({ express: data });
            })
            .catch(err => {
                res.redirect('/error');
    });
    });
}
