let count = 0
let array = []
((Math.random()).toString()).split('').forEach(item => {
    if(item === '.' || item === '0') return
    count++
    array.push(item)
})
require('express')()
.set('view engine', 'jsx')
.set('views', __dirname + '/pages')
.engine('jsx', require('express-react-views').createEngine())
.get('/', (req, res) => res.render('index', {
    user: { username: 'Brine' }
}))
.listen(Number(array.join('')), null, () => console.log('[Connected]'))