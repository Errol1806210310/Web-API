<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <el-col>
          <el-menu
            :router="bol"
            default-active="/"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="999"></el-menu-item>
            <el-menu-item index="/">
              <i class="el-icon-menu"></i>
              <span>主页主题</span>
            </el-menu-item>
            <el-menu-item index="/biao">
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
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">武汉工程大学</el-menu-item>
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
