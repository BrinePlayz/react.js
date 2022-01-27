require('express')()
.set('view engine', 'jsx')
.set('views', __dirname + '/pages')
.engine('jsx', require('express-react-views').createEngine())
.get('/', (req, res) => {
    res.render('index')
})
.listen(8001, null, () => console.log('[Connected]'))