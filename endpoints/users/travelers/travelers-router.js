const express = require('express');
const Traveler = require('./travelers-model');


const router = express.Router();
// const Protected = require('../auth/restricted-middleware');


//TRAVELER INFO
router.get('/',  (req, res) => {
    const id = req.user.id;
    Traveler.findById(id)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            console.log(err)
            res.send(err)
        })
});

router.get('/:username',  (req, res ) => {
    const { username } = req.params;
  
    Traveler.findBy({username})
    .then(user  => {
      res.status(200).json(user)
    })
})


router.get('/:id',  (req, res) => {
    const { id } = req.params;
  
   Traveler.findById(id)
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'Could not find traveler with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get user' });
    });
});


router.delete('/:id',  (req, res) => {
    const { id } = req.params;
  
   Traveler.remove(id)
    .then(count => {
      if (count) {
        res.json({ removed: count });
      } else {
        res.status(404).json({ message: 'Could not find user with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete user' });
    });
});


router.put('/:id',  (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Traveler.update(changes, id)
    .then(user => {
      if (user) {
        res.json({ updated: changes });
      } else {
        res.status(404).json({ message: 'Could not find user with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to update user' });
    });
});