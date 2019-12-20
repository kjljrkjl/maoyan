<template>
  <div class="city-content-wrapper">
    <div id="city-wrapper" class="city-wrapper">
      <section id="city-list" class="city-list-container" style="display: block;">
        <section>
          <div id="locate" class="city-title">定位城市</div>
          <div class="city-list city-list-inline clearfix">
            <div class="location-city">定位失败，请点击重试</div>
          </div>
        </section>

        <section class="history-city-list">
          <div id="history" class="city-title">最近访问城市</div>
          <div class="city-list city-list-inline clearfix">
            <div class="city-item" v-for="city in getHistoryCities " :key="city.id" >{{city.name}}</div>
          </div>
        </section>

        <section>
          <div id="hot" class="city-title">热门城市</div>
          <div class="city-list city-list-inline clearfix">
            <div
              v-for="city in hotCities"
              :key="city.id"
              @click="setCity(city)"
              class="city-item"
            >{{city.name}}</div>
          </div>
        </section>

        <section>
          <div v-for="(items,key) in cities" :key="key">
            <div :id="key+'l'" class="city-title city-title-letter">{{key}}</div>
            <div class="city-list city-list-block clearfix">
              <div
                
                class="city-item"
                v-for="item in items"
                :key="item.id"
                @click="setCity(item)"
              >{{item.name}}</div>
            </div>
          </div>
        </section>
      </section>
    </div>
    <section class="nav">
      <div class="nav-item" @click="setPosition('locate')" data-id="locate">定位</div>

      <div class="nav-item" @click="setPosition('history')" data-id="history">最近</div>

      <div class="nav-item" @click="setPosition('hot')" data-id="hot">热门</div>

      <div
        @touchmove="touchHandler($event)"
        class="nav-letter nav-item"
        v-for="(l,index) in getLetters"
        @click="setPosition(l+'l')"
        :key="index"
        :id="'L'+l"
        :ref="l"
      >{{l}}</div>
    </section>
  </div>
</template>

<script>
import { getHotCities } from "@/api/movie.js";
import BScroll from "@better-scroll/core";

export default {
  data() {
    return {
      hotCities: [],
      cities: []
    };
  },
  created() {},
  methods: {
    setCity(city) {
     
      this.$store.commit("UPDATE_CITY", city);
      this.$router.go(-1);
      this.$cache.addCity(city)
    },
   
    initScroll() {
      this.scroll = new BScroll("#city-wrapper", {
        probeType: 3,
        click: true,
        scrollY: true
      });
    },
    setPosition(letter) {
      /* 
        scrollToElement() 方法： 点击按钮，滚动到指定元素的位置  。 效果： 点击按钮，将指定元素滚动到 wrapper的顶部，类似于锚点
        */
      this.scroll.scrollToElement(`#${letter}`, 100);
    },
    touchHandler(event) {
      let currentY = event.touches[0].pageY;
      let index = Math.floor(
        (currentY - this.topHeight) / this.baseLetterHeight
      );
      let key = Object.keys(this.cities)[index];
      console.log(key);
      this.scroll.scrollToElement(`#${key}l`, 100);
    }
  },
  computed: {
    getLetters() {
      return Object.keys(this.cities);
    },
    getHistoryCities(){
        return JSON.parse(localStorage.getItem('historycities'))
    }
  },
  async created() {
    let result = await getHotCities();
    this.hotCities = result.data.hotCities;
    this.cities = result.data.cities;
    // console.log(this.cities);
    this.$nextTick(() => {
      this.initScroll();
      this.baseLetterHeight = this.$refs["A"][0].getBoundingClientRect().height;
      this.topHeight = this.$refs["A"][0].getBoundingClientRect().y;
      console.log(this.topHeight);
    });
  }
};
</script>


<style lang="scss" scoped>
.city-content-wrapper {
  height: 100%;
  .city-wrapper {
    height: 100%;
  }
}
</style>