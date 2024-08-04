import log4js from 'log4js'

log4js.configure({
  appenders: { app: { type: 'file', filename: 'src/logs/blog-app-backend.log' } },
  categories: { default: { appenders: ['app'], level: 'info' } },
})

const logger = log4js.getLogger('app')

export default logger
