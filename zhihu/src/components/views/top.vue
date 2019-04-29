<template>
  <div class="wrapper">
    <div class="left">
      <span class="iconfont icon-caidan"></span>
      <span class="shouye">首页</span>
    </div>
    <div class="right">
      <span class="iconfont icon-xiaoxitongzhitixinglingshenglingdang-xianxing"></span>
      <span class="iconfont icon-dashujukeshihuaico-"></span>
    </div>
    <div class="left">
      <div>111</div>
      <span class="iconfont icon-caidan"></span>
      <span class="shouye">首页</span>
    </div>
    <div class="right">
      <span class="iconfont icon-xiaoxitongzhitixinglingshenglingdang-xianxing"></span>
      <span class="iconfont icon-dashujukeshihuaico-"></span>
    </div>
    <div>111</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/index.styl';

.wrapper {
  width: 100vw;
  height: 0.8rem;
  background: #00a2ed;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  overflow: hidden;

  .left {
    float: left;
    padding-left: 0.3rem;
  }

  .right {
    float: right;
    padding-right: 0.3rem;
  }

  .shouye {
    font-size: 0.4rem;
    color: #fff;
    line-height: 0.8rem;
  }

  span {
    font-size: 0.5rem;
    color: #fff;
    line-height: 0.8rem;
    padding-left: 0.3rem;
  }
}
</style>
