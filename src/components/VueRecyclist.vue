<template>
    <div :class="[
        'vue-recyclist',
        fixedItemHeight ? 'vue-recyclist--scroll-auto': 'vue-recyclist--scroll-y',
    ]"
    >
        <div class="vue-recyclist-header">
            <slot name="header" />
        </div>
        <div
            ref="list"
            class="vue-recyclist-items"
            :style="{height: height + 'px', 'padding-top': topPadding + 'px'}"
        >
            <div
                v-for="(item, index) in visibleItems"
                :key="index"
                class="vue-recyclist-item"
            >
                <div
                    v-show="tombstone"
                    :class="{
                        'vue-recyclist-transition': tombstone,
                        'vue-recyclist__item--hidden': item.loaded,
                    }"
                    :style="{opacity: +!item.loaded}"
                >
                    <slot name="tombstone" />
                </div>
                <div
                    :class="{
                        'vue-recyclist-transition': tombstone,
                        'vue-recyclist__item--hidden': !item.loaded,
                    }"
                    :style="{opacity: +item.loaded}"
                >
                    <slot
                        name="item"
                        :data="item.data"
                        :index="index"
                    />
                </div>
            </div>

            <!--get tombstone and item heights from these invisible doms-->
            <div :class="[
                'vue-recyclist__pool',
                nomore ? 'vue-recyclist__pool--nomore' : null,
            ]">
                <div
                    :ref="'item'+index"
                    v-for="(item, index) in items"
                    :key="index"
                    v-if="!item.tomb && !item.height"
                    class="vue-recyclist-item vue-recyclist-invisible"
                >
                    <slot
                        name="item"
                        :data="item.data"
                        :index="index"
                    />
                </div>
                <div
                    ref="tomb"
                    class="vue-recyclist-item vue-recyclist-invisible"
                >
                    <slot name="tombstone" />
                </div>
            </div>
        </div>

        <div
            v-show="spinner && !nomore && !tombstone"
            class="vue-recyclist-loading"
            :style="{visibility: loading ? 'visible' : 'hidden'}"
        >
            <slot name="spinner">
                <div class="vue-recyclist-loading-content">
                    <div class="cssloading-circle vue-recyclist-spinner" />
                </div>
            </slot>
        </div>

        <div
            v-show="nomore && !loading"
            class="vue-recyclist-nomore"
        >
            <slot name="nomore">
                <div>End of list</div>
            </slot>
        </div>
        <div class="vue-recyclist-footer">
            <slot name="footer" />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        list: {
            type: Array,
            required: true,
        },
        tombstone: {
            type: Boolean,
            default: false, // Whether to show tombstones.
        },
        size: {
            type: Number,
            default: 20, // The number of items added each time.
        },
        offset: {
            type: Number,
            default: 200, // The number of pixels of additional length to allow scrolling to.
        },
        spinner: {
            type: Boolean,
            default: true, // Whether to show loading spinner.
        },
        nomore: {
            type: Boolean,
            default: false, // Whether to show 'no more data' status bar
        },
        fixedItemHeight: {
            type: Boolean,
            default: true, // item height fixed or dynamic
        },
        bypass: {
            type: Boolean,
            default: false, // render list as is w/o recycling
        },
    },
    data () {
        return {
            name: 'VueRecyclist',
            items: [], // Wrapped full list items
            height: 0, // Full list height
            loadings: [], // Loading status queue
            start: 0, // Visible items start index
            startOffset: 0, // Start item offset
        }
    },
    computed: {
        visibleItems () {
            if (this.bypass) {
                return this.items
            }
            return this.items.slice(
                Math.max(0, this.start - this.size),
                Math.min(this.items.length, this.start + this.size),
            )
        },

        topPadding () {
            if (this.bypass) {
                return 0
            }
            const firstItem = this.visibleItems[0]
            return firstItem ? firstItem.top : '0'
        },
        containerHeight () {
            return this.$el ? this.$el.offsetHeight : 0
        },
        tombHeight () {
            return this.tombstone ? this.$refs.tomb && this.$refs.tomb.offsetHeight : 0
        },
        loading () {
            return this.loadings.length
        },
    },
    watch: {
        list (arr) {
            if (arr.length) {
                this.loadings.pop()
                if (!this.loading) {
                    this.loadItems()
                }
            } else {
                this.init()
            }
        },
        items (arr) {
            if (arr.length > this.list.length) {
                this.getItems()
            }
        },
        nomore (value) {
            if (value) {
                this.height = this.containerHeight
            }
        },
    },
    mounted () {
        this.$el.addEventListener('scroll', this.onScroll.bind(this))
        window.addEventListener('resize', this.onResize.bind(this))
        this.init()
    },
    destroyed () {
        this.$el.removeEventListener('scroll', this.onScroll.bind(this))
        window.removeEventListener('resize', this.onResize.bind(this))
    },
    methods: {
        init () {
            this.reset()
            this.load()
        },
        reset () {
            this.items = []
            this.height = 0
            this.top = 0
            this.start = 0
            this.$el.scrollTop = 0
        },
        load () {
            if (this.tombstone) {
                this.items.length += this.size
                this.loadItems()
            } else if (!this.loading) {
                this.getItems()
            }
        },
        getItems () {
            this.loadings.push(1)
            this.$emit('loadmore')
        },
        loadItems () {
            const loads = []
            const start = 0
            const end = this.tombstone ? this.items.length : this.list.length
            for (let i = start; i < end; i += 1) {
                if (this.items[i] && this.items[i].loaded) {
                    continue // eslint-disable-line
                }
                this.setItem(i, this.list[i] || null)
                // update newly added items position
                loads.push(this.$nextTick().then(() => {
                    this.updateItemHeight(i)
                }))
            }
            // update items top and full list height
            Promise.all(loads).then(() => {
                this.updateItemTop()
            })
            this.adjustWidth()
        },
        adjustWidth () {
            if (this.$refs.list) {
                this.$refs.list.style.width = `${this.$el.scrollWidth}px`
            }
        },
        setItem (index, data) {
            this.$set(this.items, index, {
                data: data || {},
                height: 0,
                top: -1000,
                tomb: !data,
                loaded: !!data,
            })
        },
        updateItemHeight (index) {
            // update item height
            const cur = this.items[index]
            const dom = this.$refs[`item${index}`]
            if (dom && dom[0]) {
                cur.height = dom[0].offsetHeight
            } else {
                // item is tombstone
                cur.height = this.tombHeight
            }
        },
        updateItemTop () {
            // loop all items to update item top and list height
            let height = 0
            for (let i = 0; i < this.items.length; i += 1) {
                const pre = this.items[i - 1]
                this.items[i].top = pre ? pre.top + pre.height : 0
                height += this.items[i].height
            }
            this.height = height
            // update scroll top when needed
            if (this.startOffset) {
                this.setScrollTop()
            }
            this.updateIndex()
            this.makeScrollable()
        },
        updateIndex () {
            // update visible items start index
            const top = this.$el.scrollTop
            for (let i = 0; i < this.items.length; i += 1) {
                if (this.items[i].top > top) {
                    this.start = Math.max(0, i - 1)
                    break
                }
            }
            // scrolling does not need recalculate scrolltop
            // this.getStartItemOffset()
        },
        getStartItemOffset () {
            if (this.items[this.start]) {
                this.startOffset = this.items[this.start].top - this.$el.scrollTop
            }
        },
        setScrollTop () {
            if (this.items[this.start]) {
                this.$el.scrollTop = this.items[this.start].top - this.startOffset
                // reset start item offset
                this.startOffset = 0
            }
        },
        makeScrollable () {
            // make ios -webkit-overflow-scrolling scrollable
            this.$el.classList.add('vue-recyclist-scrollable')
        },
        onScroll () {
            if (this.$el.scrollTop + this.$el.offsetHeight > this.height - this.offset) {
                this.load()
            }
            this.updateIndex()
        },
        onResize () {
            this.getStartItemOffset()
            this.items.forEach((item) => {
                item.loaded = false
            })
            this.loadItems()
        },
    },
}

