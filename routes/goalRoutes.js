const router = require('express').Router();
const { disarrayCtrl } = require('../controllers')

router.get('/', disarrayCtrl.getGoal)
router.post('/', disarrayCtrl.createGoal)
router.put('/:id', disarrayCtrl.updateGoal)
router.delete('/:id', disarrayCtrl.deleteGoal)


module.exports = router;