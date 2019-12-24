<template>
	<div class="ht-box">
		<div class="topnav">
		 <a> <router-link to="/articles">热门</router-link></a>
		  <a><router-link to="/newarticle">最新</router-link></a>
		</div>
		<div  class="column">
		<div  v-for="(item, index) in articles" :key="index" class="box2">
			<div class="samllhead2">
<router-link :to="{ path: '/article/' + item.article.id }" style="text-decoration: none;"><h2 style="margin-left: 20px;padding-top: 20px;font-size: large;color: #000000;">{{ item.article.title }}</h2></router-link>
				  
			  </div>
			<div  class="canyu2">
						<router-link :to="{ path: '/article/' + item.article.id }" style="text-decoration: none;"> 
						<h2 style="font-size: small;color: #AAAAAA;margin-left: 20px;padding-top: 10px;text-decoration: none;">{{ item.article.id }}人参与</h2>
						</router-link>
			
			</div>
		</div>
		
		</div>
		<div  class="column">
		<div  v-for="(item, index) in articles" :key="index" class="box2">
			<div class="samllhead2">
<router-link :to="{ path: '/article/' + item.article.id }" style="text-decoration: none;"><h2 style="margin-left: 20px;padding-top: 20px;font-size: large;color: #000000;">{{ item.article.title }}</h2></router-link>
				  
			  </div>
			<div  class="canyu2">
						 <h2 style="font-size: small;color: #AAAAAA;margin-left: 20px;padding-top: 3px;">{{ item.article.id }}人参与</h2>
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
	.samllhead2{
		
		margin-top: -15px;
		/* background-color: #AAAAAA; */
		width: 100%;
		height: 40%;
	}
	.canyu2{
		/* background-color: #87CEEB; */
		width: 100%;
		height: 50%;
		
	}
.ht-box{
	background-color: 	#FFFFFF;
	position: absolute;
	top: 130px;
	left: 280px;
	width: 60%;
	/* height: 100%; */
}

.box2 {
	background-color: #FFFFFF;
    float: left;
	margin-top: 10px;
    width: 405px;
    height: 100px;
    margin-bottom: 10px;
   margin-left: 15px;
   border: 1px #EEEEEE solid;
    
}
/* 导航条 */
.topnav {
  overflow: hidden;
  background-color: #333;
}
 
/* 导航链接 */
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
 
/* 链接 - 修改颜色 */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
.column {
  float: left;
  width: 50%;
}
</style>