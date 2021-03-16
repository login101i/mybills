const express = require('express')
const router = express.Router()

const { getTransactions, addTransaction, deleteTransactions } = require('../controllers/transactionControllers')


// router.get('/', (req, res) => {
//     res.send("helllllol22222")
// })

router.route('/')
.get(getTransactions)
.post(addTransaction)

router.route('/:id')
  .delete(deleteTransactions)


module.exports = router