const simpleIcons = require('simple-icons');
const slug = require('../data/slug.json')


export default class simpleClass {

    getIcon() {
        
        return slug.brand.map(item => {
            const obj = simpleIcons.Get(`${item.slug}`)
            return {
                slug: obj.slug,
                title: obj.title,
                hex: obj.hex,
                svg: obj.svg,
            }
        })
    }
}