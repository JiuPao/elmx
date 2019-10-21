<template>
  <div class="profile">
    <headers>
      <span slot="left">
        <i class="el-icon-arrow-left" @click="untos()"></i>
      </span>
      <span slot="title">我的</span>
      <span slot="right"></span>
    </headers>
    <div class="contk">
      <div class="xdd2">
        <el-row class="demo-avatar demo-basic">
          <el-col :span="24">
            <div class="sub-title"></div>
            <div class="demo-basic--circle">
              <div class="block">
                <p><el-avatar :size="64" :src="circleUrl"></el-avatar></p>
                <p>
                  登录/注册
                  <i class="el-icon-mobile-phone"></i>
                  暂无绑定手机号
                </p>
                
                <p><i class="el-icon-arrow-right"></i></p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import headers from "./headers";
export default {
  components: {
    headers
  },
  data () {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    }
  },
  methods: {
    untos() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.contk {
  width: 100%;
  height: 4.5rem;
  background: darkcyan;
}
.xdd2 {
  width: 100%;
  height: 0.99rem;
  background: #3190e8;
  border-top: 0.001rem solid #e4e4e4;
}
.block{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
</style>