import { FaListUl } from 'react-icons/fa'

export default {
    name: 'coupon',
    title: 'Coupons',
    type: 'document',
    icon: FaListUl,
    fields: [
        {
            name: 'title',
            title: 'Coupon Offer',
            type: 'string',
            description: 'Eg: $70 off'
        }, 
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Click on generate to autogenerate the slug of this coupon',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'type',
            title: 'Coupon Type',
            type: 'string',
            description: 'Choose the type of coupon (Eg: Drain Cleaning)',
        },
        {
            name: 'hidecoupon',
            title: 'Do you want this coupon to show on the coupons page?',
            type: 'boolean'
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'type'
        }
    }
}