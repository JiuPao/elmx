<template>
  <div class="footers">
    <a @click="tominmsite()">
      <i class="el-icon-eleme"></i>
      <p>外卖</p>
    </a>
    <a @click="tosearch()">
      <i class="el-icon-discover"></i>
      <p>搜索</p>
    </a>
    <a @click="toorder()">
      <i class="el-icon-tickets"></i>
      <p>订单</p>
    </a>
    <a @click="toprofile()">
      <i class="el-icon-user"></i>
      <p>我的</p>
    </a>
  </div>
</template>

<script>
import storage from "../assets/storage";
export default {
  data() {
    return {
      geohash: []
    };
  },
  mounted() {
    this.geohash = storage.get("geohash");
    console.log(this.geohash)
  },
  methods: {
    tominmsite() {
      this.$router.push("/msite/minmsite/?geohash=" + this.geohash.geohash);
    },
    tosearch() {
      this.$router.push("/msite/search");
    },
    toorder() {
      this.$router.push("/msite/order");
    },
    toprofile() {
      this.$router.push("/msite/profile");
    }
  }
};
</script>

<style lang="less" scoped>
.footers {
  width: 100%;
  height: 0.5045rem;
  border-top: 0.01rem solid #e4e4e4;
  position: fixed;
  bottom: 0;
  background: white;
  display: flex;
  a {
    display: block;
    width: 25%;
    height: 100%;
    color: #666;
    text-align: center;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    i {
      font-size: 0.23rem;
      margin-top: 0.08rem;
    }
    i:hover {
      font-size: 0.23rem;
      margin-top: 0.08rem;
      color: #3190e8;
    }
    p {
      margin: 0;
      padding: 0;
      font-size: 0.135rem;
    }
  }
}
</style>