<template>
  <div class="city">
    <div class="current">
      <div class="city_tip">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <a href="#" class="guess_city">
        <span @click="tocity()">{{gue.name}}</span>
        <img src="../assets/1.jpg" alt  @click="tocity()"/>
      </a>
    </div>

    <div class="Hotcities">
      <div class="hotTitle">
        <span>热门城市</span>
      </div>
      <div class="hots">
        <router-link v-for="(item,key) in hots" :key="key" :to="'/city/?id='+item.id">{{item.name}}</router-link>
      </div>
    </div>

    <div class="Allcities" v-for="(item,key) in Object.keys(group).sort()" :key="key">
      <div class="citiesTitle">
        <span>{{item}}</span>
        <span style="font-size: 0.13rem;color: #999;">(按字母排序)</span>
      </div>
      <div class="cities">
        <router-link v-for="(i,k) in group[item]" :key="k" :to="'/city/?id='+i.id">{{i.name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { guess } from "../api/getData";
export default {
  data() {
    return {
      gue: [],
      hots: [],
      group: []
    };
  },
  mounted() {
    this.getguess();
  },
  methods: {
    async getguess() {
      //当前城市
      const res = await guess({ type: "guess" });
      this.gue = res.data;

      //热门城市
      const res2 = await guess({ type: "hot" });
      this.hots = res2.data;

      //所有城市
      const res3 = await guess({ type: "group" });
      this.group = res3.data;
      // console.log(this.group);
    },
    tocity(){
      this.$router.push('/city/?id='+this.gue.id)
    }
  }
};
</script>

<style lang="less" scoped>
.city {
  width: 100%;
  overflow: auto;
  //   background: darkgray;
  position: absolute;
  top: 0.5047rem;
  left: 0;
  font-size: 0.16rem;
}
.current {
  width: 100%;
  background: white;
  margin-bottom: 0.11rem;
}
.city_tip {
  width: 100%;
  height: 0.468rem;
  display: flex;
  justify-content: space-between;
  span:nth-of-type(1) {
    font-size: 0.14rem;
    color: #666;
    margin-left: 0.1rem;
    margin-top: 0.2rem;
  }
  span:nth-of-type(2) {
    font-weight: 900;
    font-size: 0.12rem;
    color: #9f9f9f;
    margin-right: 0.1rem;
    margin-top: 0.2rem;
  }
}

.guess_city {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 0.4658rem;
  border-top: 0.01rem solid #e4e4e4;
  border-bottom: 0.02rem solid #e4e4e4;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 0.09rem;
    margin-right: 0.15rem;
  }
  span:nth-of-type(1) {
    font-size: 0.194rem;
    color: #3190e8;
    margin-left: 0.13rem;
  }
}

.Hotcities {
  width: 100%;
  height: 1.3rem;
  background-color: #fff;
  margin-bottom: 0.12rem;
}

.hotTitle {
  width: 100%;
  height: 0.398rem;
  border-top: 0.02rem solid #e4e4e4;
  border-bottom: 0.01rem solid #e4e4e4;
  color: #666;
  font-weight: 400;
  font-size: 0.142rem;
  display: flex;
  align-items: center;
  span {
    margin-left: 0.13rem;
  }
}

.hots {
  display: flex;
  flex-wrap: wrap;
  a {
    display: block;
    width: 25%;
    height: 0.45rem;
    text-align: center;
    line-height: 0.45rem;
    color: #3190e8;
    border-bottom: 0.01rem solid #e4e4e4;
    border-right: 0.01rem solid #e4e4e4;
    box-sizing: border-box;
  }
}

.Allcities {
  width: 100%;
  height: auto;
  background: white;
  margin-top: 0.1rem;
}

.citiesTitle {
  width: 100%;
  height: 0.398rem;
  color: #666;
  font-weight: 400;
  text-indent: 0.1rem;
  line-height: 0.398rem;
  border-top: 0.02rem solid #e4e4e4;
  border-bottom: 0.01rem solid #e4e4e4;
}

.cities {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  a {
    display: block;
    width: 25%;
    height: 0.45rem;
    box-sizing: border-box;
    color: #666;
    border-bottom: 0.01rem solid #e4e4e4;
    border-right: 0.01rem solid #e4e4e4;
    text-align: center;
    line-height: 0.45rem;
    overflow: hidden;
  }
}
</style>