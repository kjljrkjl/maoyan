<template>
  <!-- <div class="wrapper"> -->
  <div class="">
     


    <div class="content">
     
      <MovieItem v-for="item in dataset.movieList" :item="item" :key="item.id"></MovieItem>
    </div>
  </div>
</template>

<script>
import MovieItem from "./MovieItem.vue";
import { movieOnInfoList, moreComingList } from "@/api/movie";
import BScroll from "@better-scroll/core";
import Pullup from '@better-scroll/pull-up'
BScroll.use(Pullup)
import { Indicator } from 'mint-ui';
import 'mint-ui/lib/style.css';



export default {
  data() {
    return {
      startIndex : 12,
      pageSize : 10,
      dataset: {
        movieIds: [],
        movieList: [],
        total: 0
      }
    };
  },
  methods: {
    activated(){
      console.log("activated")
    },
    deactivated(){
      console.log("deactivated")
    },
    initScroll(){
      this.scroll = new BScroll(".wrapper", {
        scrollY: true,
        click: true,
        probeType: 3 ,// listening scroll hook
        pullUpLoad: true
      });
      this.scroll.on('pullingUp',()=>{            
            this.moreComing();    
      });
      this.scroll.on("scroll",(coordinate)=>{
        if(coordinate.y<-50){
          this.$store.commit("UPDATE_DOWN_STATE",false)
        }else{
          this.$store.commit("UPDATE_DOWN_STATE",true)
        }
        
      })

    },
    async moreComing(){
      if(this.dataset.movieList.length == this.dataset.total ){
        // console.log("停职了吗")
        this.scroll.finishPullUp() ;
        return ;
      }
      let ids = this.dataset.movieIds.slice(this.startIndex,(this.startIndex+this.pageSize))
      var params = {
        token:"",
        movieIds:ids.join(",")
      };
      Indicator.open('加载中...');
      let result = await moreComingList(params);
      // console.log(result);
      this.dataset.movieList.push(...result.data.coming);
      this.$nextTick(()=>{ 
        this.scroll.finishPullUp() ;
        this.scroll.refresh();
        Indicator.close();
        this.startIndex += this.pageSize ;
      })

    }
  },
  async created() {
    Indicator.open('加载中...');
    let params = {
      token:"" ,
   
    }
    let result = await movieOnInfoList(params);
    this.dataset = result.data;

    //this.nextTick()  在dom元素渲染之后执行
    this.$nextTick(()=> {
      this.initScroll()
      Indicator.close();
    });
  },


  mounted() {},

  components: {
    MovieItem,
  
  }
};
</script>

<style lang="scss" scoped>
</style>