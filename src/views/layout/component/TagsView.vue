<template>
  <div class="tags-view-container">
      <router-link ref="tag" class="tags-view-item" v-for="tag in Array.from(visitedViews)" :key="tag.path" :to="tag.path">
        <el-tag closable :type="isActive(tag)?'primary':'info'" @close='closeSelectedTag(tag,$event)'>
         {{tag.name}}
       </el-tag>
      </router-link>
  </div>
</template>
<script>
  export default {
    name: 'tagsView',
    components: {},
    data() {
      return {
        left: 0,
        top: 0,
        selectedTag: {}
      }
    },
    computed: {
      visitedViews() {
        return this.$store.state.tagsView.visitedViews;
      }
    },
    watch: {
      $route() {
        this.addViewTags();
        this.moveToCurrentTags();
      }
    },
    mounted() {
      this.addViewTags()
    },
    methods: {
      isActive(path) {
        return path.name === this.$route.name;
      },
      generateViewTag() {
        if(this.$route.name) {
          return this.$route;
        }
        return false;
      },
      addViewTags () {
        const route = this.generateViewTag();
        if(!route) return false;
        this.$store.dispatch('addVisitedViews', route);
      },
      moveToCurrentTags () {
        const tags = this.$refs.tag;
        this.$nextTick(() => {
          for (const tag of tags) {
            if (tag.to.path === this.$route.path) {
              // this.$refs.scrollPane.moveToTarget(tag.$el)
              break
            }
          }
        })
      },
      closeSelectedTag (view, $event) {
        this.$store.dispatch('delVisitedViews', view).then((views) => {
          if(this.isActive(view)) {
            const lastestView = views.splice(-1)[0];
            if(lastestView) {
              this.$router.push(lastestView);
            } else {
              this.$router.push('/layout');
            }
          }
        })
        $event.preventDefault()
      }
    }

  }

</script>
<style lang="stylus" scoped>
.tags-view-container{
  width: 100%;
  height: 40px;
  background #efefef;
  border-radius 4px
  display: flex;
  align-items center
  /*overflow-x auto*/
  z-index：20；
  .tags-view-item{
    margin-left: 10px;
  }
}
</style>
