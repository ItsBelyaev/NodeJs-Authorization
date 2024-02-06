const Router = require("express")

const router = new Router()
const controller = require('./authController')
const { check } = require("express-validator")


router.post('/registration', [
    check('username', "The username can't contain 0 chars").notEmpty(),
    check('password', "The password must be between 4 and 10 chars").isLength({ min: 4, max: 10 })
], controller.registration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)

module.exports = router