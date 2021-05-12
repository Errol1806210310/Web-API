<template>
	<div class="block">
		<div class="car">
			<el-carousel class="lun_imgs" ref="carousel" @click.native="linkTo">
				<el-carousel-item class="lun_img" v-for="item in imgs" v-bind:key="item.url">
					<img class="car_img" :src="item.url" />
					<h3 class="car_text">{{ item.title }}</h3>
				</el-carousel-item>
			</el-carousel>
		</div>
		<el-divider></el-divider>

		<div id="app">
			<div class="block" style="width: 30%;float: left;">
				<el-timeline>
					<el-timeline-item timestamp="2019年12月底" placement="top">
						<el-card>
							<el-button type="text" @click="open" class="btn" multiline=true>武汉卫健委发布
								《关于做好不明原因肺炎救治工作的紧急通知》
							</el-button>
						</el-card>
						<el-card class="card">
							<el-button type="text" @click="open1" class="btn">国家卫健委专家组抵达武汉正式介入调查</el-button>
						</el-card>
					</el-timeline-item>

					<el-timeline-item timestamp="2020年1月" placement="top">
						<el-card class="card">
							<el-button type="text" @click="open2" class="btn">1月1日，国家卫健委成立疫情应对处置领导小组</el-button>
						</el-card>
						<el-card class="card">
							<el-button type="text" @click="open3" class="btn">1月8日，国家卫健委专家组确认新冠病毒为疫情病原</el-button>
						</el-card>
						<el-card class="card">
							<el-button type="text" @click="open4" class="btn">国家卫健委记者会上，钟南山证实新冠病毒“人传人”</el-button>
						</el-card>
						<el-card class="card">
							<el-button type="text" @click="open5" class="btn">武汉市封城，火神山医院开建</el-button>
						</el-card>
						<el-card class="card">
							<el-button type="text" @click="open6" class="btn">中央成立应对疫情工作领导小组</el-button>
						</el-card>
					</el-timeline-item>

					<el-timeline-item timestamp="2020年2月" placement="top">
						<el-card class="card">
							<el-button type="text" @click="open7" class="btn">湖北将集中隔离所有疑似病例</el-button>
						</el-card>
						<el-card class="card">
							<el-button type="text" @click="open8" class="btn">中央明确再增加2000名医护人员支援湖北</el-button>
						</el-card>
						<el-card class="card">
							<el-button type="text" @click="open9" class="btn">应勇任湖北省委书记，王忠林任武汉市委书记</el-button>
						</el-card>
						<el-card class="card">
							<el-button type="text" @click="open10" class="btn">教育部表示疫情没得到基本控制前不开学</el-button>
						</el-card>
					</el-timeline-item>
					<el-timeline-item timestamp="2020年3月" placement="top">
						<el-card class="card">
							<el-button type="text" @click="open11" class="btn">习近平抵武汉考察新冠肺炎疫情防控工作</el-button>
						</el-card>
					</el-timeline-item>
				</el-timeline>
			</div>
		</div>
		<div style="width:65%;float: right;">
			<el-row>
				<el-col :span="10">
					<el-card class="cd" shadow="hover">
						<img src="https://p5.img.cctvpic.com/photoworkspace/contentimg/2021/04/01/2021040120155096096.png"
							class="image">
						<div style="padding: 14px;">
							<span>全国重点省份新冠疫苗接种推进顺利</span>
							<div class="bottom clearfix">
								<el-button type="text" @click="open00">查看详情</el-button>
							</div>
						</div>
					</el-card>
				</el-col>
				<el-col :span="10">
					<el-card class="cd" shadow="hover">
						<img src="https://p4.img.cctvpic.com/photoworkspace/2021/04/01/2021040112123151071.jpg"
							class="image">
						<div style="padding: 14px;">
							<span>病毒溯源研究容不得政治操弄</span>
							<div class="bottom clearfix">
								<el-button type="text" @click="open01">查看详情</el-button>
							</div>
						</div>
					</el-card>
				</el-col>
				<el-col :span="10">
					<el-card class="cd" shadow="hover">
						<img src="https://p5.img.cctvpic.com/photoworkspace/2021/03/31/2021033120031027062.png"
							class="image">
						<div style="padding: 14px;">
							<span>中国是首个和世卫开展新冠病毒溯源研究的国家</span>
							<div class="bottom clearfix">
								<el-button type="text" @click="open02">查看详情</el-button>
							</div>
						</div>
					</el-card>
				</el-col>
				<el-col :span="10">
					<el-card class="cd" shadow="hover">
						<img src="https://p3.img.cctvpic.com/photoworkspace/2021/03/31/2021033116023913058.jpg"
							class="image">
						<div style="padding: 14px;">
							<span>追踪云南瑞丽新增本土确诊病例：已发现阳性样本9例 疫苗接种有序推进</span>
							<div class="bottom clearfix">
								<el-button type="text" @click="open03">查看详情</el-button>
							</div>
						</div>
					</el-card>
				</el-col>
				<el-col :span="10">
					<el-card class="cd" shadow="hover">
						<img src="https://p3.img.cctvpic.com/photoworkspace/2021/04/01/2021040111223178786.jpg"
							class="image">
						<div style="padding: 14px;">
							<span>疫情导致美国2020年死亡超335万人 创历史纪录</span>
							<div class="bottom clearfix">
								<el-button type="text" @click="open04">查看详情</el-button>
							</div>
						</div>
					</el-card>
				</el-col>
				<el-col :span="10">
					<el-card class="cd" shadow="hover">
						<img src="https://inews.gtimg.com/newsapp_bt/0/13174941072/1000" class="image">
						<div style="padding: 14px;">
							<span>新冠疫情还只是开始？美国专家悲观预测：下一场全球疫情或更致命</span>
							<div class="bottom clearfix">
								<el-button type="text" @click="open05">查看详情</el-button>
							</div>
						</div>
					</el-card>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Search",
		data: function() {
			return {
				imgs: [{
						url: require('../assets/全球疫情.png'),
						link: 'https://news.ifeng.com/c/special/7uLj4F83Cqm',
						title: "全球新冠肺炎疫情实时动态"
					},
					{
						url: require('../assets/云南疫情.jpg'),
						link: 'https://news.cctv.com/2021/04/01/ARTIjIEVCl1lo6bg7II6VTod210401.shtml?spm=C94212.P4YnMod9m2uD.E7v7lEZZ0WEM.3',
						title: "3月31日云南新增新冠肺炎确诊病例6例 新增无症状感染者23例"
					},
					{
						url: require('../assets/疫苗.jpg'),
						link: 'https://news.cctv.com/2021/04/01/ARTITk4NMRnxWSBb2CIL5iRY210401.shtml?spm=C94212.P4YnMod9m2uD.E7v7lEZZ0WEM.17',
						title: "新冠疫苗保护期仅半年？别让这些谣言愚弄大众"
					},
					{
						url: require('../assets/溯源.jpg'),
						link: 'https://baijiahao.baidu.com/s?id=1695834386900115863&wfr=spider&for=pc',
						title: "中国-世卫组织新冠病毒溯源联合研究报告发布科学调查击碎抹黑谎言"
					}
				]
			}
		},
		methods: {
			linkTo() {
				let activeIndex = this.$refs.carousel.activeIndex
				this.$router.push(this.imgs[activeIndex].link)
			},
			open00() {
				this.$alert(
					'国家卫生健康委今天（4月1日）表示，全国首批重点推进的14个省份及新疆生产建设兵团新冠疫苗接种推进顺利。重庆市精心组织、分片包干，通过制作《新冠疫苗接种实操手册》，明确接种机构与街镇、大型企业、学校等重点行业重点人群精准对接，在常规接种点“应开尽开”的前提下，设立大型方舱式疫苗临时接种点，扩大接种能力，重庆市目前单日可完成60万剂次接种。天津市目前已经配备了超过5000名疫苗接种医务人员并进行了专业培训，在每个接种点安排专职医师，负责健康状况询问与接种禁忌核查。截至目前，天津市医疗行业人员接种率已经达到80%，高校师生已经完成应接尽接。',
					'全国重点省份新冠疫苗接种推进顺利', {
						confirmButtonText: '关闭',
						callback: action => {
							this.$message({
								type: 'info',
								message: `action: ${ action }`
							});
						}
					});
			},
			open01() {
				this.$alert(
					'对待科学研究，必须尊重事实、秉持科学精神。公开信罔顾科学事实，肆意曲解科学结论，将科学研究政治化，这不仅背离科学、缺乏公正，而且损害全球溯源合作，扰乱全球抗疫，有可能造成更多生命消殒。病毒溯源是一项极其复杂的科学工作，事关全球公共卫生安全和数以亿计的生命安全，容不得政治操弄，也容不得伪科学家的“搅局”。（新华社发）',
					'病毒溯源研究容不得政治操弄', {
						confirmButtonText: '关闭',
						callback: action => {
							this.$message({
								type: 'info',
								message: `action: ${ action }`
							});
						}
					});
			},
			open02() {
				this.$alert(
					'新型冠状病毒溯源研究工作，一直受到国际社会高度关注。3月31日，中国—世界卫生组织新冠病毒溯源联合研究中方专家组召开发布会，就新冠病毒溯源联合研究报告有关情况，联合研究中方专家组组长梁万年、流行病学组组长冯子健、动物与环境学组组长童贻刚和分子流行病与生物信息学组组长杨运桂给予回应。通过实验室引入，被视为“极不可能”的途径；仍需在多国多地共同寻找可能成为病毒宿主的动物种类；中外双方专家一直共同分析掌握的研究信息和资料。',
					'中国是首个和世卫组织联合开展新冠病毒溯源研究的国家', {
						confirmButtonText: '关闭',
						callback: action => {
							this.$message({
								type: 'info',
								message: `action: ${ action }`
							});
						}
					});
			},
			open03() {
				this.$alert(
					'当前，云南全省各地各部门正按照“分步实施、有序推进”的原则推进疫苗接种工作，将在优先保证25个边境县、大城市以及旅游重点城市的基础上，实现18周岁及以上人群应接尽接、应种快种。下一步将以社区为单位推进接种，形成免疫屏障。同时，云南还结合实际，研究制定了针对农村边境地区的实施方案。云南省卫生健康委主任 杨洋：我们组建了多个巡回接种点，建立了对口支援的机制，内地州市和边境县市对口保障，第一时间（把疫苗）送到农村，让我们农村的老百姓能够就近就便接受安全的疫苗接种。',
					'追踪云南瑞丽新增本土确诊病例：已发现阳性样本9例 疫苗接种有序推进', {
						confirmButtonText: '关闭',
						callback: action => {
							this.$message({
								type: 'info',
								message: `action: ${ action }`
							});
						}
					});
			},
			open04() {
				this.$alert(
					'当地时间3月31日，美国政府发布的一份报告显示，新冠肺炎疫情推动美国2020年的死亡总人数超过335万人，2020年由此成为美国历史上死亡人数最多的一年。这份报告显示，2020年美国总体死亡率比2019年上升了近16%，是自2017年以来首次上升。2020年美国死亡总人数达到了3358814人，其中新冠肺炎疫情死亡人数就占了近11.3%。美国疾控中心分析称，2020年，疫情造成了美国超过37万人的死亡，新冠肺炎成为了2020年美国人口第三大死因，仅次于心脏病和癌症。',
					'疫情导致美国2020年死亡超335万人 创历史纪录', {
						confirmButtonText: '关闭',
						callback: action => {
							this.$message({
								type: 'info',
								message: `action: ${ action }`
							});
						}
					});
			},
			open05() {
				this.$alert(
					'美国疫情相当严重，全美都在努力防控疫情，目前全球确诊人数已经破亿，若是这一情况继续持续下去，可能会更加严重。新冠肺炎自从爆发后，已经给全球无数家庭带来了毁灭性伤害，尤其是对于高温人群而言，一旦他们感染上了新冠，可能会因为自身免疫能力下降，生存概率也会大大降低。目前各国都在努力防控疫情，一些国家正在给民众接种疫苗，让民众避免感染新冠病毒。不过据延边晨报社报道，美国专家悲观预测，下一场全球疫情或更致命，新冠疫情还只是开始。',
					'新冠疫情还只是开始？美国专家悲观预测：下一场全球疫情或更致命', {
						confirmButtonText: '关闭',
						callback: action => {
							this.$message({
								type: 'info',
								message: `action: ${ action }`
							});
						}
					});
			},

			open() {
				this.$alert(
					'30日，武汉市卫生健康委员会医政医管处发布《关于做好不明原因肺炎救治工作的紧急通知》。通知称，武汉市部分医疗机构陆续出现不明原因肺炎病人。通知要求各医疗机构要及时追踪统计救治情况，并按要求及时上报。（来源：央视新闻）', {
						confirmButtonText: '确定'
					});
			},
			open1() {
				this.$alert(
					'据湖北省卫健委及武汉市委宣传部消息，国家卫健委专家组31日上午已抵达武汉，正展开相关检测核实工作。（来源：央视新闻）', {
						confirmButtonText: '确定'
					});
			},
			open2() {
				this.$alert(
					'2020年1月1日，国家卫健委成立由马晓伟主任为组长的疫情应对处置领导小组，会商分析疫情发展变化，研究部署防控策略措施，及时指导、支持湖北省和武汉市开展病例救治、疫情防控和应急处置等工作。（来源：国家卫健委）', {
						confirmButtonText: '确定'
					});
			},
			open3() {
				this.$alert(
					'1月8日，国家卫健委专家组初步确认新型冠状病毒为此次疫情的病原。1月9日，病原检测结果初步评估专家组组长、中国工程院院士徐建国接受访问时表示，本次不明原因的病毒性肺炎病例的病原体初步判定为新型冠状病毒。（来源：新华网）', {
						confirmButtonText: '确定'
					});
			},
			open4() {
				this.$alert(
					'1月20日，国家卫健委组织高级别专家组召开记者会，钟南山院士在记者会上证实新冠病毒存在人传人。（来源：国家卫健委）', {
						confirmButtonText: '确定'
					});
			},
			open5() {
				this.$alert(
					'23日凌晨，武汉市新型冠状病毒感染的肺炎疫情防控指挥部发布1号通告，10时起机场、火车站离汉通道暂时关闭。上午10点，武汉封城。（来源：长江日报）作为武汉加强救治新型冠状病毒肺炎患者的重大举措，武汉决定在蔡甸知音湖武汉职工疗养院区域新建一所专门医院——武汉蔡甸火神山医院，集中收治新型冠状病毒肺炎患者。该医院参照北京小汤山的模式建设，建筑面积达2.5万平方米，可容纳1000张病床，计划在2月3日前建成。', {
						confirmButtonText: '确定'
					});
			},
			open6() {
				this.$alert(
					'1月25日农历正月初一，中共中央政治局常务委员会召开会议，会议决定，党中央成立应对疫情工作领导小组，在中央政治局常务委员会领导下开展工作。党中央向湖北等疫情严重地区派出指导组，推动有关地方全面加强防控一线工作。（来源：新华社）', {
						confirmButtonText: '确定'
					});
			},
			open7() {
				this.$alert(
					'2月2日上午，湖北省新型冠状病毒感染肺炎疫情防控指挥部召开会议时表示，当前，全省防控形势依然极为严峻，要做实做细基层基础工作，坚决按照“四集中”要求，对所有疑似患者集中隔离。（来源：新京报）', {
						confirmButtonText: '确定'
					});
			},
			open8() {
				this.$alert(
					'2月4日，中央应对新型冠状病毒感染肺炎疫情工作领导小组召开会议，其中提出征用一批酒店场馆等收治轻症患者#或观察密切接触者，将部分三级综合医院转为定点收治医院，调集一批应急方舱医院、再增加2000名医护人员支援湖北。（来源：央视新闻）', {
						confirmButtonText: '确定'
					});
			},
			open9() {
				this.$alert(
					'2月13日，湖北省召开全省领导干部会议。中央组织部副部长吴玉良同志出席会议并宣布中央决定：王忠林同志任湖北省委委员、常委和武汉市委书记，马国强同志不再担任湖北省委副书记、常委、委员和武汉市委书记职务。（来源：南方都市报）', {
						confirmButtonText: '确定'
					});
			},
			open10() {
				this.$alert(
					'28日，教育部党组印发通知，全面部署统筹做好教育系统新冠肺炎疫情防控和教育改革发展工作。通知指出，全国大中小学、幼儿园等开学时间原则上继续推迟，原则上疫情没有得到基本控制前不开学。（来源：央视网）', {
						confirmButtonText: '确定'
					});
			},
			open11() {
				this.$alert(
					'10日上午，习近平乘飞机抵达湖北省武汉市，考察湖北和武汉新冠肺炎疫情防控工作，看望慰问奋战在一线的广大医务工作者、解放军指战员、社区工作者、公安干警、基层干部、下沉干部、志愿者和患者群众、社区居民。（来源：央视新闻）', {
						confirmButtonText: '确定'
					});
			},
		}
	}
</script>

<style>
	.car {
		margin: 10px auto;
		padding: 0px;
		width: 600px;
		height: 300px;
	}

	.car_img {
		width: 100%;
		height: 100%;
		border-radius: 1em;
	}

	.cd {
		margin-left: 30px;
		margin-top: 20px;
	}


	.bottom {
		margin-top: 13px;
		line-height: 12px;
	
	}

	.button {
		padding: 0;
		/* float: right; */
	}

	.image {
		width: 100%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}

	.card {
		margin-top: 10px;
		padding: 0px;
	}

	.btn {
		color: #343434;
		word-wrap: break-word !important;
		word-break: break-all !important;
		white-space: normal !important;
		text-align: left;
		line-height: 20px;
	}
</style>
