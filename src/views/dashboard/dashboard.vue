<template>
  <div class="dashboard">
    <component :is="currentPage"></component>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import adminDashboard from './admin/admin'
  import editorDashBoard from './editor/editor'
  export default {
    name: 'dashboard',
    components: { adminDashboard, editorDashBoard },
    data() {
      return{
        currentPage: 'adminDashboard'
      }
    },
    computed: {
      ...mapGetters([
        'roles'
      ])
    },
    created() {
      if(!this.roles.includes('admin')) {
        this.currentPage = 'editorDashBoard'
      }
    }
  }
</script>
<style scoped>
  .dashboard{
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    color: #1f2d3d;
  }
</style>
