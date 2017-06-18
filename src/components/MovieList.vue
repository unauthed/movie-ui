<template>
  <div class="movie-list">
    <el-table
      ref="multipleTable"
      :data="movies"
      row-key="scope.row.title"
      max-height="440"
      stripe>
      <el-table-column
        type="expand"
        width="35">
        <template scope="props">
          <p>{{ props.row.description }}</p>
          <div style="float:right;"><strong>Movie submitted by {{ props.row.user }}</strong></div>
        </template>
      </el-table-column>
      <el-table-column
        prop="title"
        label="Title"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="ratings"
        label="Rating"
        width="170">
        <template scope="scope">
          <el-rate
            v-model="scope.row.ratings"
            disabled>
          </el-rate>
        </template>
      </el-table-column>
      <el-table-column
        prop="created"
        label="Date"
        width="120">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>Created: {{ scope.row.created | formatDateTime}}</p>
            <p>Updated: {{ scope.row.updated | formatDateTime}}</p>
            <div slot="reference" class="name-wrapper">
              {{ scope.row.updated | formatDate }}
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="Operations"
        width="150">
        <template scope="scope">
          <el-button
            size="small"
            type="primary"
            @click="editDialogVisible = true">Edit</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    &nbsp;
    <el-pagination
      layout="total, prev, pager, next"
      @current-change="handleCurrentChange"
      :current-page="pages.number"
      :page-size="pages.size"
      :total="pages.totalElements">
    </el-pagination>

    <el-dialog title="Movie" :visible.sync="editDialogVisible">
      <el-form :model="form">
        <el-form-item label="Title" :label-width="formLabelWidth">
          <el-input v-model="form.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Description" :label-width="formLabelWidth">
          <el-input v-model="form.description" type="textarea" :autosize="{ minRows: 2, maxRows: 6}"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="editDialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'movie-list',
  data () {
    return {
      editDialogVisible: false,
      form: {
        title: '',
        description: ''
      },
      formLabelWidth: '120px'
    }
  },
  computed: mapGetters({
    movies: 'movies',
    links: 'links',
    pages: 'pages'
  }),
  methods: {
    handleCurrentChange (val) {
      console.log(`current page: ${val}`)
    },
    handleEdit (index, row) {
      // todo
    },
    handleDelete (index, row) {
      this.$confirm('This will permanently delete the movie. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Delete completed'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        })
      })
    }
  },
  created () {
    this.$store.dispatch('fetchMovies')
  }
}
</script>
