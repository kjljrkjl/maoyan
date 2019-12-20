<template>


  <div class="movie-detail-wrapper">
    <HeaderBar>
      <template #back>
        <i @click="$router.go(-1)" class="icon-back"></i>
      </template>
    </HeaderBar>

    <div class="movie-detail">
      <div class="movie-container">
        <div class="detail-left">
          <img
            src="http://p0.meituan.net/148.208/movie/dd488887e8a1c8ab4723eee4026d25aa1973142.jpg"
            alt
          />
        </div>
        <div class="detail-dec">
          <h2>利刃出鞘</h2>
          <p class="title-en-name">Knives Out</p>
          <div class="score">
            <span class="num">8.8</span>
            <span class="snum">(4.0万人评)</span>
          </div>
          <p>剧情,悬疑,惊悚,犯罪</p>
          <p>美国/131分钟</p>
          <p>2019-11-29大陆上映</p>
        </div>
      </div>
    </div>

    <div id="showDays">
      <ul id="timeline" :style="{'margin-left':toleft+'px'}"  class="mb-line-b">
        <li
          v-for="(date,index) in showDays.dates"
          @click="selectHandler(index,$event)"
          :key="index"
          :class=" index==current?'showDay chosen' : 'showDay'  "
        >{{date.date}}</li>
      </ul>
    </div>



  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar";

export default {
  data() {
    return {
        toleft : 0,
      current: 0,
      showDays: {
        dates: [
          {
            date: "2019-12-06",
            isPredate: 0
          },
          {
            date: "2019-12-07",
            isPredate: 0
          },
          {
            date: "2019-12-08",
            isPredate: 0
          },
          {
            date: "2019-12-09",
            isPredate: 0
          },
          {
            date: "2019-12-10",
            isPredate: 0
          },
          {
            date: "2019-12-12",
            isPredate: 0
          },
          {
            date: "2019-12-14",
            isPredate: 0
          },
          {
            date: "2019-12-15",
            isPredate: 0
          }
        ]
      }
    };
  },

  components: {
    HeaderBar,
    

  },
  methods: {
    selectHandler(index, event) {
      this.current = index;
      console.log(event);
      if ( index!==0 && event.pageX < 128) {
        this.toleft += 128;
      } else if (event.pageX > 252 && index!==(this.showDays.dates.length-1) ) {
        this.toleft -= 128;
      }
    },
    active(){
        
      }




  }
};
</script>

