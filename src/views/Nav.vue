<template>
	<div>
		 
			 <ul>
             <li > <router-link to="/liberty">Liberty</router-link></li>
				<li>
					<router-link to="/index">首页</router-link>
					
				</li>
				<li>
					<router-link to="/articles">话题</router-link>
					
				</li>
				<li>
					<router-link to="/topics">浏览</router-link>
					
				</li>
				<li>
					<router-link to="/users">达人</router-link>
					
				</li>
				 
				  
				<li  style="float: right;"  v-if="!this.user"><router-link to="/sign-in" >登录</router-link></li>
					<router-link :to="{ path: '/user/' + user.id }" v-if="this.user"> </router-link>
				<li style="float: right;" v-if="this.user"><router-link to="/sign-in" >退出</router-link></li>
				 
				  <div class="search-container">
				      <form action="/topic">
				        <input type="text" placeholder="搜索.." name="search">
				        <button type="submit">提交</button>
				      </form>
				    </div>
				
			</ul>
		 
		<router-view class="container" />
	</div>
</template>
<script>
export default {
	data() {
		return {
			user: JSON.parse(localStorage.getItem('user')),
			keywords: ''
		};
	},
	created() {},
	methods: {
		logout() {
			this.user = null;
			localStorage.clear();
		},
		search() {
			let currentPath = this.$route.path;
			alert(currentPath);
			if (currentPath != '/search' || currentPath != '/search/article' || currentPath != '/search/topic' || currentPath != '/search/user') {
				this.$router.push({ path: '/search', query: { keywords: this.keywords } });
			} else {
				this.$router.push({ path: '/empty', query: { keywords: this.keywords } });
			}
		}
	}
};
</script>
<style scoped>
  
  ul {
       list-style-type: none;
	   /* 调整导航栏的位置 */
	   margin: -18px;
	   padding: 0;
	   
	   overflow: hidden;
	   background-color: rgb(51,51,51,0.9);
  }
  li {
       float:left;
	   display: flex;
	    
  }
   
   
   li a {
       display: flex;
	   /* 字体颜色 */
	   font-size: 20px;
	   color: white;
	   text-align: ;
	   /* 调整导航栏中的位置 */
	   padding: 25px 60px;
	   text-decoration: none;
  }
  li a:hover {
	  /* 鼠标悬停的颜色 */
      background-color: #111;
  }
  /* 搜索栏样式 */
  ul .search-container {
    float: right(20%);
  }
  ul input[type=text] {
    padding: 8px;
    margin-top: 20px;
    font-size: 17px;
    border: none;
	border-radius: 2px;
  }
  
  ul .search-container button {
    float: right(20%);
    padding: 6px;
    margin-top: 20px;
    margin-right: 16px;
    background: #ddd;
    font-size: 17px;
    border: none;
	
    cursor: pointer;
  }

ul .search-container button:hover {
  background: #ccc;
}

</style>
