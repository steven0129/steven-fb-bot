#messenger bot example: facebook api explorer bot

the image of executing:

<img src="img/messenger-bot-image.jpg">

##Quick Start

Copy and paste app.js, then install messenger-bot which is one of nodeJS modules

##message type of messenger

According to <a href="https://developers.facebook.com/docs/messenger-platform">official document</a>, there are many types of message types.

1. text message:

        raw data type:

        <code>
            curl -X POST -H "Content-Type: application/json" -d '{
            "recipient":{
                "id":"USER_ID"
            },
            "message":{
                "text":"hello, world!"
            }
            }' "https://graph.facebook.com/v2.6/me/messages?access_token=PAGE_ACCESS_TOKEN" 
        </code>
