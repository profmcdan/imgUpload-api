const path = require('path')
const routes = require('./routes')
const exphbs = require('express-handlebars')
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const methodOverride = require('method-override')
const errorHandler = require('errorhandler')


module.exports = app =>{
    app.use(morgan('dev'))
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
    app.use(methodOverride())
    app.use(cookieParser('some-secrets'))
    routes(app)

    if ('development' === app.get('env')){
        app.use(errorHandler())
    }

    return app;
}