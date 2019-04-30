const fetch = require('node-fetch');
const cors = require('cors');

module.exports = (app) => {
  app.get('/api/post/:id*?', cors(), (req, res) => {
    // @TODO: Move base url into constants for easy changeover.
    const baseUrl = 'http://hopehome.jonuday.com/wp/wp-json/wp/v2/posts';
    let apiUrl = baseUrl;

    const id = req.params.id;
    let singleItem = id / 1 ? true : false;
    if (id) {
      apiUrl = apiUrl + '/' + id;
    }

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        res.send({
          express: data,
          singleItem: singleItem
        });
      })
      .catch(err => {
        res.redirect('/error');
      });
  });
}
