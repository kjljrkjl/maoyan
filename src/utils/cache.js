import Vue from "vue";

const KEY = "keywords"
const CITY = "historycities"
var cache = {
    add: function (keyword, val) {

        if (!keyword) {
            return;
        }
        let KEY = "keywords";
        let list = [];
        //判断一下localStorage是否存在，因为早期浏览器可能不支持 localStorage 
        console.log(localStorage.getItem(KEY))
        if (!localStorage.getItem(KEY)) {
            list.push(keyword);
            console.log(list);
            localStorage.setItem(KEY, JSON.stringify(list))
        } else {
            let list = [];
            list = JSON.parse(localStorage.getItem(KEY))
            list.push(keyword);
            localStorage.setItem(KEY, JSON.stringify(list))
        }
    },
    get: function () {
        // console.log(JSON.parse(localStorage.getItem(KEY)))
        return JSON.parse(localStorage.getItem(KEY))
    },
    del: function (index) {
        let list = [];
        list = JSON.parse(localStorage.getItem(KEY));
        console.log(list)
        list.forEach((item, i) => {
            if (i == index) {

                list.splice(i, 1);

            }
        })

    },
    addCity: function (keyword,val) {
        if (!keyword) {
            return;
        }
        let list = [];
        if (localStorage.getItem(CITY)) {
            list = JSON.parse(localStorage.getItem(CITY));
        }
        let rs = false;
        list.forEach((item)=>{
            if (item.id == keyword.id ) {
                rs=true;
            }
        })
        if (!rs) {
            list.push(keyword);
        }
        localStorage.setItem(CITY,JSON.stringify(list));

    }

}

var maoyanPlugin = {
    install(vue) {
        vue.prototype.$cache = cache;
    },

}
Vue.use(maoyanPlugin);