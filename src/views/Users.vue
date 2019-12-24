<template>
	<div class="users-box">
			<div class="topnav2">
				
				<router-link to="/users"><button class="button button1" style="border: none;outline: none;">达人</button></router-link>
				<router-link to="/userfollows"><button class="button button2" style="border: none;outline: none;">我关注的人</button></router-link>
				<router-link to="/userfollows"><button class="button button3" style="border: none;outline: none;">寻找好友</button></router-link>

			  <button style="background-color: rgb(139 171 53);width: 100px;height: 40px;border-radius: 20px;color: #F1F1F1;margin-top: 33px;margin-right: 40px;margin-left: 80px;cursor: pointer;outline: none;">达人认证 </button>
			  <button style="background-color: rgb(139 171 53);width: 120px;height: 40px;border-radius: 20px;color: #F1F1F1;cursor: pointer;outline: none;">创作者签约 </button>
			</div>
		
		<div class="daren">
			<div v-for="(user, index) in users" :key="index" class="daren-box">
				<div class="daren-box-head">
					<div class="daren-box-avatar">
						<img :src="user.avatar" style="width:100% ;height:100% ;padding: 1px;" />
					</div>
					<div class="daren-box-name">
						<a style="margin-left: 20px;">{{ user.nickname }}</a>
					</div>
					
					<div class="daren-box-bxh">
						<a style="color: #c2c2c2;font-size: small;">不喜欢</a>
						
					</div>
					<div class="daren-box-guanzhu" style="outline: none;">
						
						<button style="background-color: rgb(139 171 53);width: 100px;height: 40px;border-radius: 5px;color: #F1F1F1;float: right;outline: none;">➕关注</button>
					</div>
				</div>
				<div class="daren-box-body">
					<div class="daren-pho">
						<img :src="user.avatar" style="width:100% ;height:100% ;padding: 6px;padding-bottom: 10px;" />
					</div>
					<div class="daren-pho">
						<img :src="user.avatar" style="width:100% ;height:100% ;padding: 6px;padding-bottom: 10px" />
					</div>
					<div class="daren-pho">
						<img :src="user.avatar" style="width:100% ;height:100% ;padding: 6px;padding-bottom: 10px" />
					</div>
				</div>
			</div>
		
		</div>
		<div class="xh">
			<div class="xh-head">
				<a style="margin-left: 50px;color: #F2F2F2;">猜你喜欢 ❤️</a>
			</div>
			<div v-for="(user, index) in users" :key="index" class="xh-body">
				<a style="margin-left: 50px;font-size: small;">{{ user.nickname }}</a>
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
	.button {
	    background-color: #4CAF50; /* Green */
	    border: none;
	    color: white;
	    padding: 16px 32px;
	    text-align: center;
	    text-decoration: none;
	    display: inline-block;
	    font-size: 16px;
	    margin: 4px 2px;
	    -webkit-transition-duration: 0.4s; /* Safari */
	    transition-duration: 0.4s;
	    cursor: pointer;
	}
	
	.button1 {
	    background-color: white; 
	    color: black; 
	    border: 2px solid #4CAF50;
	}
	
	.button1:hover {
	    background-color: rgb(236 236 236);
	    color: #333333;
	    font-weight: 900;
	}
	
	.button2 {
	    background-color: white; 
	    color: black; 
	    border: 2px solid #008CBA;
	}
	
	.button2:hover {
	    background-color: rgb(236 236 236);
	    color: #333333;
	    font-weight: 900;
	}
	
	.button3 {
	    background-color: white; 
	    color: black; 
	    border: 2px solid #f44336;
	}
	
	.button3:hover {
	    background-color: rgb(236 236 236);
	    color: #333333;
		font-weight: 900;
	}
	
	
	
	.xh-body{
		border-bottom: rgb(255 255 255) 1px solid;
		padding-top: 13px;
		background-color:#EEEEEE;
		width: 100%;
		height: 1.5%;
	}
	
	.xh-head{
		padding-top: 10px;
		background-color: rgb(128 128 128);
		width: 100%;
		height: 1.6%;
	}
	.xh{
		float: right;
		background-color: #EEEEEE;
		width: 32%;
		height: 391.5%;
	}
	.daren-pho{
		float: right;
		/* background-color: #008B8B; */
		width: 33.33%;
		height: 100%;
	}
	.daren-box-body{
		
		
		/* background-color: #AAAAAA; */
		width: 100%;
		height: 70%;
	}
	.daren-box-bxh{
		float: left;
		margin-left:280px ;
		/* background-color: #AAAAAA; */
		width: 10%;
		height: 70%;
	}
	.daren-box-guanzhu{
		float: right;
		margin-top: -12px;
		/* background-color: #87CEEB; */
		width: 20%;
		height: 70%;
	}
	.daren-box-name{
		padding-top: 4px;
		/* background-color: hotpink; */
		width: 40%;
		height: 30%;
	}
	.daren-box-avatar{
		
		float: left;
		/* background-color:  #87CEEB; */
		width: 16%;
		height: 90%;
	}
	.daren-box-head{
		
		/* background-color: #42B983; */
		width: 100%;
		height: 37%;
	}
	.daren-box{
		padding: 30px;
		background-color: rgb(255 255 255);
		border-bottom: #F1F1F1 1px solid;
		height: 45%;
		width: 100%;
	}
	.topnav2 {
	  width: 100%;
	  height: 13%;
	  border-bottom: #F1F1F1 1px solid;
	  /* background-color: #008B8B; */
	  
	}
	 
	/* 导航链接 */
	.topnav2 a {
	 float: left;
	  display: block;
	  color: #111111;
	  text-align: center;
	  padding: 20px 28px;
	  text-decoration: none;
	 letter-spacing: 2px;
	}
	 
	/* 链接 - 修改颜色 */
	/* .topnav2 a:hover {
		width: 20%;
		height: 20%;
	  background-color: #ddd;
	  color: black;
	} */




.daren {
	border-right: #F1F1F1 1px solid;
	float: left;
	border-right: ;
	/* background-color: #EEEEEE; */
	width: 68%;
	height: 87%;
}
.users-box{
	background-color: rgb(255 255 255);
}
.users-box {
	/* background-color: #000000; */
	position: absolute;
	top: 130px;
	left: 250px;
	width: 63%;
	height: 100%;
}
</style>
