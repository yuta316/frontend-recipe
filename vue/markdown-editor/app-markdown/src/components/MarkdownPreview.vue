<template>
    <div class="empty" v-if="text === ''">
        No content yet
    </div>
    <div v-else v-html="html"></div>
</template>

<script>
import marked from 'marked'

export default {
    //④子コンポネートにpropsでcontentを渡しているためデータ変更が伝えられる。
    props: {
        text: {
            type: String,
            required: true,
        }
    },
    computed: {
        //⑤リアルタイムに実行される。
        html() {
            return marked(this.text)
        }
    }
}
</script>
