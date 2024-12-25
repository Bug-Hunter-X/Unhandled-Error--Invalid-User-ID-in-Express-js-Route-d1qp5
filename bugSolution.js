const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Check if userId is a valid integer
  if (isNaN(parseInt(userId)) || parseInt(userId) <=0){
    return res.status(400).json({ error: 'Invalid user ID' }); 
  }
  const user = users.find(user => user.id === parseInt(userId));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});
