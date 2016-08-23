const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fbBotLib = require('./fb-bot-lib.js')
const port = process.env.PORT || 80;

app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req, res) => {
    res.send('you have no right to access this page.');
});

app.get('/webhook', (req, res) => {
    if (req.query['hub.mode'] === 'subscribe' &&
        req.query['hub.verify_token'] === 'stevenfbbot') {
        console.log("Validating webhook");
        res.status(200).send(req.query['hub.challenge']);
    } else {
        console.error("Failed validation. Make sure the validation tokens match.");
        res.sendStatus(403);
    }
});

app.post('/webhook', (req, res) => {
    var data = req.body;
    if (data.object == 'page') {
        data.entry.forEach((pageEntry) => {
            var pageID = pageEntry.id;
            var timeOfEvent = pageEntry.time;
            pageEntry.messaging.forEach((messagingEvent) => {
                if (messagingEvent.optin) {
                    // receivedAuthentication(messagingEvent);
                    console.log('optin');
                } else if (messagingEvent.message) {
                    fbBotLib.receivedMessage(messagingEvent);
                } else if (messagingEvent.delivery) {
                    // receivedDeliveryConfirmation(messagingEvent);
                    console.log('delivery confirm');
                } else if (messagingEvent.postback) {
                    // receivedPostback(messagingEvent);
                    console.log(postBack);
                } else {
                    console.log('Webhook received unknown messagingEvent: ' + messagingEvent);
                }
            });
        });

        res.sendStatus(200);
    }
});

app.listen(port, () => {
    console.log('listening on port ' + port);
});