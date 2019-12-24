<template>
	<div class="ht-box">
		<div class="topnav">
		 <a> <router-link to="/articles">热门</router-link></a>
		  <a><router-link to="/newarticle">最新</router-link></a>
		</div>
		<div class="row">
	  <div  class="column">
	  <div v-for="(item, index) in articles" :key="index" class="box5">
		
		  <div class="samllhead">
			  <!-- <router-link :to="{ path: '/article/' + item.article.id }" class="subtitle">
			  	 {{ item.article.title }} 
			  </router-link> -->
			  <router-link :to="{ path: '/article/' + item.article.id }" style="text-decoration: none;"><h2 style="margin-left: 20px;padding-top: 20px;font-size: large;color: #000000;">{{ item.article.title }}</h2></router-link>
			  
		  </div>
		<div  class="canyu">
					 <h2 style="font-size: small;color: #AAAAAA;margin-left: 20px;padding-top: 3px;">{{ item.article.likes }}人参与</h2>
		</div>
		<div class="ergonge">
			<img :src="item.author.avatar" style="width: 100%;height: 100%;" class="avatar-lg link" />
			</div>
			<div class="ergonge">
				<img :src="item.article.thumbnail" style="width: 100%;height: 100%;" class="avatar-lg link" />
				</div>
				<div class="ergonge">
					<img :src="item.topic.logo" style="width: 100%;height: 100%;" class="avatar-lg link" />
					</div>
					<div class="ergonge">
						<img :src="item.author.avatar" style="width: 100%;height: 100%;" class="avatar-lg link" />
						</div>
	  </div>
	 
	  </div>
	  
	  <div  class="column">
	  <div v-for="(item, index) in articles" :key="index" class="box5">
	   <div class="samllhead">
	   			  <router-link :to="{ path: '/article/' + item.article.id }" style="text-decoration: none;"><h2 style="margin-left: 20px;padding-top: 20px;font-size: large;color: #000000;">{{ item.article.title }}</h2></router-link>
	   			  
	   </div>
	   <div  class="canyu">
	   			 <h2 style="font-size: small;color: #AAAAAA;margin-left: 20px;padding-top: 3px;">{{ item.article.id }}人参与</h2>
	   </div>
	   <div class="ergonge">
	   	<img :src="item.author.avatar" style="width: 100%;height: 100%;" class="avatar-lg link" />
	   	</div>
	   	<div class="ergonge">
	   		<img :src="item.topic.logo" style="width: 100%;height: 100%;" class="avatar-lg link" />
	   		</div>
	   		<div class="ergonge">
	   			<img :src="item.article.thumbnail" style="width: 100%;height: 100%;" class="avatar-lg link" />
	   			</div>
	   			<div class="ergonge">
	   				<img :src="item.author.avatar" style="width: 100%;height: 100%;" class="avatar-lg link" />
	   				</div>
	   
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
.ergonge{
	padding: 1px;
	/* background-color: #008B8B; */
	width: 50%;
	height: 38%;
	float: right;
}

	.canyu{
		/* background-color: #87CEEB; */
		width: 100%;
		height: 8%;
		margin-top: -20px;
	}
	.samllhead{
		
		margin-top: -20px;
		/* background-color: #AAAAAA; */
		width: 100%;
		height: 16%;
	}
	.box5 {
	  
		background-color: #FFFFFF;
	    float: left;
		padding: 0px;
		margin-top: 10px;
	    width: 405px;
	    height: 400px;
	    margin-bottom: 10px;
	   margin-left: 15px;
	   border: 1px #EEEEEE solid;
	    
	}
.ht-box{
	background-color: #CCCCCC;
	position: absolute;
	top: 130px;
	left: 280px;
	width: 70%;
	/* height: 100%; */
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
 
/* 列后清除浮动 */
/* .row:after {
  content: "";
  display: table;
  clear: both;
} */
 
/* 响应式布局 - 小于 600 px 时改为上下布局 */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>