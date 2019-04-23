const fetch = require('node-fetch');

module.exports = (app) => {
    app.get('/api/page', (req, res) => {
        const id = req.query.id || '';
        const baseUrl = 'http://hopehome.jonuday.com/wp/wp-json/wp/v2/pages/id';
        const apiUrl = baseUrl + id;

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                res.send({
                    express: data
                });
            })
            .catch(err => {
                res.redirect('/error');
    });
    });
}
