const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

const userRouter = require('./routes/user')
//Global Middle Ware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// app.get('/', (req, res)=>{
//   res.json('Testing')
// });

//User Routes
app.use('/user',userRouter);


app.listen(port, ()=>{
  console.log(`Server is listening at port ${port}`)
})