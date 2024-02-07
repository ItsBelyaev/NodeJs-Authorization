const Router = require("express")

const router = new Router()
const controller = require('./authController')
const { check } = require("express-validator")


router.post('/registration', [
    check('username', "The username can't contain 0 chars").notEmpty(),
    check('password', "The password must be between 4 and 10 chars").isLength({ min: 4, max: 10 })
], controller.registration)
router.post('/login', [
    check('username', "The username can't contain 0 chars").notEmpty(),
    check('password', "The password can't contain 0 chars").notEmpty(),
], controller.login)
router.get('/users', controller.getUsers)

router.get('/admins', controller.getAdmins)

module.exports = router