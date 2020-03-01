<template>
  <div class="app-container">
    <switch-roles @change="pageRolesChange"></switch-roles>
  </div>
</template>

<script>
  import SwitchRoles from './component/SwitchRoles'

  export default {
    name: 'authority',
    components: { SwitchRoles },
    methods: {
      pageRolesChange() {
        this.$router.push({path: '/permission/index?' + new Date()})
      }
    }
  }
</script>
<style>

</style>
