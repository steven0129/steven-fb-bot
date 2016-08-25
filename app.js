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
    let payloadText = payload.message.text;
    console.log('received: ' + payloadText);
    if (payloadText != 'Ask me') {
        reply({
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'generic',
                    elements: [
                        {
                            title: 'facebook api explorer',
                            image_url: 'http://x.rce.tw/s/h3584935/messenger-bot-store.jpg',
                            subtitle: 'Answering API is my style!!',
                            buttons: [
                                {
                                    type: 'web_url',
                                    url: 'https://developers.facebook.com/search/?q=' + payloadText,
                                    title: 'Search ' + payloadText
                                },
                                {
                                    type: "postback",
                                    title: "Ask me",
                                    payload: 'Ask me'
                                }
                            ]
                        }
                    ]

                }
            }
        }, (err, info) => {
            console.log(err);
        })
    } else {
        reply({
            text: 'Please enter what you want to search from facebook API'
        }, (err, info) => {
            console.log(err);
        })
    }

})

http.createServer(bot.middleware()).listen(port)
console.log('Echo bot server running at port ' + port + '.')