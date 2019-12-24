<template>
	<div class="users-box2">
		<div class="topnav3">
		<router-link to="/users"><button class="button button1" style="border: none;outline: none;">达人</button></router-link>
		<router-link to="/userfollows"><button class="button button2" style="border: none;outline: none;">我关注的人</button></router-link>
		<router-link to="/userfollows"><button class="button button3" style="border: none;outline: none;">寻找好友</button></router-link>
		
		  <button style="background-color: rgb(139 171 53);width: 100px;height: 40px;border-radius: 20px;color: #F1F1F1;margin-top: 33px;margin-right: 40px;margin-left: 80px;outline: none;cursor: pointer;">达人认证 </button>
		  <button style="background-color: rgb(139 171 53);width: 120px;height: 40px;border-radius: 20px;color: #F1F1F1;outline: none;cursor: pointer;">创作者签约 </button>
		</div>
			<div class="guanzhu-ren">
				<a><router-link to="/userfollows" style="text-decoration: none;color: rgb(67 70 72);">最近互动｜</router-link></a>
				<a><router-link to="/userfollows" style="text-decoration: none;color: rgb(67 70 72);">最新互动</router-link></a>
				<div class="guanzhu-ren-box">
					<div v-for="(user, index) in users" :key="index" class="guanzhu-ren-box1">
						<div class="guanzhu-ren-avatar">
							<img :src="user.avatar" style="width:100% ;height:100% ;border-radius: 2px;" />
						</div>
						<div class="guanzhu-ren-name">
							<a style="margin-left: 20px;color: #333333;">{{ user.nickname }}</a>
						</div>
						<div class="guanzhu-ren-time">
							<a style="margin-left: 15px;font-size: small;padding: 0;color: #333333;">{{ user.createTime.date.month}}/{{ user.createTime.date.day}}&nbsp;{{ user.createTime.time.hour}}:{{ user.createTime.time.minute}}:{{ user.createTime.time.second}}更新</a>
						</div>
						
					</div>
					
					
				</div>
		</div>
		<div class="tuij">
		<div class="sousuo">
			<input type="text" placeholder="输入用户名称，查找关注的人" style="width: 200px;height: 55px;margin-top: 20px;margin-left: 10px;outline: none;" />
			<i class="iconfont" style="font-size: xx-large;">&#xe605;</i>
		</div>
		<br />
			<a>推荐关注</a>
			<br />
			<br />
		<div class="tuij-ren">
			<div v-for="(user, index) in users.slice(0,4)" :key="index" class="tuij-ren-pho">
				<router-link to="/userdetail"><img :src="user.avatar" style="width:100% ;height:100% ;" /></router-link>
			</div>
			
		</div>
		</div>
		
		</div>
		
</template>

<script>
export default {
	data() {
		return {
			users: [],
			user: {},
			show: false
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/user').then(res => {
			console.log(res.data.data);
			this.users = res.data.data;
		});
		
	},
	methods: {
		showBox: function() {
			this.show = true;
		},
		closeBox: function() {
			this.show = false;
		},
		clearBox: function() {},
		addUser: function(user) {
			let data = {
				account: user.gender,
				password: user.password,
				nickname: user.nickname,
				avatar: user.avatar,
				introduction: user.introduction
			};
			alert(JSON.stringify(data));
			var _this = this;
			axios.post('http://localhost:8080/api/user', JSON.stringify(data)).then(function(response) {
				_this.closeBox();
				_this.users.splice(0, 0, response.data);
			});
		}
	},
	computed: {}
};
</script>

<style>
	/* .iconfont{
	    font-family:"iconfont" !important;
	    font-size:16px;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;} */
	@font-face {
	  font-family: 'iconfont';  /* project id 1434171 */
	  src: url('//at.alicdn.com/t/font_1434171_sskn5u3egh.eot');
	  src: url('//at.alicdn.com/t/font_1434171_sskn5u3egh.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1434171_sskn5u3egh.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1434171_sskn5u3egh.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1434171_sskn5u3egh.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1434171_sskn5u3egh.svg#iconfont') format('svg');
	}
	.tuij-ren-pho{
		float: left;
		background-color: #42B983;
		width: 50%;
		height: 50%;
	}
	.tuij-ren{
		background-color: #3366CC;
		
		width: 90%;
		height: 45%;
	}
	.sousuo{
		margin-top: 60px;
		/* background-color: #3366CC; */
		widows: 100%;
		height: 20%;
	}
	.guanzhu-ren-name{
		margin-left: 100px;
		
		/* background-color: #3366CC; */
		width: 50%;
		height: 30%;
	}
	.guanzhu-ren-time{
		margin-right: 43px;
		margin-top: 12px;
	float: right;
		/* background-color: #AAAAAA; */
		width: 54%;
		height: 30%;
	}
	.guanzhu-ren-avatar{
		float: left;
		margin-left: 15px;
		
		width: 25%;
		height: 90%;
	}
	.guanzhu-ren-box1{
		
		border: rgb(273 273 273) 1px solid;
		float: left;
		padding-top: 10px;
		/* margin-top: 10px; */
		background-color: rgb(237 237 237);
		width: 50%;
		height: 21%;
	}
	.guanzhu-ren-box{
		margin-top: 10px;
		/* background-color: #008B8B; */
		width: 100%;
		height: 90%;
	}
	.tuij{
		/* border-left: #F1F1F1 1px solid; */
		float: right;
		margin-top: -8px;
		width: 30%;
		height: 83.7%;
		 /* background-color: #87CEEB; */
	}
	.guanzhu-ren{
		padding: 30px;
		float: left;
		margin-top: -8px;
		width: 70%;
		height: 83.7%;
		/* background-color: #42B983; */
	}
	.topnav3 {
	  width: 100%;
	  height: 16.3%;
	  border-bottom: #F1F1F1 1px solid;
	  /* background-color: #008B8B; */
	  
	}
	 
	/* 导航链接 */
	.topnav3 a {
	 float: left;
	  display: block;
	  color: #111111;
	  text-align: center;
	  padding: 20px 28px;
	  text-decoration: none;
	 letter-spacing: 2px;
	}
	.users-box2{
		background-color: rgb(255 255 255);
	}
	.users-box2 {
		/* background-color: #000000; */
		position: absolute;
		top: 130px;
		left: 250px;
		width: 63%;
		height: 70%;
	}
</style>
