const UsersController = require('../controllers/users_controller')
const AuthController = require('../controllers/auth_controller')
const passportService = require('../services/passport')
const passport = require('passport')

const requireAuth = passport.authenticate('jwt', { session: false }) // for protecting routes
const requireSignin = passport.authenticate('local', { session: false })

module.exports = (app) => {

  // Authentication

  app.post('/api/signin', requireSignin, AuthController.signin)

  app.post('/api/signup', AuthController.signup)

  // Create

  app.post('/api/users/:userId/packs', UsersController.create_pack)

  app.post('/api/users/:userId/items', UsersController.create_item)

  // Read

  app.get('/api/users/:userId', UsersController.read_user)

  app.get('/api/users/:userId/packs/:packId', UsersController.read_pack)

  app.get('/api/users/:userId/packs', UsersController.read_packs)

  app.get('/api/users/:userId/items', UsersController.read_items)


  // Update

  app.put('/api/users/:userId/packs/:packId', UsersController.update_pack)

  app.put('/api/users/:userId/packs/:packId/items', UsersController.update_pack_items)

  app.put('/api/users/:userId/items/:itemId', UsersController.update_item)

  // Delete

  app.delete('/api/users/:userId', UsersController.delete_user)

  app.delete('/api/users/:userId/packs/:packId', UsersController.delete_pack)

  app.delete('/api/users/:userId/items/:itemId', UsersController.delete_item)
}
