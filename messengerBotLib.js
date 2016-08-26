function getTemplateMessage() {
    let baseMessage = {
        attachment: {
            type: 'template'
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
            break;

        //generic template
        //example: getTemplateMessage('button', textB, buttonsB);
        case 'button':
            let textB = arguments[1];
            let buttonsB = arguments[2];
            baseMessage.attachment.payload = {
                template_type: 'button',
                text: textB,
                buttons: buttonsB
            };
            break;
    }

    return baseMessage;
}

function getTextMessage() {
    let baseMessage = {
        text: arguments[0]
    };

    return baseMessage;
}

exports.getTemplateMessage = getTemplateMessage;
exports.getTextMessage = getTextMessage;