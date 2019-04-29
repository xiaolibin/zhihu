<template>
  <div class="wrapper">
    
   <link rel="stylesheet" href="cssa">
   <div v-html="json"></div>
   <div class="qw" :style="{background:'url('+img+')'+'50% 50%/412px 402px no-repeat'}"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import API from '../../common/js/api.js'
export default {
  components: {},
  props: {},
  data () {
    return {
        json:'',
        cssa:'',
        img:''
    };
  },
  watch: {},
  computed: {},
  methods: {
 
  },
  mounted () {
     console.log(this.$route.params.id)
      this.$http({
         url:API.xq+this.$route.params.id 
      }).then(res=>{
           this.json=res.data.body;
           this.cssa=res.data.css;
           this.img=res.data.image;
          console.log(res.data)
      })
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/index.styl'
.wrapper{
    position relative
}
.qw{
    background-img 100vw 200px;
    width 100vw;
    height 200px;
    position absolute;
    top 0
}
.content p {
    font-size 0.3rem
}
</style>
