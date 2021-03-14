<template>
    <div class="panel">
        <div class="panel-header">
            <div class="panel-title">User Name</div>
        </div>
        <div class="panel-nav">
            <ul class="tab">
                <li class="tab-item" :class="{ active : activeTab === 1}">
                    <a href="#" @click.prevent="activeTab = 1">Write</a>
                </li>
                <li class="tab-item" :class="{ active : activeTab === 2}">
                    <a href="#" @click.prevent="activeTab = 2">Preview</a>
                </li>
            </ul>
        </div>
        <div class="panel-body" v-show="activeTab === 1">
            <!--②子コンポーネントのMarkdownEditorにcontentを渡す。-->
            <MarkdownEditor v-model="content" />
        </div>
        <div class="panel-body" v-show="activeTab === 2">
            <MarkdownPreview :text="content" />
        </div>
        <div class="panel-footer">
            <div class="text-right">
                <button class="btn btn-primary" @click="$emit('submit-markdown', content)">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
import MarkdownEditor from './MarkdownEditor.vue'
import MarkdownPreview from './MarkdownPreview.vue'

export default {
    components: {
        MarkdownEditor,
        MarkdownPreview,
    },
    data() {
        return {
            activeTab: 1,
            //①マークダウン文字列のデータを管理
            content: '',
        }
    }
}
</script>