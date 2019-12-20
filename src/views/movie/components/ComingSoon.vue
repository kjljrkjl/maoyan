<template>
  <div>




    <div id="mostexpect">
      <div :style="'width:'+itemWidth+'px'" class="mostexpect">
        <MostExpectiten v-for="item in expect.coming" :obj="item" :key="item.id"></MostExpectiten>
      </div>
    </div>

    <div class="coming-wrapper">
      <div class="coming-content">
        <div v-for="(items,key,index) in comingListByDay" :key="index">
          <h4>{{key}}</h4>
          <ComingItem v-for="item in items" :item="item" :key="item.id"></ComingItem>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
import MostExpectiten from "./MostExpectiten.vue";
import { mostExpected, comingList } from "@/api/movie.js";
import ComingItem from "./ComingItem";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);

export default {
  data() {
    return {
      pagesize : 10,
      startIndex : 0,
      //节流，判断请求是否完成
      finished: true,
      itemWidth: 0,
      //城市id
      ci: 51,
      comings: {
        coming: [],
        movieIds:[]
      },
      //最受期待
      expect: {
        coming: [],
        paging: {
          hasMore: true,
          limit: 10,
          offset: 0,
          total: 0
        }
      }
    };
  },
  components: {
    MostExpectiten,
    ComingItem
  },
  computed: {
    comingListByDay() {
      var result = {};
      // console.log(this.comings)
      this.comings.coming.forEach(item => {
        if (!result[item.comingTitle]) {
          result[item.comingTitle] = [item];
        } else {
          result[item.comingTitle].push(item);
        }
      });
      // console.log(result);
      return result;
    }
  },
  created() {
    this.getMostExpect();
    this.getComingList();
  },
  methods: {
    async getComingList() {
     
      let rs = await comingList({
        ci: 1,
        token: "",
        limit: 10
      });
      this.comings = rs.data;
      
      this.$nextTick(() => {
        this.bscroll = new BScroll(".coming-wrapper", {
          scrollY: true,
          click: true,
          probeType: 3, // listening scroll hook
          pullUpLoad: true
        });

        let ids = this.comings.movieIds.slice(this.startIndex,this.pagesize);

        this.bscroll.on("pullingUp", async () => {

          let result = await comingList({
            ci: 1,
            token: "",
            limit: 10,
            movieIds : ids.join(",")
          });
          this.comings.coming.push(...result.data.coming);
          this.bscroll.finishPullUp();
          this.bscroll.refresh();

        });

        this.bscroll.on("scroll",(position)=>{
          if (Math.abs(position.y)>50) {
            this.$store.commit("UPDATE_DOWN_STATE",false)
          }else{
            this.$store.commit("UPDATE_DOWN_STATE",true)
          }
        })



      });
    },
    async getMostExpect() {
      let num =
        this.expect.paging.offset === 0
          ? this.expect.paging.offset
          : this.expect.paging.offset + this.expect.paging.limit;
      let params = {
        ci: this.ci,
        limit: 10,
        offset: num,
        token: ""
      };

      let result = await mostExpected(params);
  
      this.expect.coming.push(...result.data.coming);
      this.expect.paging.offset += this.expect.paging.limit;

      this.itemWidth = this.expect.coming.length * 91;
      this.$nextTick(() => {
        this.initScroll();
      });
      // console.log(result);
    },
    initScroll() {
      if (this.scroll) {
        this.scroll.refresh();
        return;
      }
      this.scroll = new BScroll("#mostexpect", {
        scrollX: true,
        click: true,
        probeType: 3, // listening scroll hook
        pullUpLoad: true
      });
      this.scroll.on("scrollEnd", async (position) => {
        // console.log(position)
        if (this.finished && this.scroll.maxScrollX === position.x) {
          this.finished = false;
          await this.getMostExpect();
          this.finished = true;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#mostexpect {
  overflow: hidden;
}
.mostexpect {
  display: flex;
  margin-left: 15px;
}
.mostexpect div:first-child {
  margin-left: 0px;
}
.coming-wrapper {
  height: 100%;
}
</style>