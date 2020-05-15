<template>
    <div class="child">
        <h3>这里是子组件</h3>
        <div>childText: {{msg}}</div>
        <button type="button" @click="onChangeParentText">修改父组件文本</button>
        <button type="button" @click="onChangeChildText">修改自己文本</button>
    </div>
</template>

<script>
    export default {
        name: "Child",
        computed:{
            msg(){
                return this.$store.state.childText;
            }
        },
        methods: {
            onChangeParentText(){
                this.$store.commit("changeParentText", "子组件修改父组件后的文本");
            },
            onChangeChildText(){
                this.$store.commit("changeChildText", "子组件修改自己后的文本");
            }
        }
    }
</script>

<style scoped>
    .child{
        background-color: palegreen;
        border:1px solid black;
        height:200px;
        margin:10px;
    }
</style>