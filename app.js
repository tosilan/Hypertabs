const protect = require('static-auth');
const safeCompare = require('safe-compare');

const USER_NAME = 'VCloud';
const PASSWORD = '169235623';

const app = protect(
  '/',
  (username, password) => {
    return safeCompare(username, USER_NAME) && safeCompare(password, PASSWORD)
  },
  {
    directory: `${ __dirname }/public`,
    onAuthFailed: (res) => {
      res.end('Authentication failed.')
    },
  }
);

module.exports = app;
