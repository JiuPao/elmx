<template>
  <div class="search">
    <headers>
      <span slot="left">
        <i class="el-icon-arrow-left" @click="tominmsite()"></i>
      </span>
      <span slot="title">
        <p class="ps1">搜索</p>
      </span>
      <span slot="right"></span>
    </headers>
    <div class="contc">
      <input type="text" placeholder="请输入商家或美食名称" v-model="value" />
      <button @click="oksearch()">提交</button>
    </div>
    <div class="listx">
      <ul>
        <li v-for="(item,key) in listc" :key="key">
          <div class="lefts">
            <img :src="'http://elm.cangdu.org/img/'+item.image_path" alt />
          </div>
          <div class="rights">
            <p>
              {{item.name}}
              <span>支付</span>
            </p>
            <p>月售{{item.recent_order_num}}单</p>
            <p>{{item.float_minimum_order_amount}}元起送/距离{{item.distance}}</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="listf">
      <div class="lishi">搜索历史</div>
      <ul class="swles">
        <li v-for="(item,key) in jilu" :key="key">
          <span>{{item}}</span>
          <i class="el-icon-close" @click="removes(key,item)"></i>
        </li>
      </ul>
      <div class="removec">
        <span @click="removec()">清理搜索历史</span>
      </div>
    </div>
  </div>
</template>

<script>
import headers from "./headers";
import storage from "../assets/storage";
import { restaurants } from "../api/getData";
export default {
  components: {
    headers
  },
  data() {
    return {
      geohash: [],
      value: "",
      listc: [],
      mine: [],
      jilu: []
    };
  },
  mounted() {
    this.geohash = storage.get("geohash");
    // console.log(this.geohash)
    this.jilu = storage.get("val") || [];
    console.log(this.jilu);
  },
  methods: {
    tominmsite() {
      this.$router.push("/msite/minmsite/?geohash=" + this.geohash.geohash);
    },
    removec(){
      this.jilu = [];
      storage.set("val", this.jilu);
      this.jilu = storage.get("val") || [];
    },
    async oksearch() {
      // console.log(this.geohash.geohash)
      // console.log(this.value)
      if (this.value != "") {
        const res = await restaurants({
          geohash: this.geohash.geohash,
          keyword: this.value
        });
        this.listc = res.data;
        console.log(this.listc);

        if (this.mine.find(it => it.value == this.value)) {
          console.log("内容已存在..");
          return;
        } else {
          this.mine.push(this.value);
        }
          storage.set("val", this.mine);

        this.jilu = storage.get("val") || [];
        this.value= ''
      }
    },
    removes(key,item){
      console.log(key)
      this.jilu.splice(key,1)
      storage.set("val", this.jilu);
    }
  }
};
</script>

<style lang='less'>
.search {
  .ps1 {
    text-indent: -0.4rem;
    font-size: 0.2rem;
    font-weight: 600;
    color: white;
  }
}
.contc {
  width: 100%;
  height: 0.65rem;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    border: 0.01rem solid #e4e4e4;
    font-size: 0.18rem;
    color: #333;
    border-radius: 0.04rem;
    background-color: #f2f2f2;
    font-weight: 700;
    width: 2.88rem;
    height: 0.34rem;
    padding-left: 0.1rem;
    outline: medium;
  }
  button {
    border: 0.01rem solid #3190e8;
    font-size: 0.18rem;
    margin-left: 0.05rem;
    color: #fff;
    border-radius: 0.05rem;
    background-color: #3190e8;
    font-weight: 700;
    width: 0.85rem;
    height: 0.39rem;
  }
}
.listx {
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      width: 100%;
      height: 1.1rem;
      background: white;
      border-bottom: 0.01rem solid #e4e4e4;
      display: flex;
      p {
        margin: 0;
        padding: 0;
        width: 3rem;
        // background: chartreuse;
        margin-left: 0.05rem;
        margin-top: 0.1rem;
        font-size: 0.145rem;
        span {
          color: rgb(255, 96, 0);
          font-size: 0.12rem;
        }
      }
      p:nth-of-type(3) {
        width: 3.5rem;
        border-bottom: 0.01rem solid #e4e4e4;
      }
      img {
        width: 0.44rem;
      }
    }
  }
  .lefts {
    margin-left: 0.1rem;
    margin-top: 0.1rem;
  }
}
.lishi {
  width: 100%;
  height: 0.51rem;
  line-height: 0.51rem;
  font-size: 0.155rem;
  color: #666666;
  font-weight: 800;
  text-indent: 0.15rem;
}
.swles {
  margin: 0;
  padding: 0;
  width: 100%;
  li {
    width: 100%;
    height: 0.51rem;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.01rem solid #e4e4e4;
    span{
      font-size: 0.18rem;
      margin-left: 0.1rem;
    }
    i{
      color: rgb(153, 153, 153);
      font-size: 0.2rem;
      font-weight: 600;
      margin-right: 0.1rem;
    }
  }
}
.removec{
  width: 100%;
  height: 0.51rem;
  background: white;
  font-size: 0.18rem;
  font-weight: 600;
  color: #3190e8;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>