const { Pool } = require("pg")
const config = require("./config")
const pool = new Pool(config)

const connectDB = async () => {
  try {
    const client = await pool.connect() 
    console.log("Connected to database")
    client.release()
    return pool
  } catch (err) {
    console.error({ err }) 
  }
}

module.exports = {connectDB, pool}