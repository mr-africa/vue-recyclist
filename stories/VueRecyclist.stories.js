import { withKnobs, number } from '@storybook/addon-knobs'
import { addDecorator } from '@storybook/vue'

import InfinityChat from './InfinityChat'
import Log from './Log'

export default {
    title: 'vue-recyclist',
}

addDecorator(withKnobs)

export const RecyclistLog = () => ({
    components: { Log },
    props: {
        total: {
            type: Number,
            default: number('total', 50, {
                range: true,
                min: 20,
                max: 1000,
                step: 10,
            }),
        },
        loadPerPage: {
            type: Number,
            default: number('load per page', 10, {
                range: true,
                min: 10,
                max: 100,
                step: 10,
            }),
        },
        recyclistSize: {
            type: Number,
            default: number('virtual list size', 10, {
                range: true,
                min: 10,
                max: 100,
                step: 10,
            }),
        },
    },
    template: '<Log v-bind="$props" />',
})

export const RecyclistInfinityChat = () => InfinityChat
