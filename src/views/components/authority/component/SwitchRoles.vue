<template>
  <div>
    <div>
      Your Roles: {{role}}
    </div>
    Switch Roles
    <el-radio-group v-model="pageRoles">
      <el-radio-button label="admin"></el-radio-button>
      <el-radio-button label="editor"></el-radio-button>
    </el-radio-group>
  </div>
</template>
<script>
  export default {
    name: 'switch-roles',
    computed: {
      role() {
        return this.$store.getters.roles
      },
      pageRoles: {
        get() {
          return this.role[0]
        },
        set(val) {
          this.$store.dispatch('ChangeRole', val).then(() => {
            this.$emit('change')
          })
        }
      }
    }
  }

</script>
<style scoped>

</style>
