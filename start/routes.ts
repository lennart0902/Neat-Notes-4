/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/z').render('pages/home')


//import router from '@adonisjs/core/services/router'
import Route from '@ioc:Adonis/Core/Route'

router.get('/kategories', async ({ view }) => {
    return view.render('kategories')
})

router.get('/', async ({ view }) => {
    return view.render('pages/index')

})
//Router.get('/kategories', async ({ view }) => {
//    return view.render('pages/kategories')
//})


