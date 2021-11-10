<template>
   <div class="demo">
       <h3>学校名称：{{ name }}</h3>
       <h3>学校地址：{{ address }}</h3>
       <button @click='show'>点击出弹窗</button>
   </div>
</template>

<script>
    //  就是简写的 Vue.extend
    export default {
        methods: {
            // 为了方便在工具台查看
            name: 'School',
            data(){
               return {
                   name: '浙江万里学院',
                   address: '宁波'
               }
            },
            show(){
                alert(this.name)
            }
        }
    }
</script>

<style>
    .demo{
        background: goldenrod
    }
</style>