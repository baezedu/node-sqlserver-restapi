import app from "./app.js"
import { PORT } from "./config.js"
import { getConnection } from "./database/connection.js"

getConnection()

app.listen(PORT)

console.log("Server on port", PORT)
