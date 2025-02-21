const {Pool} = require("pg")
const config = require("./config")
const pool = new Pool(config)

const getUser = async () => { 
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM users"
        pool.query(query, (err, result) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(result.rows)
            }
        })
    })
}

module.exports = {getUser}
