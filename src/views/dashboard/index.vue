<template>
  <div class="dashboard-container">
    <div class="dashboard-text" v-model="count" v-check="{count}">name: {{ name }}</div>
    <div @click="updata">++++</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import mixn from "@/common/mixn";
export default {
  name: 'Dashboard',
  mixins:[mixn],
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  data(){
    return{
      count:1
    }
  },
  created() {
    this.selectPage()
  },
  methods:{
    updata(){
      this.count += 1
    }
  },
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
