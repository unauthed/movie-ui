<template>
  <div class="login-home">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
      <el-form-item label="Login" prop="login">
        <el-input type="text" v-model="ruleForm.login" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="ruleForm.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'login-home',
    data () {
      return {
        ruleForm: {
          login: '',
          password: ''
        },
        rules: {
          login: [
            { required: true, message: 'Please input your login name', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please input your password', trigger: 'change' },
            { min: 3, max: 42, message: 'Length should be 8 to 42 characters', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
</style>
