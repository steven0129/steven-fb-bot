const http = require('http')
const Bot = require('messenger-bot')
const port = process.env.PORT || 80;

let bot = new Bot({
    token: 'EAAQHqpDgbr4BAAZBzHQiZBqLqVflUyeZAdKDJKpEjTq8tTMZCGP2VZC6L2ZAnAacu35jbNdcvw5kcSZBkZB7DldUz5enJImuFtq1plauT4K4GuUfoMDj8m96GJ3twmUKEZC9IEDiZBqAYFxNafq1kXZBfPNMKiBtUYEVvYmRqZA9OUnZB8QZDZD',
    verify: 'stevenfbbot',
    app_secret: 'cb7253f4b83a5afd1e41790a81cd8199'
})

bot.on('error', (err) => {
    console.log(err.message)
})

bot.on('message', (payload, reply) => {
    reply({
        text: 'hey!',
        attachment: {
            type: 'image',
            payload: {
                url: 'http://x.rce.tw/s/h3584935/messenger-bot-store.jpg'
            }
        }
    }, (err, info) => { })
})

http.createServer(bot.middleware()).listen(port)
console.log('Echo bot server running at port ' + port + '.')