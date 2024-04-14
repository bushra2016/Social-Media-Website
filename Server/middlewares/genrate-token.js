const jwt = require('jsonwebtoken')

const create_access_token = (payload)=>{
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'1d'})
}
const create_refresh_token = (payload)=>{
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn:'30d'})
}

module.exports = {
    create_access_token,
    create_refresh_token
}