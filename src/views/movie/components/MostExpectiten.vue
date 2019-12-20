<template>
 
    <div class="most-container">
    <img :src="obj.img | formatImg('85.115') " alt />
    <h4>{{obj.nm}}</h4>
    <span>{{obj.comingTitle}}</span>
  </div>
 
</template>

<script>



export default {
  props: ["obj"],


};
</script>

<style lang="scss" scoped>
.most-container {
  height: 160px;
  margin: 5px 5px;

  img {
    width: 85px;
    height: 115px;
  }
  h4 {
    font-size: 13px;
    color: #222;
    line-height: 25px;
    width:85px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  span {
    display: inline-block;
    font-size: 12px;
    color: #999;
    width:85px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}

// .most-expected {
//   padding: 12px 0 12px 15px;
//   background-color: #fff;
//   margin-bottom: 10px;
//   font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;
//   .title {
//     margin: 0;
//     font-size: 14px;
//     color: #333;
//     margin-bottom: 12px;
//   }
//   .expected-item {
//     display: inline-block;
//     width: 85px;
//     overflow: hidden;
//     margin-right: 10px;
//     .poster.default-img-bg {
//       img {
//         height: 100%;
//         width: 100%;
//       }
//       .wish-bg {
//         display: inline-block;
//         width: 100%;
//         height: 35px;
//         position: absolute;
//         bottom: 0;
//         background-image: -webkit-linear-gradient(
//           top,
//           rgba(77, 77, 77, 0),
//           #000
//         );
//         background-image: linear-gradient(-180deg, rgba(77, 77, 77, 0), #000);
//       }
//       .wish {
//         position: absolute;
//         left: 4px;
//         bottom: 2px;
//         color: #faaf00;
//         font-size: 11px;
//         font-weight: 600;
//         .wish-num {
//           position: absolute;
//           left: 4px;
//           bottom: 2px;
//           color: #faaf00;
//           font-size: 11px;
//           font-weight: 600;
//         }
//       }
//       .toggle-wish {
//         width: 28px;
//         line-height: 28px;
//         background: rgba(61, 63, 71, 0.6);
//         text-align: center;
//         border-bottom-right-radius: 10px;
//         position: absolute;
//         top: 0;
//         left: 0;
//       }
//     }

//     .name {
//       margin: 0;
//       font-size: 12px;
//       color: #222;
//       margin-bottom: 3px;
//     }
//     .line-ellipsis {
//       text-overflow: ellipsis;
//       overflow: hidden;
//       white-space: nowrap;
//     }

//     .date {
//       margin: 0;
//       font-size: 12px;
//       color: #999;
//     }
//   }
// }
</style>


