import { FaStar } from 'react-icons/fa'

export default {
    name: 'reviewSource',
    type: 'document',
    title: 'Review Sources',
    //hidden: 'true',
    icon: FaStar,
            fields: [
                {
                    title: 'Source of the Review',
                    name: 'review_source',
                    type: 'string'
                },
                {
                    title: 'Logo',
                    name: 'logo',
                    type: 'image'
                },
                
            ]
}