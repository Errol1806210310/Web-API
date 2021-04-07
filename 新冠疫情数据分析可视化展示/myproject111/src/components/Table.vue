<template>
	<el-container>
		<el-header>
			<el-row>
				<el-col :span="12">
					<el-select @change="changePro()" v-model="value" placeholder="请选择">
						<el-option v-for="(item,index) in pro" :key="item.name" :value="index" :label="item.name">
						</el-option>
					</el-select>
				</el-col>
				<el-col :span="12">
					<el-select @change="changeCity()" v-model="cityVal" placeholder="请选择">
						<el-option v-for="(item,index) in this.city.children" :key="item.name" :value="index"
							:label="item.name">
						</el-option>
					</el-select>
				</el-col>
			</el-row>
		</el-header>
		<el-main>
			<el-row>
				<el-col :span="12">
					<div id="zhu" style="width:500px;height:600px;"></div>
				</el-col>
				<el-col :span="12">
					<div id="bing" style="width:600px;height:600px;"></div>
				</el-col>
			</el-row>
		</el-main>
	</el-container>
</template>

<script>
	import axios from "axios";
	import * as echarts from "echarts";

	export default {
		data() {
			return {
				tableData: [],
				value: '',
				pro: [],
				cityVal: '',
				city: {},
				cityarr: [],
				citynum: [],
				cityObj: []
			}
		},
		methods: {
			changePro: function() {
				this.city = this.pro[this.value]
			},
			changeCity: function() {
				console.log(this.city.children[this.cityVal]);
				var cityarr = [];
				var citynum = [];
				var cityobj = []
				for (var item in this.city.children[this.cityVal].total) {
					cityarr.push(item);
					citynum.push(this.city.children[this.cityVal].total[item]);
					cityobj.push({
						name: item,
						value: this.city.children[this.cityVal].total[item] + 5
					})
				}
				this.cityarr = cityarr;
				this.citynum = citynum;
				this.cityObj = cityobj;
				console.log(cityobj);
				this.drawZhu();
				this.drawBing();
			},
			drawZhu: function() {
				var _this = this;
				var myChart = echarts.init(document.getElementById('zhu'));
				myChart.setOption({
					xAxis: {
						type: 'category',
						data: _this.cityarr
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: _this.citynum,
						type: 'bar',
						showBackground: true,
						backgroundStyle: {
							color: 'rgba(180, 180, 180, 0.2)'
						}
					}]
				})
			},
			drawBing: function() {
				var _this = this;
				var myChart = echarts.init(document.getElementById('bing'));
				myChart.setOption({
					title: {
						text: '当前城市疫情',
						subtext: '123',
						left: 'center'
					},
					tooltip: {
						trigger: 'item'
					},
					legend: {
						orient: 'vertical',
						left: 'left',
					},
					series: [{
						name: '详情',
						type: 'pie',
						radius: '50%',
						data: _this.cityObj,
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				})
			}
		},
		mounted() {
			var _this = this;
			axios({
				url: 'http://localhost:3000/disease',
				method: 'get'
			}).then(function(res) {
				_this.pro = JSON.parse(JSON.parse(res.data.body).data).areaTree[0].children;
			})
		}
	}
</script>
