//Boiler plate Node index.js set up //
const express = require("express");

const shortid = require("shortid");



const server = express();
let hubs = [];

// Create
// Read
// Update
//Delete
//CRUD


//GET/

server.use(express.json());

server.get('/', (req, res) => {
    res.json({hello: 'world'}); 
});

server.get('/api/users', (req, res) => {
  res.json({hello: "Lambda School"});  
});

//Create/
server.post('/api/users/:id', (req, res) => {
    const userData = req.body;
    userData.id = shortid.generate();
     
    users.push(userData);
    res.status(201).json(userData);

})


// Read

server.get('/api/users', (req, res) => {
   res.json(users);
})

// Delete

server.delete('/api/users/:id', (req, res) => {
  const {id} = req.params;

  const deleted = users.find(users => users.id ===id);

  if (deleted) {
      users = users.filter(users => users.id !== id);
      res.status(200).json(deleted);
  }
  else {
   res.status(404).json({message: 'Users  not found'});
  }
})



//Update-change

server.patch('/api/users/:id', (req, res)  => {
  const {id} = req.params;
  const changes =req.body;

  let found = users.find(users => users.id === id);
  if (found) {
    Object.assign(found, changes);
    res.status(200).json(found);

  } else {
    res.status(404).json({message: 'Hub not found'});
  }
})



//update-replace

server.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    changes.id = id;

    let index = users.findIndex(users => users.id === id);
    if (index !== -1) {
        users[index] = changes;
        res.status(200).json(users[index]);
    } else {
        res.status(404).json({ message: 'users id not found'});
    }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log('Listening on localhost:', PORT);
})