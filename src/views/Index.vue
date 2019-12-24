<template>
	<div class="row">
		<div class="leftcolumn">
			<div v-for="(item, index) in articles" :key="index" class="card">
				<div class="fakeimg">
					
					
					<img :src="item.author.avatar" style="border-radius: 100px;width: 150px;" class="avatar-lg link" />
				<!-- <router-link :to="{ path: '/user/' + item.id }">
				<img :src="item.avatar" class="avatar-xs link" />
				</router-link> -->
				</div>

				<div class="f-2"></div>

				<div class="f-1">
					<div class="k">
						
					</div>
					<div class="k-2">
						<br />
						<router-link :to="{ path: '/article/' + item.article.id }" style="text-decoration: none;"><h3 style="color: #333;">{{ item.article.title }}</h3>
						</router-link>
						<p style="color: #263238;">{{ item.article.summary }}</p>
						<br />

						
							<span style="color: #AAAAAA;font-size: small;">评论({{ item.article.comments }})&nbsp;&nbsp;&nbsp;&nbsp;</span>
							
							<span style="color: #AAAAAA;font-size: small;">热度({{ item.article.likes }}）</span>
							<span style="color: #AAAAAA;font-size: small;"><i class="iconfont" onclick="this.innerHTML='❤️'">&#xe607;</i></span>
						
					</div>
				</div>
			</div>
		</div>
		<div class="rightcolumn">
			<div class="cards" style="full">
				<router-link to="/userdetail" class="button">个人中心️</router-link>
				<table>
					<tr><td>文章</td></tr>
					<tr><td>合集</td></tr>
					<tr><td>关注</td></tr>
					<tr><td>私信</td></tr>
				</table>

				<p>关于我的一些信息..</p>
			</div>
			<div class="cards">
				<router-link to="/users" style="text-decoration: none;color: #000000;">热门作者</router-link>
				<!-- <div class="fakeimg"></div> -->
				<!-- <div class="fakeimg"><p>图片</p></div>
				 -->
				 <br />
				<router-link to="/users" ><img src="../assets/img/12.jpg" style="width: 160px;height: 140px;"/>
				<img src="../assets/img/22.jpg" style="width: 160px;height: 140px;"/></router-link>
			</div>
			<div class="cards">
				<h3>发表</h3>
								
								<div>
								    <label for="name">标题：</label>
									
								    <input type="text" name="name" id="name" value="" tabindex="1">
									<br />
									<br />
								</div>
								
								<div>
								    <label for="textarea"></label>
								    <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>
									<br />
									<button style="background-color: #4CAF50;color: white;border-radius: 10px;outline: none;">发表</button>
								</div>
				
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			articles: [],
			currentPage: 1,
			count: 20
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/article').then(res => {
			console.log(res.data.data.length);
			this.articles = res.data.data;
		});
	},
	methods: {
		loadMore() {
			this.currentPage = this.currentPage + 1;
			this.axios.get('http://localhost:8080/api/article').then(res => {
				console.log(res.data.data.length);
				let temp = [];
				temp = res.data.data;
				for (var i = 0; i < temp.length; i++) {
					this.articles.splice(this.currentPage * this.count, 0, temp[i]);
				}
				console.log(this.articles.length);
			});
		}
	}
};
</script>

<style>
	@font-face {
	  font-family: 'iconfont';  /* project id 1434171 */
	  src: url('//at.alicdn.com/t/font_1434171_65sy1qqu6pe.eot');
	  src: url('//at.alicdn.com/t/font_1434171_65sy1qqu6pe.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1434171_65sy1qqu6pe.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1434171_65sy1qqu6pe.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1434171_65sy1qqu6pe.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1434171_65sy1qqu6pe.svg#iconfont') format('svg');
	}
	.iconfont{
	    font-family:"iconfont" !important;
	    font-size:16px;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;}
		.k-2 i:hover {
		  cursor: pointer;
		  color: red;
		  
		}
* {
	box-sizing: border-box;
}

body {
	font-family: Arial;
	padding: 10px;
	background: #f1f1f1;
}

/* 创建两列 */
/* Left column */
.leftcolumn {
	margin-top: 50px;
	margin-left: 90px;
	float: left;
	width: 55%;
}

/* 右侧栏 */
.rightcolumn {
	margin-left: 20px;
	margin-top: 70px;
	float: left;
	width: 30%;
	/* background-color: #f1f1f1; */
	/* padding-left: 20px; */
}

/* 图像部分 */
.fakeimg {
	/* background-color: ; */
	width: 20%;
	height: 20%;
	padding: 0px;
}

/* 文章卡片效果 */
.card {
	display: flex;
	background-color: rgb(237 237 239);
	padding: 20px;
	margin-top: 20px;
}
.cards {
	background-color: rgb(237 237 239);
	padding: 20px;
	margin-top: 20px;
}

/* 列后面清除浮动 */
.row:after {
	content: '';
	display: table;
	clear: both;
}

/* 底部 */
.footer {
	padding: 20px;
	text-align: center;
	background: #ddd;
	margin-top: 20px;
}

/* 响应式布局 - 屏幕尺寸小于 800px 时，两列布局改为上下布局 */
@media screen and (max-width: 800px) {
	.leftcolumn,
	.rightcolumn {
		width: 100%;
		padding: 0;
	}
}

/* 响应式布局 -屏幕尺寸小于 400px 时，导航等布局改为上下布局 */
@media screen and (max-width: 400px) {
	.topnav a {
		float: none;
		width: 100%;
	}
}
.button {
	background-color: #4caf50;
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
}

table,
td,
th {
	border: 1px solid black;
}
table {
	background: #e0e0e0;
	width: 100%;
}
th {
	height: 50px;
}
.f-1 {
	padding: 10px;
	display: flex;
	width: 70%;
	height: 100%;
	background-image: url(../assets/img/13.png);
}
.f-2 {
	width: 2%;
}
.k {
	width: 15%;
	height: 18%;
}

.k-2 {
	height: 54%;
}
</style>
