<template>
    <div class="login">
       <CardLogin/>
    </div>
</template>
<script>
import CardLogin from '../components/Login'
export default {
    name: 'Login',
    components: {
        CardLogin
    }
}
</script>

<style scoped>
  .login{
    text-align: center;
}

</style>

