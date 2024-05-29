import { FaFileAlt } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa'


export default {
    name: 'pages',
    title: 'Pages',
    type: 'document',
    icon: FaFileAlt,
    fields: [
        {
            name: 'pagetitle',
            title: 'Page Title',
            type: 'string', 
            description: 'The name of the page'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Click on generate to automatically generate the slug of the page',
            options: {
                source: 'pagetitle',
                maxLength: 96
            }
        },
        {
            name: 'heroheader',
            title: 'Hero Header',
            type: 'string', 
            description: 'Hero Header Text'
        },
        {
            name: 'herocopy',
            title: 'Hero Copy Section',
            description: 'To link to another internal page, type a forward slash followed by the slug of the page (Eg: "/plumbing")',
            type: 'array',
            of: [{
               type: 'block',
           }]
        },
        {
            name: 'heroimage',
            title: 'Hero Image',
            description: 'The image you want to show at the hero section',
            type: 'image'
        },
        {
            name: 'homeservicesIcon1',
            title: 'Home/About Service Icon 1',
            description: 'Select which Homepage Service Icon you want to be Service 1',
            type: 'reference',
            to: [{type: 'homeServices'}]
        },
        {
            name: 'homeservicesIcon2',
            title: 'Home/About Service Icon 2',
            description: 'Select which Homepage Service Icon you want to be Service 2',
            type: 'reference',
            to: [{type: 'homeServices'}]
        },
        {
            name: 'homeservicesIcon3',
            title: 'Home/About Service Icon 3',
            description: 'Select which Homepage Service Icon you want to be Service 3',
            type: 'reference',
            to: [{type: 'homeServices'}]
        },
        {
            name: 'homeservicesIcon4',
            title: 'Home/About Service Icon 4',
            description: 'Select which Homepage Service Icon you want to be Service 4',
            type: 'reference',
            to: [{type: 'homeServices'}]
        },
        {
            name: 'servicesIcon1',
            title: 'Service Icon 1',
            description: 'Select which Service Icon you want to be Service 1',
            type: 'reference',
            to: [{type: 'fourServices'}]
        },
        {
            name: 'servicesIcon2',
            title: 'Service Icon 2',
            description: 'Select which Service Icon you want to be Service 2',
            type: 'reference',
            to: [{type: 'fourServices'}]
        },
        {
            name: 'servicesIcon3',
            title: 'Service Icon 3',
            description: 'Select which Service Icon you want to be Service 3',
            type: 'reference',
            to: [{type: 'fourServices'}]
        },
        {
            name: 'servicesIcon4',
            title: 'Service Icon 4',
            description: 'Select which Service Icon you want to be Service 4',
            type: 'reference',
            to: [{type: 'fourServices'}]
        },
        {
            name: 'coupon',
            title: 'Coupon',
            description: 'Select which coupon you want to show on the page',
            type: 'reference',
            to: [{type: 'coupon'}]
        },
        {
            name: 'firstcopy',
            title: 'First Copy Section',
            description: 'To link to another internal page, type a forward slash followed by the slug of the page (Eg: "/plumbing")',
            type: 'array',
            of: [{
               type: 'block',
           }]
        },
        {
            name: 'servicepageimageleft',
            title: 'Service Specific Page Image Left',
            description: 'The image you want to show on the left next to the Service Specific page',
            type: 'image'
        },   
        {
            name: 'servicepagetextright',
            title: 'Service Specific Page Text Right',
            description: 'Here goes the copy you want to show next to the image',
            type: 'blockContent'
        },
        {
            name: 'servicepagetextleft',
            title: 'Service Specific Page Text Left',
            description: 'Here goes the copy you want to show next to the image',
            type: 'blockContent'
        },
        {
            name: 'servicepageimageright',
            title: 'Service Specific Page Image Right',
            description: 'The image you want to show on the Right next to the Service Specific page',
            type: 'image'
        },   
        {
            name: 'serviceimage',
            title: 'Featured CTA Image',
            description: 'The image you want to show next to the "Our Services" or "USP" section',
            type: 'image'
        },        
        {
            name: 'services',
            title: 'Featured CTA Copy',
            description: 'Here goes the copy you want to show next to the image',
            type: 'blockContent'
        },
        {
            name: 'usp1',
            title: 'USP 1',
            description: 'Select which USP you want to be USP 1',
            type: 'reference',
            to: [{type: 'uspSelection'}]
        },
        {
            name: 'usp2',
            title: 'USP 2',
            description: 'Select which USP you want to be USP 2',
            type: 'reference',
            to: [{type: 'uspSelection'}]
        },
        {
            name: 'usp3',
            title: 'USP 3',
            description: 'Select which USP you want to be USP 3',
            type: 'reference',
            to: [{type: 'uspSelection'}]
        },
        {
            name: 'pagetype',
            title: 'Page Template',
            type: 'reference',
            description: 'Page templates have different layouts, choose which page type this is',
            to: [{type:'pagetypes'}]
        },
        

    ]
}