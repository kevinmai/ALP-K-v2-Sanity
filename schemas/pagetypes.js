import { FaRegFile } from 'react-icons/fa'

export default {
    name: 'pagetypes',
    type: 'document',
    // type: 'object',
    title: 'Page Type',
    //hidden: 'true',
    icon: FaRegFile,
            fields: [
                {
                    title: 'Page Type',
                    name: 'pagetype',
                    type: 'string'
                }
            ]
}