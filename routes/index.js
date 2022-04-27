const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is the root'))
router.post('/grocerylist', controllers.createItem)
router.get('/grocerylist',  controllers.getAllItems)
router.get('/grocerylist/:id', controllers.getItemById)
router.put('/grocerylist/:id', controllers.updateItem)
router.delete('/grocerylist/:id', controllers.deleteItem)


module.exports = router;