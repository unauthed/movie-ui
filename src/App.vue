<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <el-menu theme="dark" mode="horizontal" router @select="handleSelect">
          <el-menu-item index="/"><span class="site-name">Vue Film</span></el-menu-item>
          <el-menu-item index="/movies">Movies</el-menu-item>
          <el-menu-item index="/search">Search</el-menu-item>
          <el-submenu index="4">
            <template slot="title">API</template>
            <el-menu-item index="4-1"><a href="http://localhost:9090/index.html" target="_blank">Movies Introduction</a></el-menu-item>
            <el-menu-item index="4-2"><a href="http://localhost:9090/api-guide.html" target="_blank">Movies Guide</a></el-menu-item>
          </el-submenu>
          <el-menu-item index="/login" style="float:right;">Login</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>

    <router-view></router-view>

    <el-row  class="footer">
      <el-col :span="12" :offset="6">Movie data from IMDB, the rest unauthed 401 &mdash; Copyleft'over 2017</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
body {
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    overflow: auto;
}

a {
  text-decoration: none;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.site-name {
  font-size: 18px;
  color: #EFF2F7;
}

.footer {
  font-size: 12px;
  text-align: center;
  padding: 10px 0;
  color: #d3dce6;
  background: #99a9bf;
}
</style>
