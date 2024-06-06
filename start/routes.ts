/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
<<<<<<< HEAD

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')


=======
//import router from '@adonisjs/core/services/router'
import Route from '@ioc:Adonis/Core/Route'
>>>>>>> fff6b7d24a41a05231a0bf880157ea5f2340514d

router.get('/kategories', async ({ view }) => {
    return view.render('kategories')
})
//Router.get('/kategories', async ({ view }) => {
//    return view.render('pages/kategories')
//})


