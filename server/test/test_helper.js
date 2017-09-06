/**
 * Created by kylecross on 7/11/17.
 */

const mongoose = require('mongoose')

mongoose.Promise = global.Promise

before(done => {
  mongoose.connect('mongodb://localhost/packShakedown_test')
  mongoose.connection
    .once('open', () => done())
    .on('error', (error) => {
      console.warn('Warning', error)
    })
})

beforeEach(done => {
  const { users } = mongoose.connection.collections

  users.drop()
    .then(() => done())
    .catch(() => done())
})