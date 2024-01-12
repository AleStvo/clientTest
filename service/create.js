const {serverRequest} = require("../utils");

exports.create = async(body, config) =>
  serverRequest({path: '/create/', method: 'POST', body}, config);