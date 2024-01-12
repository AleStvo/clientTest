const {serverRequest} = require("../utils");

exports.update = async(body, config) => {
  const {params: {carId, newData: params} = {}} = body;

  return serverRequest({path: `/update/${carId}`, method: 'PUT', body: {params}}, config);
}
