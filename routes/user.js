const express = require('express');
const userRouter = express.Router();


const userService = require('../service/user')

//Create
userRouter.post('/', (req, res)=>{
  const {first_name, last_name, email, city} = req.body;

  userService.create(first_name, last_name, email, city)
  .then(()=>{
    res.json(`User is created`);
  })
  .catch(err =>{
    res.json(err.toString())
  });
})

//Read
userRouter.get('/:id', (req, res)=>{
  const {id} = req.params;
  console.log(req.params)

  userService.read(id)
  .then(data=>{
    res.json(data);
  })
  .catch(err=>{
    res.json(err.toString());
  })
});

//Update
userRouter.put('/:id', (req, res)=>{
  const {id} = req.params;
  const {first_name, last_name, email, city} = req.body;
  
  userService.update(id, first_name, last_name, email, city)
  .then(()=>{
    res.json(`User is updated`);
  })
  .catch(err=>{
    res.json(err.toString());
  })

});

//Delete
userRouter.delete('/:id', (req, res)=>{
  const {id} = req.params;
  userService.delete(id)
  .then(()=>{
    res.json(`User w/ ID: ${id} is deleted!`);
  })
  .catch(err=>{
    res.json(err.toString());
  })
});

module.exports = userRouter;
