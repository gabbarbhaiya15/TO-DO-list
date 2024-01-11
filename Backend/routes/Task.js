const  express = require('express')
const router= express.Router()
router.route('/' ).post((req, res) => {
    Taskmodel.create(req.body).then(Task => res.json(Task))
    .catch(err=> res.json(err))
 
});

module.exports = router;