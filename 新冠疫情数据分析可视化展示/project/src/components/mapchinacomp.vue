<template>
	<div class="hello">
	<div ref='mapbox' style='height:500px;width:700px'></div> 
	</div>
</template>

<script>

	import echarts from 'echarts'
	import 'echarts/map/js/china.js'
	import jsonp from 'jsonp'

	const option = {
		series: [{
			name: "确诊人数",
			type: 'map',
			map: 'china',
			label: {
				show: true,
				color: '#333',
				fontSize: 10
			},
			itemStyle: {
				areaColor: '#eee',

			},
			roam: true,
			zoom: 1.2,
			emphasis: {
				label: {
					color: '#fff',
					fontSize: 12
				},
				itemStyle: {
					areaColor: '#83b5e7'
				}
			},
			data: []
		}],
		visualMap: [{
			type: 'piecewise',
			show: true,

			pieces: [{
					min: 10000
				},
				{
					min: 1000,
					max: 9999
				},
				{
					min: 100,
					max: 999
				},
				{
					min: 10,
					max: 99
				},
				{
					min: 1,
					max: 9
				}
			],
			inRange: {
				symbol: 'rect',
				color: ['#ffc0b1', '#9c0505']
			},
			itemWidth: 20,
			itemHeight: 10
		}],
		tooltip: {
			trigger: 'item'
		},
		toolbox: {
			show: true,
			orient: 'vertical',
			left: 'right',
			top: 'center',
			feature: {
				saveAsImage: {}
			}
		},
	};
	export default {
		// name: 'ChinaMap',
		mounted() {
			this.getData();
			this.mychart = echarts.init(this.$refs.mapbox);
			this.mychart.setOption(option);
		},
		methods: {
			getData() {
				jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427', {}, (err, data) => {
					if (!err) {
						console.log(data);
						let list = data.data.list.map(item => ({
							name: item.name,
							value: item.value
						}))
						console.log(list);
						option.series[0].data = list;
						this.mychart.setOption(option);

					}
				})
			}
		}
	}


</script>

<style>

		h3 {
		margin: 40px 0 0;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	li {
		display: inline-block;
		margin: 0 10px;
	}

	a {
		color: #42b983;
	}
</style>
