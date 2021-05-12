<template>
	<div>
		<div id="biao" style="width:600px;height:300px;"></div>
	</div>
</template>

<script>
	//	在这里引入echarts进行尝试
	import echarts from 'echarts'
	export default {
		name: 'News',
		methods: {
			//	实例化echarts对象
			getData: function() {
				//	获取页面中的echarts的div
				var myChart = echarts.init(document.getElementById('biao'));

				//	echarts图标的设置
				myChart.setOption({
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
    }]
});
			}
		},
		mounted: function() {
			//	自动调用echarts的实例化函数
			this.getData();
		}
	}
</script>

<style>

</style>
