import { FaTools } from 'react-icons/fa'


export default {
    name: 'fourServices',
    type: 'document',
    title: 'Services Icons',
    // hidden: 'true',
    icon: FaTools,
            fields: [
                {
                    title: 'Services Title',
                    name: 'servicesTitle',
                    type: 'string'
                },
                {
                    title: 'Services Link',
                    name: 'servicesLink',
                    type: 'string',
                    description: '/like-this'
                },
                {
                    name:'servicesIcon',
                    title:'Services Icon',
                    description: 'Please Upload an icon to be use for the services specific page',
                    type:'image',
                },
                
            ]
}