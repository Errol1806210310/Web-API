<template>
	<div>
		<div style="color: #000000;
		font-size: x-large;
		text-align: center;">国内疫情统计数据</div>
		<el-container>
			<el-main>
				<el-row>
				</el-row>
				<el-row>
					<el-table :data="add" style="width: 100%">
						<el-table-column prop="confirm" label="累计确诊">
						</el-table-column>
						<el-table-column prop="dead" label="死亡病例">
						</el-table-column>
						<el-table-column prop="importedCase" label="境外输入病例">
						</el-table-column>
						<el-table-column prop="localConfirm" label="本地确诊病例">
						</el-table-column>
						<el-table-column prop="noInfect" label="无症状感染者">
						</el-table-column>
						<el-table-column prop="nowConfirm" label="现在确诊人数">
						</el-table-column>
					</el-table>
				</el-row>
				<div style="padding-top: 3.125rem;">
					<el-row>
						<el-col :span="24">
							<div style="width:100%;height:300px;" id="zhu"></div>
						</el-col>
					</el-row>
				</div>
			</el-main>
		</el-container>
		<div style="color: #000000;
		text-align: center;">近七天数据统计</div>
	</div>
</template>

<script>
	import axios from "axios";
	import * as echarts from 'echarts';
	export default {
		// name: "Home",
		data() {
			return {
				total: {},
				add: [],
				addarr: [],
				addnum: []
			}
		},
		methods: {
			getData: function() {
				var _this = this;
				axios({
					url: 'http://localhost:3000/disease',
					method: 'get'
				}).then(function(res) {
					// console.log(JSON.parse(JSON.parse(res.data.body).data));
					_this.total = JSON.parse(JSON.parse(res.data.body).data).chinaTotal;
					_this.add = [JSON.parse(JSON.parse(res.data.body).data).chinaAdd];
					var addObj = JSON.parse(JSON.parse(res.data.body).data).chinaAdd;
					var addarr = [];
					var addnum = []
					//  对象的遍历
					//  在遍历之前，需要检查右边是不是对象
					//  这种写法对后台的数据要求非常严格
					for (var item in addObj) {
						addarr.push(item);
						addnum.push(addObj[item]);
					}
					_this.addarr = addarr;
					_this.addnum = addnum;
					_this.drawZhu();
				})
			},
			drawZhu: function() {
				// var _this = this;
				var myChart = echarts.init(document.getElementById('zhu'));
				myChart.setOption({
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['累计确诊', '死亡病例', '境外输入病例', '本地确诊病例', '无症状感染者', '现在确诊人数']
					},
					grid: {
						top: '15%',
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['3.26', '3.27', '3.28', '3.29', '3.30', '3.31', '4.1']
					},
					yAxis: [{
						type: 'value',
						scale: true,
						max: 50,
						min: 0,
						splitNumber: 5,
						boundaryGap: [0.2, 0.2]
					}],
					series: [{
							name: '累计确诊',
							type: 'line',
							stack: '总量',
							data: [30, 30, 32, 33, 34, 34, 34]
						},
						{
							name: '死亡病例',
							type: 'line',
							stack: '总量',
							data: [0, 0, 0, 0, 0, 0, 0]
						},
						{
							name: '境外输入病例',
							type: 'line',
							stack: '总量',
							data: [3, 3, 4, 5, 5, 7, 10]
						},
						{
							name: '本地确诊病例',
							type: 'line',
							stack: '总量',
							data: [5, 5, 5, 5, 5, 5, 6]
						},
						{
							name: '无症状感染者',
							type: 'line',
							stack: '总量',
							data: [37, 38, 38, 39, 40, 40, 42]
						},
						{
							name: '现在确诊人数',
							type: 'line',
							stack: '总量',
							data: [10, 10, 12, 12, 13, 13, 14]
						}
					]
				})
			}
		},
		mounted() {
			this.getData();
		}
	}
</script>
<style scoped>
</style>
