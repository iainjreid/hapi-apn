'use strict'

const { Provider, Notification } = require('apn')

exports.register = function (server, options = {}, next) {
  const connection = new Provider(options)

  server.decorate('server', 'apn', {
    connection,
    Notification,
    Provider
  })

  next()
}

exports.register.attributes = {
  name: 'hapi-apn'
}
