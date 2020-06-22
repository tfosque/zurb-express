const express = require('express'); 

const router = express.Router();

// Routes
// Get all
router.get('/', (req, res ) => {
    res.send('Hello world')
})
// Get one
router.get('/:id', (req, res ) => {
    res.send(req.params.id)
})
// Create one
router.post('/:id', (req, res ) => {
    // res.send(req.params.id)
})
// Update one
router.patch('/:id', (req, res ) => {

})
// Delete one
router.delete('/:id', (req, res ) => {

})

module.exports = router;