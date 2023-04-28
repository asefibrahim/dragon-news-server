const express = require('express')
const app = express()
const cors = require('cors')
const port = 4500
app.use(cors())
const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('dragon is coming')
})
app.get('/categories', (req, res) => {
    res.send(categories)
})
// get all the news

app.get('/news', (req, res) => {
    res.send(news)
})

// get single news by id

app.get('/news/:id', (req, res) => {
    const id = req.params.id
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)

})

// get all news by category

app.get('/categories/:id', (req, res) => {
    const id = req.params.id
    if (id == 0) {
        res.send(news)
    }
    else {
        const selectedCategory = news.filter(n => n.category_id === id)
        res.send(selectedCategory)
    }
})


app.listen(port)