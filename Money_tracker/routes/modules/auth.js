const express = require('express')
const router = express.Router()

const userController = require('../../controllers/userController')
const { authenticator } = require('../../middleware/auth')

const passport = require('passport')


router.get(
  '/facebook',
  passport.authenticate('facebook', {
    scope: ['email', 'public_profile']
  })
)

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/users/login'
  })
)

router.get('/facebook/delete', authenticator, userController.deleteUser)

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/users/login'
  })
)


module.exports = router