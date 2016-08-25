#messenger bot using nodeJS example: facebook api explorer bot

the image of executing:

<img src="img/messenger-bot-image.jpg">

##Quick Start

Copy and paste app.js, then install messenger-bot which is one of nodeJS modules

##Message type of messenger

According to <a href="https://developers.facebook.com/docs/messenger-platform">official document</a>, there are several types of message.

1. Text message
    1. Raw data
        <pre>
        curl -X POST -H "Content-Type: application/json" -d '{
            "recipient":{
                "id":"USER_ID"
            },
            "message":{
                "text":"hello, world!"
            }
         }' "https://graph.facebook.com/v2.6/me/messages?access_token=PAGE_ACCESS_TOKEN"
         </pre>
    
    2. Messenger-bot module data
        <pre>
            { text: 'hello world!' }, (err, info) => { }
        </pre>

2. Image attachment
    1. Raw data
        <pre>
            curl -X POST -H "Content-Type: application/json" -d '{
            "recipient":{
                "id":"USER_ID"
            },
            "message":{
                "attachment":{
                    "type":"image",
                    "payload":{
                        "url":"https://petersapparel.com/img/shirt.png"
                    }
                }
            }
            }' "https://graph.facebook.com/v2.6/me/messages?access_token=PAGE_ACCESS_TOKEN"
        </pre>

    2. Messenger-bot module data
        <pre>
            attachment:{
                type:"image",
                payload:{
                    url:"https://petersapparel.com/img/shirt.png"
                }
            }
        </pre>

3. Generic Template
    1. Raw data
        <pre>
            curl -X POST -H "Content-Type: application/json" -d '{
            "recipient":{
                "id":"USER_ID"
            },
            "message":{
                "attachment":{
                "type":"template",
                "payload":{
                    "template_type":"generic",
                    "elements":[
                    {
                        "title":"facebook api explorer",
                        "image_url":"http://x.rce.tw/s/h3584935/messenger-bot-store.jpg",
                        "subtitle":"Answering API is my style!!",
                        "buttons":[
                        {
                            "type":"web_url",
                            "url":"https://developers.facebook.com/search/?q=",
                            "title":"View Website"
                        },
                        {
                            "type":"postback",
                            "title":"Start Chatting",
                            "payload":"USER_DEFINED_PAYLOAD"
                        }              
                        ]
                    }
                    ]
                }
                }
            }
            }' "https://graph.facebook.com/v2.6/me/messages?access_token=PAGE_ACCESS_TOKEN" 
        </pre>

    2. Messenger-bot module data
        <pre>
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
                                    type: 'postback',
                                    title: 'Ask me',
                                    payload: 'Ask me'
                                }
                            ]
                        }
                    ]
                }
            }
        </pre>

##Handle postback

1. Define
    Postbacks occur when a Postback button, Get Started button, Persistent menu or Structured Message is tapped. The payload field in the callback is defined on the button.
    
    You can subscribe to this callback by selecting the messaging_postbacks field when setting up your webhook.

2. Raw data
    <pre>
        {
        "sender":{
            "id":"USER_ID"
        },
        "recipient":{
            "id":"PAGE_ID"
        },
        "timestamp":1458692752478,
        "postback":{
            "payload":"USER_DEFINED_PAYLOAD"
        }
        }   
    </pre>

3. Messenger-bot module data
    <pre>
        bot.on('postback', (payload, reply) => {
            reply({ text: 'please enter what you want to search from facebook API' }, (err, info) => { })
        })
    </pre>