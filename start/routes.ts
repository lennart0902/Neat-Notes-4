/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { Router } from '@adonisjs/core/http'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')


import Route from '@ioc:Adonis/Core/Route'

Route.on('/').render('pages/home')

Route.get('kategories', async ({ view }) => {
    return view.render('kategories')
})