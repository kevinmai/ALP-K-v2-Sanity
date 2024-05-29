import { MdRateReview } from 'react-icons/md'


export default {
    name: 'reviews',
    title: 'Reviews',
    type: 'document',
    icon: MdRateReview,
    fields: [
        {
            name: 'author',
            title: 'Author',
            type: 'string', 
            description: 'Name of the reviewer'
        },
        {
            name: 'review',
            title: 'Review Text',
            type: 'text',
            description: 'Text of the review'
        },
        {
            name: 'review_source',
            title: 'Review Source',
            type: 'reference',
            description: 'Where does the review come from?',
            to: [{type:'reviewSource'}]
        },
    ]
}