function getTemplateMessage() {
    let baseMessage = {
        attachment: {
            type: 'template',
            payload: null
        }
    };

    //generic template
    //example: getTemplateMessage('generic', titleG, imageUrlG, subTitleG, buttonsG);
    switch (arguments[0]) {
        case 'generic':
            let titleG = arguments[1];
            let imageUrlG = arguments[2];
            let subTitleG = arguments[3];
            let buttonsG = arguments[4];
            let callbackG = arguments[5];
            baseMessage.attachment.payload = {
                template_type: 'generic',
                elements: [
                    {
                        title: titleG,
                        image_url: imageUrlG,
                        subtitle: subTitleG,
                        buttons: buttonsG
                    }
                ]
            };
            callbackG(baseMessage);

            break;

        //generic template
        //example: getTemplateMessage('button', textB, buttonsB);
        case 'button':
            let textB = arguments[1];
            let buttonsB = arguments[2];
            let callbackB = arguments[3];
            baseMessage.attachment.payload = {
                template_type: 'button',
                text: textB,
                buttons: buttonsB
            };
            callbackB(baseMessage);

            break;
    }
}

function getTextMessage() {
    let text = arguments[0];
    let callback = arguments[1];
    let baseMessage = {
        text: text
    };

    callback(baseMessage);
}

//Quick Replies
//getQuickReplies(text, quickReplies, callback)
function getQuickReplies() {
    let text = arguments[0];
    let quickReplies = arguments[1];
    let callback = arguments[2];
    let baseMessage = {
        text:text,
        quick_replies:quickReplies
    };

    callback(baseMessage);
}

exports.getTemplateMessage = getTemplateMessage;
exports.getTextMessage = getTextMessage;