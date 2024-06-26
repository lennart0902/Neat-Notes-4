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

router.get('/kategories', async ({ view }) => {
    return view.render('kategories')
})

router.get('/', async ({ view }) => {
    return view.render('pages/index')

})

router.get('/home', async ({ view }) => {
    return view.render('pages/home')


});

router.get('/Notizen', async ({ view }) => {
    return view.render('pages/Notizen')


});

router.post('/home/Notizen', async ({ request, view }) => {
    const Titel = request.input('title')
    const Inhalt = request.input('inhalt')
    return view.render('pages/Notizen', {Titel, Inhalt})

})
