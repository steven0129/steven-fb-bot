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
    let text = payload.message.text;
    bot.getProfile(payload.sender.id, (err, profile) => {
        if (err) throw err
        reply({ text: profile.last_name + profile.first_name + ' 您好, 您剛剛傳送了一個訊息:' + text }, (err) => {
            if (err) throw err
            console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
        })
    })
})

http.createServer(bot.middleware()).listen(port)
console.log('Echo bot server running at port ' + port + '.')