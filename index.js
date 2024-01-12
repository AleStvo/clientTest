const config = require('./config');
const {search, create, update, deleteCar} = require('./service');

const args = process.argv.slice(2);
const [method, jsonParams] = args;
let params;

try {
  params = JSON.parse(jsonParams);
} catch (_) {
  console.log('Bad params');
  process.exit();
}

(async() => {
  let result;

  switch (method) {
    case 'search': result = await search({params}, config); break;
    case 'create': result = await create({params}, config); break;
    case 'update': result = await update({params}, config); break;
    case 'delete': result = await deleteCar({params}, config); break;
    default:
      console.log('Unknown method');
      process.exit();
  }

  console.log(result);
})();
