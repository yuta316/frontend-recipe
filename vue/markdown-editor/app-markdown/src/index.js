import Vue from 'vue'
import './app.scss'

import MarkdownPanel from './components/MarkdownPanel,vue'

const app = new Vue({
    el: "#app",
    components: {
        MarkdownPanel
    }
})