<style lang="scss" scoped>
.movie-detail-wrapper {
  position: relative;
  .movie-detail {
    height: 188px;
    width: 100%;
    font-family: PingFangSC-Regular, Hiragino Sans GB, sans-serif;
    background: gray;
    position: relative;
    .movie-container {
      padding: 19px 30px 19px 15px;
      display: flex;
      // background: url("http://p0.meituan.net/71.100/movie/dd488887e8a1c8ab4723eee4026d25aa1973142.jpg") no-repeat;

      .detail-left {
        img {
          width: 110px;
          height: 150px;
        }
      }
      .detail-dec {
        margin-left: 12.5px;
        h2 {
          font-size: 20px;
          color: #fff;
          font-weight: 700;
        }
        .title-en-name {
          margin-top: 10px;
          font-size: 12px;
          color: #fff;
          opacity: 0.8;
        }
        .score {
          margin-top: 10px;
          .num {
            display: inline-block;
            width: 32px;
            font-size: 18px;
            font-weight: 700;
            color: #fc0;
          }
          .snum {
            margin-top: 10px;
            font-size: 12px;
            color: #fff;
            opacity: 0.8;
          }
        }
        p {
          margin-top: 10px;
          font-size: 12px;
          color: #fff;
          opacity: 0.8;
        }
      }
    }
  }

  #showDays {
    width: 100%;
    height: 45px;
    overflow-x: scroll;
    background-color: #fff;
  }

  #showDays #timeline {
    overflow-x: scroll;
    padding: 0;
    margin: 0;
    height: 45px;
    white-space: nowrap;
    transition: all 1s;
  }

  #showDays #timeline .showDay {
    display: inline-block;
    width: 115px;
    line-height: 43px;
    margin-left: 4.5px;
    font-size: 14px;
    text-align: center;
    list-style: none;
    color: #666;
  }

  #showDays #timeline .showDay.predateShowDay {
    width: auto;
    padding-left: 10px;
  }

  #showDays #timeline .showDay.predateShowDay .isPredate {
    float: right;
    margin: 14px 3px;
    width: 26px;
    height: 15px;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAeCAYAAABjTz27AAAAAXNSR0IArs4c6QAABJ9JREFUWAndmH+IlEUYx7+zu6mdldZF2VUGpUVC9gMJlaIuI7vzCBSJ/qioQ4ugwOCMiAr/sMgMCqs/+qtIrqBEjDw1ME0sEbI/hCBDKIhS+0FJnHdl502fZ3bf9d19971972492gZm5/k1z8x3nmfmnR0niv9Ul2pQr8jpNnldYrKmKU5HmfMena0et0g/uQDmLx1A+JoKetfdjUETFb+DAAzrAeb/pKZonvN9eg/moOvSuibCkZiq36anwHFDDs3tFpmERbMJctoYsPit4PqfFMNiERpT8V550rXLf6LLx+SgTif2xizS6K46Zgn1mAHpK00mth9rSHcmvDZCMKx72ey9o3VVGG2HhL3XAkL9T0IeCaZqi2tXv7F+u5bqlB6NVKF1OuKWqLtCNg5m/ICklYxvtXYZ1CwUARARvaL0rSseQk43ojO9SN8Z6O8xOhSvm2mnsFiPlCTWHOY03h3jE+T4ATl1s8JvJzynCbz6mVSIEnvkGUAUo5PXbNL3LQD/QtdTyM+hbYFfE1x5tUJ/AD0ioLHvoTDKGfhxWsgCtSmnl/D+u9GBd/o8y2iZIsRKzmfFbq1weEyTAu/VQbpcWKErMj8ykfdryM+oKBMgZnAHdS31WHk2LlB2TbqlVMsqiPNZgC9p/7OA2LUaJPfb4rNOo9nIm9HVipp1mUpEXw59h4l8cWEC24ifrBFqxFhFH05nQRTT13HLl042zrm4xU108TpOpBfYsNEpR8Su44R7IkzF61kifJyMsOhNh361NMXZyNqwXc3eXF+SJZrRACrg7OGEh1oC+95IJ2qpaspymsatoBXdLupMgMxk8tdDF6AX09pePVxKz6uhU0s2QD7cBIYY5I1UT9UKpy+qRWm86whH8qJIT1SuhDYAe2gHiEhnpKvXZgPUote5vqSGuXoQLq45bQ97pVqVlX8aQ/vT2Q2obwHYXu+GEDmu+2H1B/haD+gb8v1x60Q7hwF6IgfwV5GKm6iWZsWyTTtGiGYLtmusYlOOStSV+55FYyVLshYQ32HTC6h1LFKm87AuIP2s53B6kfL6KAzqdA3teoBcFvg83ybPJLzuC3zxpw9+BcCXxWQRORliaana0X4oUuBzPpeeXvhe18lN3sokvYCvm9SnDSHyQTjCD4P6NDW6a1nJk7TPRzbwM6wP9f6YzCJ0sMyTcvD7sfnN7wybPaiY8Cpkv0Z28dYig+5P+u3y+3jyiBVkD6Ebom6u1sXMhL7OHzynN+lwRBec3j9sULstfE9tLztz+pBlmcuE55jMOc6sglaQJOfp79hbRZ5UzOmxcj8Iv1sF+m0gMn2we3WxutxC3qBihTHfod9y/HXqD+2kz/SYuoJMTbkQXqd9OOmpHgDZXqods8WS11aIHwBlR20obrG+hngRu4GSSMgOkUqbIt5aDhs7PVuZcI+WAGbeafsKu05twa4DWb/OHeGTYGGKd8xCZ92gWXw10qZ+yqWMRkqNehFSXDVcnCMljobHuoa7nliHAQNYbA99Fl4eJ3b8xo82pAcNS4Hn09XiKZiTRmzMjU35FGxgnFaFp2BbqqZ/rLcsIzD2WP8v1uNyTE/IErcAAAAASUVORK5CYII=");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  #showDays #timeline .showDay.chosen {
    border-bottom: 2px solid #f03d37;
    color: #f03d37;
  }
}
</style>