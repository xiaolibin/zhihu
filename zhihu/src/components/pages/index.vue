<template>
  <div class="wrapper">
   <v-top></v-top> 
   <v-cont></v-cont>
  </div>
</template>

<script type="text/ecmascript-6">
import t from '../views/top'
import cont from '../views/cont'
export default {
  components: {
      'v-top':t,
      'v-cont':cont
  },
  props: {},
  data () {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted () {}
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/index.styl'
.wrapper{}
</style>
