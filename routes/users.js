const express = require('express');
const router = express.Router();
const userModel = require('../user-model')
const uuid = require('uuid/v4')
const startLocation = 'start'

router.get('/', async function(req, res, next) {
  try {
    const user = {
      id: uuid(),
      location:
    }
    
    await userModel.save(req.params.id)
    res.json(user);
    // res.send('respond with a resource');
  } catch (e) {
    next(e) 
  }
});


router.get('/:id', async function(req, res, next) {
  try {
    const user = await userModel.get(req.params.id)
    res.json(user);
    // res.send('respond with a resource');
  } catch (e) {
    next(e) 
  }
});

module.exports = router;
