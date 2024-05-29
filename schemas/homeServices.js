import { FaTools } from 'react-icons/fa'


export default {
    name: 'homeServices',
    type: 'document',
    title: 'Home/About Us Services Icons',
    // hidden: 'true',
    icon: FaTools,
            fields: [
                {
                    title: 'Homepage Services Title',
                    name: 'homeservicesTitle',
                    type: 'string'
                },
                {
                    title: 'Hoomepage Services Text',
                    name: 'homeservicesText',
                    type: 'text'
                },
                {
                    title: 'Homepage Services Link',
                    name: 'homeservicesLink',
                    type: 'string',
                    description: '/like-this'
                },
                {
                    name:'homeservicesIcon',
                    title:'Homepage Services Icon',
                    description: 'Please Upload an icon to be use for the homepage services specific page',
                    type:'image',
                },
                
            ]
}