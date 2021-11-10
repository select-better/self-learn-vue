<template>
    <div>
        <School />
        <Student />
    </div>
</template>

<script>
    import Student from './Student.vue'
    import School from './School.vue'

    export default {
       components: {
           Student,
           School
       }
    }
</script>