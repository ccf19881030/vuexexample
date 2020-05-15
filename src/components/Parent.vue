<template>
    <div class="parent">
        <h3>这里是父组件</h3>
        <button type="button" @click="onChangeParentText">修改自己文本</button>
        <button type="button" @click="onChangeChildText">修改子组件文本</button>
        <div>ParentText: {{ msg }}  </div>
        <child></child>
    </div>
</template>

<script>
    import Child from './Child.vue'

export default {
   computed: {
       msg () {
           return this.$store.state.parentText;
       }
   },
   methods: {
       onChangeParentText() {
           this.$store.commit('changeParentText', '父组件修改自己后的文本');
       },
       onChangeChildText() {
           this.$store.commit('changeChildText', '父组件修改子组件后的文本');
       }
   },
   components: {
       'child': Child
   }
}
</script>

<style scoped>
    .parent{
        background-color: #00BBFF;
        height: 400px;
    }
</style>
