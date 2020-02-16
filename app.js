
// 引入 express 和 handlebars 和資料 json
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

// 使用 main.handlebars 作為基本模版
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}))

// 指定 handlebars 作為渲染引擎
app.set('view engine', 'handlebars')

// 指定靜態資料夾
app.use(express.static('public'))

// 設定首頁路由
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})

// 設定搜尋路由
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurantMatches = restaurantList.results.filter(restaurant => restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.name_en.toLowerCase().includes(keyword.toLowerCase()))

  res.render('index', {
    restaurants: restaurantMatches,
    keyword: keyword
  })
})

// 設定餐廳詳細資料路由
app.get('/restaurants/:restaurant_id', (req, res) => {
  const id = req.params.restaurant_id
  const restaurantById = restaurantList.results.find(restaurant => id === restaurant.id.toString())

  res.render('show', { restaurant: restaurantById })
})

// 設定 server 監聽器
app.listen(port, (req, res) => {
  console.log(`Server running. 
    Server URL: http://localhost:${port}`)
})