const express = require("express")
const path = require("path")

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: 'db43b4a0d05148378c611144cc29772f',
  captureUncaught: true,
  captureUnhandledRejections: true,
})
rollbar.log("Hello World")

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))

})

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Take us to warp ${port}`))