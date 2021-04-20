export default {
  data(){
    return {
      mix:1,
      mix2:2
    }
  },
  created() {
    console.log('created:',this.mix2)
    this.getData();
    },
  methods:{
    getData(){
      this.mix = 233
      console.log('mix1111')
    },
    selectPage(){
      console.log('slectpage')
    }
  }
}
