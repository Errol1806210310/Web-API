<template>
	<div id="app">
		<el-container>
			<el-aside width="200px">
				<el-col>
					<el-menu :router="bol" default-active="/" class="el-menu-vertical-demo" @open="handleOpen"
						@close="handleClose" background-color="#fff" text-color="#1A5E8B" active-text-color="#5EBAF2">
						<el-menu-item index="999">
						</el-menu-item>
						<el-menu-item index="/mapchinacomp">
							<i class="el-icon-s-home"></i>
							<span slot="title">中国疫情</span>
						</el-menu-item>						
						<el-menu-item index="/Home">
							<i class="el-icon-tickets"></i>
							<span slot="title">数据统计</span>
						</el-menu-item>
						<el-menu-item index="/Table">
							<i class="el-icon-pie-chart"></i>
							<span slot="title">各地疫情</span>
						</el-menu-item>
						<el-menu-item index="/aaa">
							<i class="el-icon-data-analysis"></i>
							<span slot="title">图表显示</span>
						</el-menu-item>
						<el-menu-item index="/Search">
							<i class="el-icon-message"></i>
							<span slot="title">相关资讯</span>
						</el-menu-item>
						<el-menu-item index="/Fy">
							<i class="el-icon-first-aid-kit"></i>
							<span slot="title">防疫须知</span>
						</el-menu-item>
					</el-menu>
				</el-col>
			</el-aside>
			<el-container>
				<el-header style="padding:0px;">
					<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"
						@select="handleSelect" background-color="#fff" text-color="#1A5E8B" active-text-color="#5EBAF2">
						<el-menu-item index="1">新冠疫情防控可视化</el-menu-item>
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
				bol: true
			}
		},
		components: {

		},
		beforeMount() {

		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}
		}
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
		color: #333;
		text-align: center;
		line-height: 60px;
	}
</style>
