<template>
  <div id="app">
    <!--    如果要修改他的样式，可以使用.el-container-->
    <el-container>
      <el-aside width="200px">
        <el-col>
          <el-menu
            :router="bol"
            default-active="/"
            class="el-menu-vertical-demo"
            background-color="#3d5f81"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="/statistics">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <!-- 有下级菜单的菜单项 -->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-tools"></i>
                <span>系统管理</span>
              </template>
              <!-- 一组菜单项 -->
              <el-menu-item-group>
                <el-menu-item index="/menu">菜单管理</el-menu-item>
                <el-menu-item index="/role">角色管理</el-menu-item>
                <el-menu-item index="/admin">管理员管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-menu-item index="999"></el-menu-item>
            <el-menu-item index="/">
              <i class="el-icon-menu"></i>
              <span slot="title">表格汇总</span>
            </el-menu-item>
            <el-menu-item index="/echarts">
              <i class="el-icon-menu"></i>
              <span slot="title">图表展示</span>
            </el-menu-item>
            <el-menu-item index="/search">
              <i class="el-icon-document"></i>
              <span slot="title">搜索详细</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <el-header style="padding:0px;">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">武汉工程大学数媒1班XXX</el-menu-item>
            <el-menu-item index="2">数字化可视系统</el-menu-item>
          </el-menu>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 引入axios
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      availHeight: 0,
      activeIndex2: '1',
      bol: true,
    }
  },
  components: {},
  beforeMount() {
    axios({
      url: 'http://localhost:3000/list_total',
      method: 'get',
    }).then(function () {
      //  console.log(JSON.parse(res.data.body));
    })
    /*
     *
     *    医疗
     *
     *    国内疫苗
     * */
    axios({
      url: 'http://localhost:3000/disease',
      method: 'get',
    }).then(function (res) {
      console.log(JSON.parse(JSON.parse(res.data.body).data))
    })
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style>
body,
html {
  margin: 0px;
  height: 100%;
}
#app,
.el-container,
.el-aside,
.el-col,
.el-menu {
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
