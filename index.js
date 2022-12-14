const express = require("express")
// const connectDB = require("./config/db");
// const cors = require('cors');




const app = express();
// connect database
// connectDB();
// init Middleware
app.use(express.json({ extended: false }))
// app.use(cors())


app.get("/", (req, res) => res.send("API running"))

app.use('/api/users', require('./main')) // parsing the json body
// app.use('/api/auth', require('./routes/api/auth'))
// app.use('/api/profile', require('./routes/api/profile'))
// app.use('/api/posts', require('./routes/api/posts'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started on post ${PORT}`))