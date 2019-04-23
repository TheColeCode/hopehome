const fetch = require('node-fetch');

module.exports = (app) => {
    app.get('/api/children', (req, res) => {
        const id = req.query.id || '';
        const baseUrl = 'http://hopehome.jonuday.com/wp/wp-json/wp/v2/child/';
        const apiUrl = baseUrl + id;

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
