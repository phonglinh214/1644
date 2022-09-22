var http = require('http');
http
    .createServer((req, res) => {

        //thiết lập kiểu trả về của respond: HTML
        res.setHeader("Content-Type", "text/html")
        res.write("<h1 style='color: red;'> 1644 - Cloud computing </h1>");
        res.write("<h2 style='font-style: italic;'> Fall 2022 </h2>")
        res.write(
            "<h3 style = 'text-decoration: underline;'> University pf Greenwich (Vietnam) </h3>")
        res.write(
            "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Desktop_computer_clipart_-_Yellow_theme.svg/1200px-Desktop_computer_clipart_-_Yellow_theme.svg.png'>"
        )
        res.end();
    })
    .listen(80, () => {
        console.log("http://localhost")
    })

//80: default http port => khi chạy chỉ cần gõ localhost