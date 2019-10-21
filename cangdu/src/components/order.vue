<template>
  <div class="order">
      <headers>
        <span slot="left">
          <i class="el-icon-arrow-left" @click="untos()"></i>
        </span>
        <span slot="title">订单列表</span>
        <span slot="right"></span>
      </headers>
  </div>
</template>

<script>
import headers from './headers'
export default {
  components: {
    headers
  },
  methods: {
    untos(){
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>