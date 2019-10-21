<template>
  <div class="food">
    <headers>
      <span slot="left">
        <i class="el-icon-arrow-left" @click="untos()"></i>
      </span>
      <span slot="title">{{this.title}}</span>
      <span slot="right"></span>
    </headers>
    <div class="content">
      <van-dropdown-menu>
        <van-dropdown-item :title="this.title" ref="item">
          <van-switch-cell v-model="switch1" title="包邮" />
          <van-switch-cell v-model="switch2" title="团购" />
          <van-button block type="info" @click="onConfirm">确认</van-button>
        </van-dropdown-item>
        <van-dropdown-item title="排序" ref="item">
          <van-switch-cell v-model="switch1" title="包邮" />
          <van-switch-cell v-model="switch2" title="团购" />
          <van-button block type="info" @click="onConfirm">确认</van-button>
        </van-dropdown-item>

        <van-dropdown-item title="排序" ref="item">
          <van-switch-cell v-model="switch1" title="包邮" />
          <van-switch-cell v-model="switch2" title="团购" />
          <van-button block type="info" @click="onConfirm">确认</van-button>
        </van-dropdown-item>

      </van-dropdown-menu>
      <div class="conts" v-for="(item,key) in info" :key="key">
        <div class="imgs">
          <img :src="'http://elm.cangdu.org/img/'+item.image_path" alt />
        </div>
        <div class="texts">
          <p>
            <span>品牌</span>
            {{item.name}}
          </p>
          <p>
            <el-rate
              v-model="item.rating"
              disabled
              show-score
              disabled-void-color="#d1d1d1"
              text-color="#ff9900"
              score-template="{value}"
              class="rate"
            ></el-rate>
            <span class="ams">月售{{item.recent_order_num}}单</span>
          </p>
          <p>￥{{item.float_minimum_order_amount}}/配送费约￥{{item.float_delivery_fee}}</p>
        </div>
        <div class="rights">
          <div class="txtx">
            <p v-for="(i,k) in item.supports" :key="k">{{i.icon_name}}</p>
          </div>
          <div class="txtw">
            <p>{{item.delivery_mode.text}}</p>
            <p>{{txt}}</p>
          </div>
          <div class="txtd">
            <p>
              {{item.distance}}/
              <span>{{item.order_lead_time}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headers from "./headers";
import { search2, shopping } from "../api/getData";
export default {
  components: {
    headers
  },
  data() {
    return {
      geohash: this.$route.query.geohash,
      list: [],
      info: [],
      txt: "",
      title: this.$route.query.title,
      switch1: false,
      switch2: false,
    };
  },
  async mounted() {
    const res = await search2({}, this.geohash);
    console.log(res);
    this.list = res.data;
    this.shopping();

    this.option[0].text = this.title;
  },
  methods: {
    async shopping() {
      const res = await shopping({
        latitude: this.list.latitude,
        longitude: this.list.longitude
      });
      console.log(res);
      this.info = res.data;
      this.info.map((item, key) => {
        this.txt = item.supports[1].name;
      });
    },
    untos() {
      this.$router.go(-1);
    },

    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
</script>

<style lang='less'>
.content {
  position: absolute;
  top: 0.5045rem;
}

.van-dropdown-menu{
  height: 0.41rem;
  width: 100%;
}

.conts {
  width: 100%;
  height: 1.14rem;
  border-bottom: 0.01rem solid #f1f1f1;
  display: flex;
  align-items: center;
  background: white;
  img {
    width: 0.7rem;
    height: 0.7rem;
    margin-left: 0.1rem;
  }
  .texts {
    width: 1.8rem;
    height: 100%;
    line-height: 0.005rem;
    p {
      margin-left: 0.1rem;
    }
    p:nth-of-type(1) {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 0.145rem;
      margin-top: 0.2rem;
      line-height: 0.145rem;
      margin-bottom: 0.1rem;
      font-size: 0.145rem;
      span {
        border-radius: 0.02rem;
        font-size: 0.14rem;
        background-color: #ffd930;
      }
    }
    p:nth-of-type(2) {
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 0.1rem;
      .ams {
        font-size: 0.09rem;
      }
    }
    p:nth-of-type(3) {
      font-size: 0.13rem;
      color: #666;
    }
  }
}
.rights {
  width: 1.5rem;
  height: 100%;
  .txtx {
    margin-top: 0.2rem;
    margin-left: 1.05rem;
    display: flex;
    p {
      height: 0.13rem;
      margin: 0;
      padding: 0;
      font-size: 0.12rem;
      color: #999;
      margin-right: 0.02rem;
    }
  }
  .txtw {
    display: flex;
    width: 100%;
    margin-top: 0.15rem;
    p {
      margin: 0;
      padding: 0;
    }
    p:nth-of-type(1) {
      margin-left: 0.75rem;
      font-size: 0.06rem;
      color: #fff;
      background-color: #3190e8;
      height: 0.13rem;
      border-radius: 0.02rem;
      line-height: 0.13rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p:nth-of-type(2) {
      font-size: 0.05rem;
      color: #3190e8;
      background-color: #fff;
      border: 0.004rem solid #3190e8;
      height: 0.13rem;
      border-radius: 0.02rem;
      line-height: 0.13rem;
      margin-left: 0.02rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .txtd {
    width: 100%;
    margin-top: 0.15rem;
    p {
      margin: 0;
      padding: 0;
      font-size: 0.125rem;
      color: #999999;
      text-indent: 0.5rem;
      span {
        color: #3190e8;
      }
    }
  }
}
.rate {
  width: 0.9rem;
}
.el-rate__icon {
  font-size: 0.13rem;
  margin: 0;
}
.el-rate__text {
  font-size: 0.11rem;
  margin-left: 0.02rem;
}
</style>