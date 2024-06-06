/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
//import router from '@adonisjs/core/services/router'
import Route from '@ioc:Adonis/Core/Route'

Route.on('/').render('pages/home')

Route.get('kategories', async ({ view }) => {
    return view.render('kategories')
})
//Router.get('/kategories', async ({ view }) => {
//    return view.render('pages/kategories')
//})


