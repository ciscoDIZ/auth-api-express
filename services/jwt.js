const jwt = require('jsonwebtoken');

const {API_SECRET} = process.env;

const encode = (user, expiresIn) => {
    const {id, email, role} = user;
    const payload = {
        id,
        email,
        role
    }
    return jwt.sign(payload, API_SECRET, {expiresIn}, null);
};

const decode = (token) =>  {
    return jwt.verify(token, API_SECRET, {},(err, decoded) => {
        if (err) {
            throw err;
        }
        return decoded
    });
};


module.exports = {
    encode,
    decode
}
