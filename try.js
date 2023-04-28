const express = require('express')
const app = express()
const cors = require('cors')
const port = 4500
app.use(cors())
const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('dragon is comming')
})
app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/news', (req, res) => {
    res.send(news)
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
})
app.get('/categories/:id', (req, res) => {
    const id = req.params.id
    if (id === '0') {
        res.send(news)
    }
    const newsByCategory = news.filter(n => n._id === id)
    res.send(newsByCategory)
})



app.listen(port)