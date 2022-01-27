const simpleIcons = require('simple-icons');
const slug = require('../data/slug.json')
// console.log(simpleIcons.Get('hackerearth'))

export default class simpleClass {

    getIcon() {
        // console.log(slug.brand)
        return slug.brand.map(item => {
            // console.log(item)
            // console.log(`${item.slug}`)
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