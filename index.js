const app = express()
.set('view engine', 'jsx')
.engine('jsx', require('express-react-views').createEngine())
.get('/', (req, res) => {
    res.render('index', { name: 'React' })
})
.listen(8000, null, () => console.log('[Connected]'))