function getTemplateMessage() {
    let template = {
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
    };

    return template;
}

function getTextMessage() {
    
}

exports.getTemplateMessage = getTemplateMessage;