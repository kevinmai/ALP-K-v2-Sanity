import { FaInfoCircle } from 'react-icons/fa'

export default {
    name: 'companyInfo',
    title: 'Company Info',
    type: 'document',
    icon: FaInfoCircle,
    fields: [
        {
            name: 'companyname',
            title: 'Company Name',
            type: 'string',
        },
        {
            name: 'companyTagline',
            title: 'Company Tagline',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'companyname',
                maxLength: 96
            }
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string'
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image'
        },
        {
            name: 'logoWhite',
            title: 'White Logo',
            type: 'image',
            description: 'Upload a white variant of the company logo here, if it exists. This will be used for the schedule service form popup.'
        },
        {
            name: 'ctalogo',
            title: 'CTA Logo',
            type: 'image',
            description: 'Upload either a png logo or company van for the footer CTA area.'
        },
        {
            name: 'favicon',
            title: 'Favicon',
            type: 'image'
        },
       // {
          //  name: 'fourservices',
          //  title: 'Four Services',
           // type: 'array',
           // description: 'Enter 4 services to be shown on the Service Specfic Page. Must be 4 items',
          //  of: [{type: 'fourservices'}]
       // },
        {
            name: 'emptypage',
            title: '404 Page Image',
            type:'image',
            description: 'Please choose the image you want to show on the 404 page'
        },
        {
            name: 'homepageservicebackground',
            title: 'Homepage Service Background',
            type:'image',
            description: 'Please choose the image you want to show on the background of Homepage Background'
        },
        {
            name: 'ourservicesimage',
            title: 'Our Services Side Image',
            type:'image',
            description: 'Please choose the image you want to show on the side of Our Services'
        },
        {
            name: 'thankyouimg',
            title: 'Thank You Page Image',
            type:'image',
            description: 'Please choose the image you want to show on the "Thank You" page'
        },
        {
            name: 'primarycolor',
            title: 'Primary Color',
            type: 'color',
            description: 'Usually a darker color, used for backgrounds and overlays (Eg: HEX Code #1e4a73)',
            options: {
                disableAlpha: true
              }
        },
        {
            name: 'secondarycolor',
            title: 'Secondary Color',
            type: 'color',
            description: 'Can be a lighter color, used for buttons (Eg: HEX Code #4bb2cb)',
            options: {
                disableAlpha: true
              }
        },
        {
            name: 'accentcolor',
            title: 'Accent Color',
            type: 'color',
            description: 'Usually a bright accent color, used for buttons and borders under text (Eg: HEX Code #fcb067)',
            options: {
                disableAlpha: true
              }
        },
        {
            name: 'tertiarycolor',
            title: 'Tertiary Color',
            type: 'color',
            description: 'Usually a bright tertiary color, used for buttons and borders under text (Eg: HEX Code #fcb067)',
            options: {
                disableAlpha: true
              }
        },
        {
            name: 'tertiaryaltcolor',
            title: 'Tertiary Alt Color',
            type: 'color',
            description: 'Usually a bright tertiary alternative color, used for buttons and borders under text (Eg: HEX Code #fcb067)',
            options: {
                disableAlpha: true
              }
        },
        {
            name: 'analytics',
            title: 'Google Analytics Code',
            type: 'string',
            description: 'Please add Google Analytics tracking ID here in the following format: "UA-XXXXXX-X"',
        },
        {
            name: 'remarketing',
            title: 'Google Remarketing Code',
            type: 'string',
            description: 'Please add Google Remarketing conversion ID here in the following format: "AW-XXXXXXXXX"',
        },
        {
            name: 'marchex',
            title: 'Marchex Code',
            type: 'string',
            description: 'Please add the Marchex "vs-account-id" here',
        },
        {
            name: 'clicky',
            title: 'Clicky Code',
            type: 'string',
            description: 'Please add the Clicky site id here',
        },
        {
            name: 'formhash',
            title: 'Metrics Form Hash',
            type: 'string',
            description: 'Please add the Metrics Form Hash here',
        },
        {
            name: 'licenses',
            title: 'Licenses',
            type: 'array',
            description: '',
            of: [{type: 'string'}]
        }
    ],
    preview: {
        select: {
            title: 'companyname',
            image: 'logo'
        }
    }
}