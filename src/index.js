'use strict'

const { Provider, Notification } = require('apn')

exports.register = function (server, options = {}, next) {
  server.decorate('server', 'apn', {
    get connection() {
      return new Provider(options)
    },

    Notification,
    Provider
  })

  next()
}

exports.register.attributes = {
  name: 'hapi-apn'
}
