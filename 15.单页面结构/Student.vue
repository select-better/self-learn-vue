<template>
   <div>
       <h3>学生姓名：{{ name }}</h3>
       <h3>学生年龄：{{ age }}</h3>
   </div>
</template>

<script>
    //  就是简写的 Vue.extend
    export default {
        methods: {
            // 为了方便在工具台查看
            name: 'Student',
            data(){
               return {
                   name: 'wcl',
                   age: 19
               }
            },
        }
    }
</script>
