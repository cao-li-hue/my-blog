<template>
	<div class="adbj">
		<div class="adbj-head">
			
			<div class="UD-bj-body">
			<img :src="articleVo.author.avatar" class="avatar-xs" />
		</div>
		<div class="UD-bj-body2">
			<h2 class="title">{{ articleVo.article.title }}</h2>
		</div>
		<div class="UD-bj-body3">
			<span class="meta gutter">{{ articleVo.author.nickname }}</span>
		</div>
		<div class="UD-bj-body3">
			
				{{ articleVo.article.createTime.date.year }}年{{ articleVo.article.createTime.date.month }}月{{ articleVo.article.createTime.date.day }}日 {{ articleVo.article.createTime.time.hour }}:{{
					articleVo.article.createTime.time.minute
				}}:{{ articleVo.article.createTime.time.second }}
			
		</div>
		</div>
		<div class="adbj-body">
			<div v-html="articleVo.article.content" style="margin-top: -10px;">
				</div>
		</div>
	</div>
	<!-- <div class="container border">
		<h2 class="title">{{ articleVo.article.title }}</h2>
		<div class="box">
			<img :src="articleVo.author.avatar" class="avatar-xs" />
			<br />
			<span class="meta gutter">{{ articleVo.author.nickname }}</span>
			
			<span class="meta gutter">
				{{ articleVo.article.createTime.date.year }}年{{ articleVo.article.createTime.date.month }}月{{ articleVo.article.createTime.date.day }}日 {{ articleVo.article.createTime.time.hour }}:{{
					articleVo.article.createTime.time.minute
				}}:{{ articleVo.article.createTime.time.second }}
			</span>
		</div>
		<div v-html="articleVo.article.content" style="margin-top: -10px;">
			
		</div>
	</div> -->
</template>

<script>
export default {
	data() {
		return {
			articleVo: {}
		};
	},
	created() {
		var id = this.$route.params.id;
		this.axios.get('http://localhost:8080/api/article/' + id).then(res => {
			console.log(res.data.data);
			this.articleVo = res.data.data;
		});
	},
	computed: {},
	methods: {}
};
</script>

<style scoped="scoped">
	/* body{
		background-image: url(../assets/img/bj.jpg);
		width: 100%;
		height: 100%;
		background-size: ;
	} */
	.container {
		position: absolute;
		top: 100px;
		left: 70px;
		/* background-color: #008B8B; */
		width: 90%;
		height: 400%;
	}
	.box{
		/* margin-top: -00px; */
		height: 0px;
		line-height: 50px;
	}
	.adbj-body{
		margin-top: -100px;
		width: 100%;
		height: 100%;
		/* background-color: #42B983; */
	}
	.UD-bj-body3{
		/* margin-top: 130px; */
		margin-left: 35%;
		/* padding-top: 200px; */
		/* margin-top: 100px; */
			width: 30%;
			height: 23%;
			/* background-color: #4CAF50; */
		
	}
	.UD-bj-body2{
		margin-top: 130px;
		margin-left: 35%;
		/* padding-top: 200px; */
		/* margin-top: 100px; */
			width: 30%;
			height: 23%;
			/* background-color: #3366CC; */
		
	}
	.UD-bj-body{
		
		margin-left: 40%;
		/* padding-top: 200px; */
		/* margin-top: 100px; */
			width: 20%;
			height: 25%;
			/* background-color: #42B983; */
		
	}
	.adbj-head{
		margin-left: 5%;
		width: 90%;
		height: 35%;
		/* background-color: #008CBA; */
	}
	.adbj{
		width: 90%;
		height: 90%;
		/* background-color: #87CEEB; */
	}
</style>