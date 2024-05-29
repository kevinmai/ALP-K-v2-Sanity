import { FaUserTag } from 'react-icons/fa'
import IconPicker from './objects/inputPicker.js'


export default {
    name: 'uspSelection',
    type: 'document',
    title: 'Unique Selling Points (USP)',
    // hidden: 'true',
    icon: FaUserTag,
            fields: [
                {
                    title: 'USP Title',
                    name: 'uspTitle',
                    type: 'string'
                },
                {
                    title: 'USP Text',
                    name: 'uspText',
                    type: 'text'
                },
                {
                    name:'icon',
                    title:'USP Icon',
                    description: 'Choose icons from Font Awesome - https://fontawesome.com/cheatsheet/free/solid',
                    type:'string',
                    inputComponent: IconPicker
                },
                
            ]
}