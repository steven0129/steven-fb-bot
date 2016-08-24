const http = require('http')
const Bot = require('messenger-bot')
const port = process.env.PORT || 80;

let bot = new Bot({
    token: 'EAAQHqpDgbr4BADeCtDlk8zTe2mroLUlZCOi0eQSw2EJ8XseKcijjKSm2cbjMMij4SQUnjV2XrZCqqGUerjj0pZBcrjHy0akKepbQWZCzK0kftLOUIdoZClSICtBjo19ZC6nbPLnPmxogJulawftniYrLshwVIgnjUj4S8NdAaV6wZDZD',
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
                url: 'https://petersapparel.com/img/shirt.png'
            }
        }
    }, (err, info) => { })
})

http.createServer(bot.middleware()).listen(port)
console.log('Echo bot server running at port ' + port + '.')