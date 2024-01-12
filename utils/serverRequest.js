const https = require('https');

const requestContent = (options, body) => new Promise((resolve, reject) => {
  const req = https.request(options, (res) => {
    const response = [];

    res.on('data', (chunk) => response.push(chunk));
    res.on('end', () => resolve({statusCode: res.statusCode, message: response.join('')}));
  });

  req.write(JSON.stringify(body));

  req.on('error', (err) => {
    if (req.aborted) {
      return;
    }

    reject({statusCode: 500, message: err});
  });

  req.on('timeout', () => {
    reject({statusCode: 504, message: 'Connection Timeout'});
    req.abort();
  });

  req.end();
});

exports.serverRequest = (request, {user, server}) => {
  const {path, method, body = {}} = request;
  const {host} = server || {};
  const {login, password} = user

  body.login = login;
  body.password = password;

  const options = {
    hostname: host,
    path,
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return requestContent(options, body);
}