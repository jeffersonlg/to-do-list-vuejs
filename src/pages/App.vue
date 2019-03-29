<template>
  <div id="app">
    <AppLayout></AppLayout>
  </div>
    
</template>
<script>
import AppLayout from '../components/AppLayout'
export default {
  name: 'app',
  components: {
    AppLayout
  }
}
</script>

<style>
.app {
  padding-top: 80px;
}
/* .container {
  margin: 100px 0 0 0;
  border: red 2px solid;
} */
</style>
