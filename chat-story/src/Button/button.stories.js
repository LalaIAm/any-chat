import Button from ".";
import {fn} from 'storybook/test'

export default {
    title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {onClick: fn()}
}

export const Primary = {
    args: {
        children: 'Button'
    }
}