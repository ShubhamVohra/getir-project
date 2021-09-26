var controller = require('../controllers');

module.exports = (router) => {
    router.post('/api_response', controller.filter_data);
}