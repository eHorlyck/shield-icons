const simpleIcons = require('simple-icons');
const slug = require('../data/slug.json')

// console.log(simpleIcons.Get('hackerearth'))



export default class icons {

    // constructor(slug, icon) {
    //     this.slug = ''
    //     this.icon = ''
    // }

    getIconFromSlug() {
        // console.log(slug.brand)
        const icon = slug.brand.map(item => {
            // console.log(item)
            // console.log(`${item.slug}`)
            return simpleIcons.Get(`${item.slug}`)
        })
        return icon
    }

    getIcon() {
        return this.getIconFromSlug()
    }

}