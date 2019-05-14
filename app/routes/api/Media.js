const fetch = require('node-fetch');
const cors = require('cors');

module.exports = (app) => {
    app.get('/api/media/:id*?', cors(), (req, res) => { // @TODO: Move base url into constants for easy changeover.
        const baseUrl = 'http://hopehome.jonuday.com/wp/wp-json/wp/v2/media';
        let apiUrl = baseUrl;

        const id = req.params.id;

        if (id) {
            apiUrl = apiUrl + '/' + id;
        }

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                res.send({
                    src: data.media_details.sizes.thumbnail.source_url,
                    alt: data.alt_text,
                });
            })
            .catch(err => {
                res.send({
                    express: err
                })
            });
    });
}
