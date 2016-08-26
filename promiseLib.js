function getNewPromise(value) {
    return new Promise((resolve, reject) => {
        if (value) resolve(value);
        else reject(reason);
    })
}

exports.getNewPromise = getNewPromise;