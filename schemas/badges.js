import { FaImage } from 'react-icons/fa'

export default {
    name: 'badges',
    title: 'Badges',
    type: 'document',
    icon: FaImage,
    fields: [
        {
            name: 'badge_name',
            title: 'Badge Name',
            type: 'string',
            description: 'Name of the badge'
        }, 
        {
            name: 'badge_img',
            title: 'Badge Image',
            type: 'image',
            description: 'Upload the badge image you want to add'
        }, 
    ],
    preview: {
        select: {
            title: 'badge_name',
            media: 'badge_img'
        }
    }
}