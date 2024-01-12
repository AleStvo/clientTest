const {serverRequest} = require("../utils");

exports.search = async(body, config) =>
  serverRequest({path: '/search/', method: 'POST', body}, config);