import { FaStar } from 'react-icons/fa'

    export default {
        name: 'social',
        title: 'Social Proof',
        type: 'document',
        icon: FaStar,
        fields: [
            {
                title: 'Social Proof Title',
                name: 'socialproofTitle',
                type: 'string'
            },
            {
                title: 'Social Proof Number',
                name: 'socialproofNumber',
                type: 'string'
            },
            
        ],
        preview: {
          select: {
              title: 'socialproofTitle'
          }
      }
    }
