'use strict'

const apn = require('apn')

exports.register = function (server, options, next) {
  let connection;

  if (options) {
    connection = new apn.Provider(options)
  }

  server.decorate('server', 'apn', {
    connection,
    Notification: apn.Notification,
    Provider: apn.Provider
  })

  connection.setMaxListeners(0)

  next()
}

exports.register.attributes = {
  name: 'hapi-apn'
}
