const basicAuth = require('express-basic-auth');

const users = {
    'username': 'password',
};

app.use(basicAuth({ users, challenge: true }));
