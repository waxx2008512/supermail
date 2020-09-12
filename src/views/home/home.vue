<template>
  <div id="home">
    <nav-bar class="home-class">
      <div slot="navCenter">首页</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
  <goods-list :goods="goods['pop'].list"></goods-list>
  </div>
</template>
<script>
// 公共组件
import NavBar from "components/common/navbar/navBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList"
//私有组件
import HomeSwiper from "./childComponents/homeSwiper";
import RecommendView from "./childComponents/recommendView";
import FeatureView from "./childComponents/featureView";

//接口调用
import { getHomeMultidata, getHomeGoods } from "network/home/home.js";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods('pop');
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page=this.goods[type].page+1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page+=1;
      });
    }
  }
};
</script>
<style scoped>
#home {
  padding-top: 44px;
}
.home-class {
  background-color: rgba(255, 142, 155, 1);
  color: #fff;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
}
.tab-control {
  position: sticky;
  top: 40px;
  z-index: 1;
}
</style>