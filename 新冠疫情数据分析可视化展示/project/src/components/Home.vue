<template>
  <el-container>
    <el-table :data="area">
      <el-table-column prop="name" label="地区" color="#333"></el-table-column>
      <el-table-column prop="total.nowConfirm" label="现有"></el-table-column>
      <el-table-column prop="total.confirm" label="累计"></el-table-column>
      <el-table-column prop="total.heal" label="治愈"></el-table-column>
      <el-table-column prop="total.dead" label="死亡"></el-table-column>
    </el-table>
  </el-container>
</template>
// v-for="item in areas" :key="item.label" :value="item.value"   {{item.name}}
<script>
import axios from 'axios'
export default {
  name: 'china',
  data() {
    return {
      area: [],
    }
  },
  methods: {
    getData: function () {
      var _this = this
      axios({
        url: 'http://localhost:3000/disease',
        method: 'get',
      }).then(function (res) {
        _this.area = JSON.parse(
          JSON.parse(res.data.body).data
        ).areaTree[0].children
      })
    },
  },
  mounted() {
    this.getData()
  },
}
</script>

<style>
.el-table {
  padding: 0 50px;
  overflow: scroll;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
  background-color: white;
  width: 0 !important;
}
</style>