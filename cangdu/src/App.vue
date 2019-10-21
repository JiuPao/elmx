<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import flex from './assets/flexible'
export default {
  name: 'App'
}
</script>

<style>
#app,body,html{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
a{
  text-decoration: none;
}
</style>
