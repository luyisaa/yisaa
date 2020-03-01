<template>
  <div class="pan-item" :style="{zIndex:zIndex,width:width,height:height}">
    <div class="pan-info">
      <div class="pan-info-roles-container">
        <slot></slot>
      </div>
    </div>
    <img class="pan-thumb" :src="image"/>
  </div>
</template>
<script>
  export default {
    name: 'panThumb',
    props: {
      zIndex: {
        type: Number,
        default() {
          return 100
        }
      },
      width: {
        type: String,
        default() {
          return '150px'
        }
      },
      height: {
        type: String,
        default() {
          return '150px'
        }
      },
      image: {
        type: String,
        required: true,
        default() {
          return ''
        }
      }
    }

  }
</script>
<style scoped lang="stylus">
  .pan-item {
    width: 200px
    height 200px
    border-radius 50%
    display inline-block
    position relative
    cursor: default
    box-shadow 0 1px 3px rgba(0, 0, 0, 0.2)
    .pan-info {
      position absolute
      overflow hidden
      width inherit
      height inherit
      border-radius 50%
      box-shadow inset 0 0 0 5px rgba(0, 0, 0, 0.05)
      .pan-info-roles-container {
        padding 20px
        text-align center
      }
      h3{
        color: #fff;
        text-transform: uppercase;
        position: relative;
        letter-spacing: 2px;
        font-size: 18px;
        margin: 0 60px;
        padding: 22px 0 0 0;
        height: 85px;
        font-family: 'Open Sans', Arial, sans-serif;
        text-shadow: 0 0 1px #fff, 0 1px 2px rgba(0, 0, 0, 0.3);
      }
      p{
        color: #fff;
        padding: 10px 5px;
        font-style: italic;
        margin: 0 30px;
        font-size: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
      }
      & p a {
        display: block;
        color: #333;
        width: 80px;
        height: 80px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        color: #fff;
        font-style: normal;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 9px;
        letter-spacing: 1px;
        padding-top: 24px;
        margin: 7px auto 0;
        font-family: 'Open Sans', Arial, sans-serif;
        opacity: 0;
        transition: transform 0.3s ease-in-out 0.2s, opacity 0.3s ease-in-out 0.2s, background 0.2s linear 0s;
        transform: translateX(60px) rotate(90deg);
        &:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      }
    }
    .pan-thumb {
      position absolute
      left: 0
      width: 100%
      height: 100%
      overflow hidden
      border-radius 50%
      background-size 100%
      transform-origin 95% 40%
      transition: all 0.3s ease-in-out;
      &:after {
        content: ''
        width: 8px
        height 8px
        top: 40%
        left: 95%
        margin -4px 0 0 -4px
        background radial-gradient(ellipse at center, rgba(14, 14, 14, 1) 0%, rgba(125, 125, 125, 1) 100%)
        box-shadow 0 0 1px rgba(255, 255, 255, 0.9)
      }
    }
    &:hover .pan-thumb{
      transform rotate(-100deg)
      & p a {
      opacity 1
      transform translateX(0px) rotate(0deg)
      }
    }
  }

</style>
