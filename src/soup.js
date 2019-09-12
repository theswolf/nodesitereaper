
var JSSoup = require('jssoup').default;
var Converter = require('./imageConverter')



class Exporter {
    constructor(body) {
        this.soup = new JSSoup(body);
    }

    exportBody() {
        let bd = this.soup.find('div', 'mui-col-md-6');
        return bd;
    }

    title() {
        var tag = this.soup.find('title');
        return tag.text;
    }

    next() {
        var tag = this.soup.find('div','nxt-btn');
        return tag.contents.find((elm) => {
            return elm.name === 'a'
        }).attrs['href'];
    }

    async _innerConverter(url,elm,contents) {
        let c = new Converter(url+elm.attrs.src);
        let src = await c.convert();
        contents.push('<'+elm.name+' src="'+src+'" >');
        //console.log(src);
    }


    async exportHtmlForBody(bdInput,baseUrl) {
        const contents = bdInput.contents
        .filter((elm) => {return ~['h1','pre','p','img'].indexOf(elm.name.toLowerCase())})
        .map(async (elm) => {

            switch (elm.name) {
                case 'h1':
                        case 'p':
                                case 'pre':
                                        return '<'+elm.name+'>'+elm.text+'</'+elm.name+'>';
                    break;
                case 'img':
                        let c = new Converter(baseUrl+elm.attrs.src);
                        let src = await c.convert();
                        return '<'+elm.name+' src="'+src+'" >';
                        
            
                default:
                    break;
            }


           
        } );
      
        const data = await Promise.all(contents)
        return data
        //return contents;
    }
}

module.exports = Exporter;