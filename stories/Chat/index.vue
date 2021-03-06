<template>
  <div id="app">
    <vue-recyclist
      class="list"
      :list="list"
      :tombstone="showTombstones"
      :size="size"
      @loadmore="loadmore"
    >
      <template v-slot:tombstone>
        <div class="item tombstone">
          <div class="avatar"></div>
          <div class="bubble">
            <p></p>
            <p></p>
            <p></p>
            <div class="meta">
              <time class="posted-date"></time>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:item="props">
        <div
            :id="props.data.id"
            class="item"
            @click="itemClicked(props)"
        >
          <div
            class="avatar"
            :style="{backgroundImage: 'url(' + (props.data.avatar || '') + ')'}"
          />
          <div class="bubble">
            <p>{{ props.data.msg }}</p>
            <div class="meta">
              <time class="posted-date">{{ props.data.time }}</time>
            </div>
          </div>
        </div>
      </template>
      <!--<div slot="spinner">Loading Data</div>-->
      <!--<div slot="nomore">No More Data</div>-->
    </vue-recyclist>
    <div
        ref="avatars"
        style="display:none"
    >
        <img src="./images/avatar0.jpg"/>
        <img src="./images/avatar1.jpg"/>
        <img src="./images/avatar2.jpg"/>
        <img src="./images/avatar3.jpg"/>
    </div>
  </div>
</template>

<script>
import Data from './data'
import VueRecyclist from '../../src'

export default {
    name: 'example-app',
    props: {
        showTombstones: {
            type: Boolean,
            default: false,
        },
    },
    data () {
        return {
        // data
            initTime: new Date().getTime(),
            id: 0,
            // list
            list: [],
            size: 20,
        }
    },
    components: {
        'vue-recyclist': VueRecyclist,
    },
    methods: {
        getItem (id) {
            const avatar = Math.floor(Math.random() * Data.avatars)
            const msg = Data.messages[Math.floor(Math.random() * Data.messages.length)]
            const size = this.size * 1000
            const randomTimeStamp = Math.floor(this.initTime + id * size + Math.random() * size)
            return {
                id: 10000 + id,
                avatar: this.$refs.avatars.children[avatar].src,
                msg,
                time: new Date(randomTimeStamp).toString(),
            }
        },
        loadmore () {
            const items = []
            setTimeout(() => {
                for (let i = 0; i < this.size; i += 1) {
                    items.push(this.getItem(this.id += 1))
                }
                this.list = this.list.concat(items)
            }, 2000)
        },
        itemClicked (props) {
            console.log(`Item:${props.index}`, props.data)
        },
        numDomNodes (node) {
            if (!node.children || node.children.length === 0) return 0
            const childrenCount = Array.from(node.children).map(this.numDomNodes)
            return node.children.length + childrenCount.reduce((p, c) => p + c, 0)
        },
    },
}

</script>

<style>
    body,
    html {
        height: 100%
    }

    body {
        margin: 0;
        padding: 0
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        overflow: hidden;
        height: 400px;
        background: #fff
    }

    #app,
    #app header {
        text-align: center;
        width: 100%;
        box-sizing: border-box
    }

    #app header {
        position: absolute;
        top: 0;
        left: 0;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
    }

    #app header h1,
    #app header h2 {
        font-weight: 400;
        margin: 0
    }

    #app header h1 {
        font-size: 24px
    }

    #app header h2 {
        font-size: 14px
    }

    #app header h2 a {
        color: inherit
    }

    #app header a {
        font-size: 12px;
        text-decoration: underline;
        margin-top: 10px;
        cursor: pointer
    }

    #app .info {
        font-size: 12px;
        color: #999
    }

    #app .info a {
        font-style: italic;
        color: inherit
    }

    #app .cssloading-circle {
        background: #eee
    }

    #app .vue-recyclist-item {
        contain: layout
    }
</style>

<style>
    .list {
        width: 375px;
        max-width: 100%;
        height: 100%;
        margin: 0 auto;
        padding: 0;
        border: 1px solid #ddd;
        list-style-type: none;
        text-align: center;
        background: #eee
    }

    .list .item {
        display: flex;
        padding: 10px 0;
        width: 100%;
        text-align: left
    }

    .list .item .avatar {
        border-radius: 50%;
        margin-left: 15px;
        margin-right: 6px;
        min-width: 48px;
        width: 48px;
        height: 48px;
        background-image: url('./images/unknown.jpg');
        background-size: cover;
        outline: none
    }

    .list .item p {
        margin: 0;
        word-wrap: break-word;
        font-size: 14px
    }

    .list .item.tombstone p {
        width: 100%;
        height: .5em;
        background-color: #ccc;
        margin: .5em 0
    }

    .list .item .bubble {
        padding: 7px 10px;
        color: #333;
        background: #fff;
        box-shadow: 0 3px 2px rgba(0, 0, 0, .1);
        position: relative;
        max-width: 420px;
        min-width: 80px;
        margin: 0 20px 0 5px
    }

    .list .item .bubble:before {
        content: '';
        border-style: solid;
        border-width: 0 10px 10px 0;
        border-color: transparent #fff transparent transparent;
        position: absolute;
        top: 0;
        left: -10px;
    }
    .list .item .meta {
        font-size:.8rem;
        color:#999;
        margin-top:3px;
    }
</style>
