<template>
  <div class="img-container">
    <img-view style="width:80%;height:80%;position:absolute;" :imgUrl="imgUrl" background="#000"></img-view>
  </div>
</template>

<script>
  import ImgView from 'components/ImgView/index.vue'
  export default {
    name: 'img_view_demo',
    components: { ImgView },
    data () {
      return {
        // imgUrl: 'http://n.sinaimg.cn/ent/transform/w630h945/20171228/Uu4x-fypyuvc9834765.jpg'
        imgUrl: require('assets/img/img_' + Math.floor(Math.random() * 8 + 1) + '.jpg')
      }
    }
  }
</script>

<style>
  .img-container {

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
