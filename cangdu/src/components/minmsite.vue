<template>
  <div>
    <swiper :options="swiperOption" class="lunbo">
      <swiper-slide v-for="(item,key) in data" :key="key" class="slide">
        <img :src="'https://fuss10.elemecdn.com/'+item.image_url" alt @click="tofood(item)"/>
        <p @click="tofood(item)">{{item.title}}</p>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="lists">
      <div class="titles">
        <i class="el-icon-s-shop"></i>
        <span>附近商家</span>
      </div>

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
import storage from '../assets/storage'
import { search2, indexentry, shopping } from "../api/getData";
export default {
  data() {
    return {
      geohash: this.$route.query.geohash,
      list: [],
      data: [],
      info: [],
      txt: "",
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true // 允许点击小圆点跳转
        },
        slidesPerView: 4,
        slidesPerGroup: 8,
        slidesPerColumn: 2,
        loop: true
      }
    };
  },
  async mounted() {
    const res = await search2({}, this.geohash);
    console.log(res)
    this.list = res.data;

    const data = await indexentry({});
    this.data = data.data;
    console.log(this.data);
    this.shopping();
    storage.set('geohash',this.list)
  },
  methods: {
    choice() {
      this.$router.go(-2);
    },
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
    tofood(item){
      this.$router.push('/food/?geohash='+this.geohash + '&title=' + item.title + '&restaurant_category_id=' + item.id);
    }
  }
};
</script>

<style>
</style>