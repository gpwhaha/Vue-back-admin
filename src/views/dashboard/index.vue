<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
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
  created() {
    this.selectPage()
  },
  methods:{},
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
