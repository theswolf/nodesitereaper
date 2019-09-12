const image2base64 = require('image-to-base64');


class Converter {
    constructor(url) {
        this.url = url;
    }

    opentag() {
        let tag = 'data:image/type;base64,'
        let extension = this.url.split('.');
        return tag.replace('type',extension[extension.length-1]);
    }

    convert() {

        let p = new Promise((resolve,reject) => {
            image2base64(this.url).then(
                (res) => {
                    resolve(this.opentag()+res)
                }
            )
            .catch((error) => {
                reject(error);
            })
            ;
        });


        return p;
    }


}

module.exports = Converter;