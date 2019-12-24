<template>
	<div class="box3">
		<div class="tup-box">
			<div class="tup-1">
				<div class="div" style="text-align: left;padding-top: 210px;font-size: small;color: #333333;"><a>作品来自 乔汉童</a></div>
			</div>
			<div class="tup-5"><div class="div2"><div class="div2" style="text-align: left;padding-top: 210px;font-size: small;color: #AAAAAA;"><a>作品来自 乔汉童</a></div></div></div>
			<div class="tup-2"><div class="div3"><div class="div3" style="text-align: left;padding-top: 210px;font-size: small;color: #333333;"><a>作品来自 无限猴子</a></div></div></div>
			<div class="tup-3"><div class="div4"><div class="div4" style="text-align: left;padding-top: 210px;font-size: small;color: #333333;"><a>作品来自 念远怀人</a></div></div></div>
			<div class="tup-4"><div class="div5"><div class="div5" style="text-align: left;padding-top: 210px;font-size: small;color: #333333;"><a>作品来自 简书钻管家</a></div></div></div>
		</div>
		<div class="liber">
			<div v-for="(item, index) in articles" :key="index" class="liber-card">
				
				<router-link :to="{ path: '/article/' + item.article.id }" style="text-decoration: none;"><h2 style="padding-top: 25px;padding-left: 35px;padding-right: 35px;text-align: center;color: #000000;">{{ item.article.title }}</h2></router-link>
				<h2 style="padding-top: 5px;padding-left: 35px;padding-right: 35px;font-size: large;">{{ item.article.summary }}</h2>
				<h6 style="margin-top: -11px;margin-left: 750px;">文章来自:{{ item.author.nickname }}</h6>
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
		this.axios
			.get('http://localhost:8080/api/article')
			.then(res => {
				console.log(res.data.data.length);
				this.articles = res.data.data;
			});
	},
	methods: {
		loadMore() {
			this.currentPage = this.currentPage + 1;
			this.axios
				.get('http://localhost:8080/api/article')
				.then(res => {
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
	
	.div a{
		font-size: larger;
	}
	.liber-card{
	/* position: absolute;
	top: 10px;
	left: 10px;
	 */
	background-image: url(../assets/img/25.png);
	background-size:100% 100%;
	background-repeat:no-repeat;
	
	border-radius: 15px;
	width: 100%;
	height: 30%;
	/* background-color: #CCCCCC; */
	}
	
.liber {
	position: absolute;
	top: 640px;
	left: 213px;
	width: 69.7%;
	height: 100%;
	/* background-color: #42b983; */
}
.div {
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;

	animation: frams 12s infinite;
}
.div2 {
	width: 100%;
	height: 100%;

	background-repeat: no-repeat;

	-webkit-animation: you 12s infinite;
}
.div3 {
	width: 100%;
	height: 100%;

	background-repeat: no-repeat;

	-webkit-animation: mymove 12s infinite;
}
.div4 {
	width: 100%;
	height: 100%;

	background-repeat: no-repeat;

	-webkit-animation: youmove 12s infinite;
}
.div5 {
	width: 100%;
	height: 100%;

	background-repeat: no-repeat;

	-webkit-animation: ourmove 12s infinite;
}
.tup-box {
	position: absolute;
	top: 130px;
	left: 210px;
	/* background-color: #008B8B; */
	width: 70%;
	height: 60%;
}
.tup-1 {
	padding: 3px;
	/* background-color: #000000; */
	width: 50%;
	height: 50%;
}
.tup-2 {
	padding: 3px;
	position: absolute;
	top: 50%;
	/* background-color: #87CEEB; */
	width: 33.33%;
	height: 50%;
}
.tup-3 {
	padding: 3px;
	position: absolute;
	top: 50%;
	left: 33.33%;
	/* background-color: #87CEEB; */
	width: 33.33%;
	height: 50%;
}
.tup-4 {
	padding: 3px;
	position: absolute;
	top: 50%;
	left: 66.66%;
	/* background-color: #87CEEB; */
	width: 33.33%;
	height: 50%;
}
.tup-5 {
	padding: 3px;
	position: absolute;
	top: 0px;
	left: 50%;
	/* background-color: #000000; */
	width: 50%;
	height: 50%;
}
@-webkit-keyframes you {
	0% {
		background-image: url(../assets/img/24.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	33% {
		background-image: url(../assets/img/16.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	66% {
		background-image: url(../assets/img/17.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	100% {
		background-image: url(../assets/img/18.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
}
@-webkit-keyframes mymove {
	0% {
		background-image: url(../assets/img/17.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	33% {
		background-image: url(../assets/img/18.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	66% {
		background-image: url(../assets/img/19.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	100% {
		background-image: url(../assets/img/22.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
}
@-webkit-keyframes youmove {
	0% {
		background-image: url(../assets/img/1.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	33% {
		background-image: url(../assets/img/12.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	66% {
		background-image: url(../assets/img/bj.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	100% {
		background-image: url(../assets/img/23.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
}
@-webkit-keyframes ourmove {
	0% {
		background-image: url(../assets/img/2.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	33% {
		background-image: url(../assets/img/4.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	66% {
		background-image: url(../assets/img/8.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
	100% {
		background-image: url(../assets/img/9.jpg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}
}
</style>
