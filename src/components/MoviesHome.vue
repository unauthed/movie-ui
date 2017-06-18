<template>
  <div class="movies-home">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-menu mode="vertical" default-active="1">
          <el-menu-item-group title="Movie Listing">
            <el-menu-item index="1"><i class="el-icon-document"></i>As Table</el-menu-item>
            <el-menu-item index="2"><i class="el-icon-document"></i>As Cards</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Movie Operations">
            <el-menu-item index="3">Add Movie</el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <movie-list></movie-list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MovieList from '@/components/MovieList'

export default {
  name: 'movies-home',
  components: {
    MovieList
  }
}
</script>
