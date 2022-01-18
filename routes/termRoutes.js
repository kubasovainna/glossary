const { Router } = require('express')
const router = Router()
const Term = require('../models/term')
const termController = require('../controllers/termController')

router.get('/', termController.getAllTerms);
router.get('/term/:id', termController.getTerm);
router.post('/create', termController.createTerm);
router.post('/delete/:id', termController.deleteTerm);
router.post('/update/:id', termController.updateTerm);
module.exports = router