const {serverRequest} = require("../utils");

exports.delete = async(body, config) => {
  const {params: {carId} = {}} = body;

  return serverRequest({path: `/delete/${carId}`, method: 'POST'}, config);
}