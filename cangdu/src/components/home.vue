<template>
  <div class="home">
    <headers class="headers">
      <span slot="left">ele.me</span>
      <span slot="title"></span>
      <span slot="right">登录|注册</span>
    </headers>
    <Citychoice></Citychoice>
  </div>
</template>

<script>
import headers from "./headers";
import Citychoice from "./Citychoice";
export default {
  name: "home",
  components: {
    headers,
    Citychoice
  },
  data() {
    return {
      list: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>