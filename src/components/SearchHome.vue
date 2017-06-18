<template>
  <div class="search-home">
    <el-input placeholder="Your search" v-model="query">
      <el-select v-model="select" slot="prepend" placeholder="Select" style="width: 110px">
        <el-option label="Title" value="1"></el-option>
        <el-option label="Description " value="2"></el-option>
        <el-option label="User" value="3"></el-option>
      </el-select>
      <el-button slot="append" icon="search"></el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'search-home',
  data () {
    return {
      query: '',
      select: ''
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>
.search-home {
  margin: 15px
}

.el-select .el-input {
  width: 110px;
}
</style>
