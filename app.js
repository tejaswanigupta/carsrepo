
const express = require('express')
const app = express()
const port = 3000


app.use(express.json());

const carRoutes = require("./routes/carRoute");
app.use("/car", carRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
