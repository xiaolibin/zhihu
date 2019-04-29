<template>
  <div class="wrapper" >
    <mt-swipe :auto="4000" class="box">
      <mt-swipe-item v-for="(item,index) in arr" :key="index">
        <div @touchend="toXq(item.id)">
        <img class="img" :src="item.image" alt>
        <h3 class="text">{{item.title}}</h3>
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <div class="tit">
      <h4>今日热闻</h4>
    </div>
    <div>
      <div class="news" v-for="(items,indexs) in ar" :key="indexs" @touchend="toXq(items.id)">
        <p class="test">{{items.title}}</p>
        <img class="img1" :src="items.images" alt>
        <span class="iconfont icon-gengduotupian">多图</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/api.js";
export default {
  components: {},
  props: {},
  data() {
    return {
      arr: [],
      ar: []
    };
  },
  watch: {},
  computed: {},
  methods: {
   toXq(id) {
     this.$router.push(`/xq/${id}`)
     console.log(id)
   }
  },
  mounted() {
    this.$http({
      url: API.cont
    }).then(res => {
      console.log(res);
      this.arr = res.data.top_stories;
      this.ar = res.data.stories;
      console.log(res.data.top_stories);
    });
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/index.styl';

.wrapper {
  background: #f3f3f3;
  width: 100vw;
  overflow hidden
  
}

.box {
  height: 4.5rem;
  background: #765253;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.img {
  width: 100vw;
  height: 4.5rem;
}

.text {
  font-size: 0.35rem;
  color: #fff;
  position: absolute;
  bottom: 0.5rem;
  left: 0.3rem;
}

.tit {
  width: 100vw;
  height: 0.7rem;
  background: #f3f3f3;
  margin-left: 0.3rem;
}

.tit h4 {
  color: #333;
  line-height: 0.7rem;
}

.news {
  width: 95vw;
  height: 2rem;
  background: #fff;
  position: relative;
  border: 0.01rem solid #f3f3f3;
  box-shadow: 0 0.01rem;
  margin: 0 0.17rem;
  margin-bottom: 0.2rem;
}

.test {
  padding-left: 0.25rem;
  padding-top: 0.25rem;
  font-size: 0.3rem;
  width 65%;
  float left 
}

.img1 {
  width: 1.5rem;
  height: 1.5rem;
  background: red;
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;
}

.iconfont {
  font-size: 0.2rem;
  position: absolute;
  bottom: 0.3rem;
  right: 0.3rem;
  color: #fff;
}
</style>
