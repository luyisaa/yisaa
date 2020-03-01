<template>
  <section class="main-wrapper">
    <transition name="fade-transition" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key"></router-view>
      </keep-alive>
    </transition>
  </section>
</template>
<script>
export default {
  name: 'appMain',
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    },
    key () {
      return this.$route.fullPath;
    }
  }
}
</script>
<style scoped>
  .main-wrapper{
    position: relative;
    min-height: calc(100vh - 84px); /*84 = navbar + tags-view = 50 +34 */
    overflow: hidden;
  }
</style>
