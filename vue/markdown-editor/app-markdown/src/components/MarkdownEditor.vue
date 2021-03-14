<template>
    <div class="form-group">
        <!--③入力を検知すると親コンポーネントにイベントともに入力値が通知される。-->
        <textarea
          class="form-input"
          :value = "text"
          @input = "onInput"
          row="10"></textarea>
    </div>
</template>

<script>
export default {
    porps: {
        value : {
            type: String,
            required: true,
        }
    },
    data(){
        return {
            text: this.value
        }
    },
    methods: {
        //③入力を検知すると親コンポーネントにイベントともに入力値が通知される。
        onInput($event){
            this.text = $event.target.value
            this.$emit('input', this.text)
        }
    }
}
</script>