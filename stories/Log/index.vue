<template>
    <div class="log">
        <div class="log-header">
            <div class="log-id-cell">
                id
            </div>
            <div class="log-date-cell">
                date
            </div>
            <div class="log-message-cell">
                message
            </div>
        </div>
        <vue-recyclist
            :list="list"
            :loadmore="loadmore"
            :fixedItemHeight="false"
            :size="recyclistSize"
            class="log-list"
            :nomore="nomore"
        >
            <template v-slot:item="{ data }">
                <div
                    :id="data.id"
                    class="log-item"
                >
                    <div class="log-id-cell">
                        {{ data.id }}
                    </div>
                    <div class="log-date-cell">
                        {{ new Date(data.timestamp).toLocaleTimeString() }}
                    </div>
                    <div class="log-message-cell">
                        <div
                            v-for="(msg, index) in data.messages"
                            :key="index"
                        >
                            {{ msg }}
                        </div>
                    </div>
                </div>
            </template>
        </vue-recyclist>
    </div>
</template>

<script>
import VueRecyclist from '../../src'
import { getRandomMessages, getRandomTime } from './dataGenerator'

export default {
    name: 'statistic-example',
    components: { VueRecyclist },
    props: {
        total: {
            type: Number,
            default: 50,
        },
        loadPerPage: {
            type: Number,
            default: 10,
        },
        recyclistSize: {
            type: Number,
            default: 10,
        },
    },
    data () {
        return {
            list: [],
            currentPage: 1,
            idCounter: 1,
            nomore: false,
        }
    },
    watch: {
        total (value) {
            console.log('refresh total', value)
            this.refresh()
        },
        loadPerPage (value) {
            console.log('refresh loadPerPage', value)
            this.refresh()
        },
        recyclistSize (value) {
            console.log('refresh recyclistSize', value)
            this.refresh()
        },
    },
    methods: {
        generateNextPage () {
            const list = []
            let itemsCount = this.loadPerPage
            if (this.currentPage * this.loadPerPage > this.total) {
                itemsCount = this.total - (this.currentPage - 1) * this.loadPerPage
            }
            for (let i = 0; i < itemsCount; i += 1) {
                list.push({
                    id: this.idCounter,
                    timestamp: getRandomTime(),
                    messages: getRandomMessages(),
                })
                this.idCounter += 1
            }
            return list
        },
        loadmore () {
            if (this.currentPage * this.loadPerPage < this.total + this.loadPerPage) {
                const nextPage = this.generateNextPage()
                this.currentPage += 1
                this.list = [...this.list, ...nextPage]
            } else {
                this.nomore = true
            }
        },
        refresh () {
            this.list = []
            this.currentPage = 1
            this.idCounter = 1
            this.nomore = false
        },
    },
}
</script>

<style>
    .log {
        border: 1px dotted #ccc;
        margin: 2em;
    }
    .log-header {
        display: flex;
        padding: 1em;
        background-color: #ccc;
    }
    .log-list {
        max-height: 300px;
    }
    .log-item {
        display: flex;
        padding: 1em;
        border-bottom: 1px dotted #ccc;
    }
    .log-id-cell {
        width: 100px;
    }
    .log-date-cell {
        width: 200px;
    }
    .log-message-cell {
        flex-grow: 1;
    }
</style>
