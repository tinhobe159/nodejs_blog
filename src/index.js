const express = require('express')
const morgan = require('morgan');
const path = require('path');
const app = express()
const port = 3000

const route = require('./routes')
    //--------------------------------------------//
const exphbs = require('express-handlebars')
//thay đổi đuôi handlebars thành hbs cho ngắn gọn
const hbs = exphbs.create({ extname: '.hbs' })
    // TEMPLATE ENGINE
app.engine('hbs', hbs.engine)
//Sử dụng engine hbs ở dòng trên
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources\\views')); // cách mình tìm đến file, hệ điều hành window


//add mid ware để lưu dữ liệu với req.body
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


//console.log('PATH: ', path.join(__dirname, 'resources/views')) //xem đường dẫn
// Với những file tĩnh, express sẽ kiểm tra, nếu có thì trả ra
// Trong th này là set địa chỉ ở folder public
// Vd localhost::3000/img/logo.png
app.use(express.static(path.join(__dirname, 'public')));

//
//HTTP logger
app.use(morgan('combined'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});