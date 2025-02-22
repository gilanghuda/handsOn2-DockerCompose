const {pool} = require("./connect")

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
