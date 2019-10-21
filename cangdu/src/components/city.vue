<template>
  <div class="city">
    <headers>
      <span slot="left">
        <img src="../assets/2.jpg" alt class="img1" @click="unchoice()" />
      </span>
      <span slot="title">{{this.list.name}}</span>
      <span slot="right" @click="unchoice()">切换城市</span>
    </headers>
    <div class="search">
      <input type="text" name id placeholder="输入学校、商务楼、地址" v-model="value" />
      <button @click="search()">提交</button>
      <div class="History">
        <span>搜索历史</span>
        <div class="searchHistory">
          <ul v-for="(item,key) in lists" :key="key">
            <li @click="unhemos(item)">
              <p>{{item.name}}</p>
              <p>{{item.address}}</p>
            </li>
          </ul>
          <div class="cler">
            <a href="#" @click="clear()">清空所有</a>
          </div>
        </div>
      </div>

      <div class="liebers" v-show="shows">
        <ol>
          <li v-for="(item,key) in searchs" :key="key" @click="Determine(item)">
            <p>
              <span>{{item.name}}</span>
            </p>
            <p>
              <span>{{item.address}}</span>
            </p>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import headers from "./headers";
import { cities, search } from "../api/getData";
import storage from "../assets/storage";
export default {
  components: {
    headers
  },
  data() {
    return {
      list: [],
      ids: this.$route.query.id,
      value: "",
      searchs: [],
      mine: [],
      lists: [],
      shows: false
    };
  },
  mounted() {
    this.cities();
    this.lists = storage.get("boox") || [];
    // console.log(this.list);
  },
  methods: {
    //所选城市
    async cities() {
      const res = await cities({}, this.ids);
      // console.log(res)
      this.list = res.data;
    },
    unchoice() {
      this.$router.go(-1);
    },
    //搜索地址
    async search() {
      if (this.value == "") {
        return;
      } else {
        const res = await search({ city_id: this.ids, keyword: this.value });
        this.searchs = res.data;
        // console.log(this.searchs);
        this.shows = true;
      }
    },
    //确定地址
    Determine(item) {
      if (this.mine.find(it => it.name == item.name)) {
        console.log("内容已存在..");
        return;
      } else {
        this.mine.push(item);
        storage.set("boox", this.mine);
      }
      this.lists = storage.get("boox") || [];
      this.shows = false;
      this.$router.push('/msite/minmsite/?geohash='+item.geohash)
    },
    clear(){
      this.lists = [];
      storage.set("boox", this.lists);
      this.lists = storage.get("boox") || [];
    },
    unhemos(item){
      this.$router.push('/msite/minmsite/?geohash='+item.geohash)
    }
  }
};
</script>

<style lang="less" scoped>
.img1 {
  width: 0.1553rem;
  height: 0.23rem;
}
.search {
  position: absolute;
  top: 0.63rem;
  width: 100%;
  height: 1.1rem;
  background: white;
  border-top: 0.01rem solid #e4e4e4;
  border-bottom: 0.02rem solid #e4e4e4;
  text-align: center;
  input {
    border: 0.01rem solid #e4e4e4;
    font-size: 0.17rem;
    color: #333;
    padding: 0 0.1rem;
    margin-bottom: 0.1rem;
    width: 85%;
    height: 0.35rem;
    margin-top: 0.15rem;
    outline: medium;
  }
  button {
    border: none;
    background-color: #3190e8;
    font-size: 0.17rem;
    color: #fff;
    border-radius: 0.03rem;
    margin-bottom: 0.2rem;
    width: 90%;
    height: 0.3623rem;
  }
}

.History {
  width: 100%;
  text-indent: -3.4rem;
  span {
    display: block;
    width: 100%;
    height: 0.18rem;
    border-bottom: 0.02rem solid #e4e4e4;
    font-size: 0.12rem;
  }
}

.searchHistory {
  width: 100%;
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    width: 100%;
    height: 0.79rem;
    border-bottom: 0.01rem solid #e4e4e4;
    background: white;
    overflow: hidden;
    p:nth-of-type(1) {
      margin: 0;
      padding: 0;
      margin-left: 0.9rem;
      margin-top: 0.15rem;
    }
    p:nth-of-type(2) {
      font-size: 0.1164rem;
      color: #999;
      margin-left: 2rem;
    }
  }
}

.cler {
  width: 100%;
  height: 0.51rem;
  background: white;
  text-indent: 0.1rem;
  a {
    text-decoration: none;
    font-size: 0.17rem;
    color: #666;
    line-height: 0.51rem;
  }
}

.liebers {
  width: 100%;
  background: white;
  position: absolute;
  top: 1.12rem;
  ol,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
  }
  li {
    width: 100%;
    height: 0.79rem;
    border-bottom: 0.01rem solid #e4e4e4;
    background: white;
    p:nth-of-type(1) {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 50%;
      display: flex;
      span {
        font-size: 0.168rem;
        margin-top: 0.2rem;
        margin-left: 0.2rem;
      }
    }
    p:nth-of-type(2) {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 50%;
      display: flex;
      span {
        font-size: 0.1164rem;
        color: #999;
        margin-top: 0.1rem;
        margin-left: 0.2rem;
      }
    }
  }
}
</style>