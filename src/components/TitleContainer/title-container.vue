<template>
  <div class="basic-wrapper">
    <div class="title-wrapper">{{title}}</div>
      <slot></slot>
  </div>

</template>
<script>
  export default {
    name: 'title-container',
    props: {
      title: {
        type: String,
        default(){
          return ''
        }

      }
    },
    data() {
      return {

      }
    }
  }
</script>
<style scoped lang="stylus">
  .basic-wrapper {
    width: 100%;
    height: auto;
    .title-wrapper {
      width: 100%
      height: 40px;
      font-size 20px;
      font-weight bold;
      line-height 2;
      border-bottom 1px #ccc solid
    }
  }
</style>