</script>
<style src="./cssloading.css"></style>
<style>
    --duration: 500ms;
    .vue-recyclist {
        overflow-x: hidden;
        position: relative;
    }
    .vue-recyclist--scroll-auto {
        overflow-y: auto;
    }
    .vue-recyclist--scroll-y {
        overflow-y: scroll;
    }
    .vue-recyclist-scrollable {
        -webkit-overflow-scrolling: touch;
    }
    .vue-recyclist-items {
        z-index: 1;
        position: relative;
        margin: 0;
        padding: 0;
        transform: translate3d(0,0,0);
    }
    .vue-recyclist-invisible {
        top: -1000px;
        visibility: hidden;
    }
    .vue-recyclist-item {
        position: relative;
        width: 100%;
    }
    .vue-recyclist__item--hidden {
        display: none;
    }
    .vue-recyclist-transition {
        opacity: 0;
        transition-property: opacity;
        transition-duration: var(--duration);
    }
    .vue-recyclist-loading {
        overflow: hidden;
    }
    .vue-recyclist-loading-content {
        width: 100%;
        text-align: center;
    }
    .vue-recyclist-spinner {
        margin: 10px auto;
        width: 20px;
        height: 20px;
    }
    .vue-recyclist-nomore {
        overflow: hidden;
        margin: 10px auto;
        height: 20px;
        text-align: center;
    }
    .vue-recyclist-header {
        position: -webkit-sticky;
        position: sticky;
        z-index: 2;
        top: 0;
        align-self: flex-start;
        transform: translate3d(0,0,0);
    }
    .vue-recyclist-footer {
        position: -webkit-sticky;
        position: sticky;
        z-index: 2;
        bottom: 0;
        align-self: flex-end;
        transform: translate3d(0,0,0);
    }

    .vue-recyclist__pool--nomore {
        display: none;
    }
</style>
