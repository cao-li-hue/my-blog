<template>	
	 <div class="divv">
		 
		 	<div class="dl">
		 			<h1 class="z" style="text-align: center;">登录</h1>
		 		</div>
		 	<div class="login-box">
		 		<div class="inp">
		 			
		 			<input type="text" placeholder="请输入您的账号" style="width: 280px;height: 47px;outline: none;">
		 		<br />
		 		
		 			<input type="password" name="password" required lay-verify="required" placeholder="请输入密码" style="width: 280px;height: 47px;outline: none;" autocomplete="off" class="layui-input" >
		 			
		 			<br />
		 			<br />
					
		 			<input type="button" value="登录" @click="signIn(userDto)" style="width: 281px;height: 38px;background-color: #42C02E;color: #EEEEEE;outline: none;cursor: pointer;"/>
		 			
					
					<p style="color: #B4B4B4;font-size: small;"><input type="checkbox" name="vehicle" value="Bike"/>十天内免密登陆</p>
		 			<div class="zhh2">
		 			<router-link to="/regition" style="color: #AAAAAA;font-size: small;text-decoration: none;">没有账号？去注册</router-link>
		 		
				</div>
				
				</div>
		 		
		 	
		 		
		 		<div class="reg">
		 			
		 			<button class="w-btn1" style="outline: none;">网易邮箱登录</button>
		 			<button class="w-btn2" style="outline: none;">新浪微博登录</button>
		 			<button class="w-btn3" style="outline: none;">腾讯QQ登录</button>
		 			<button class="w-btn4" style="outline: none;">微信登录</button>
		 			<span class="sepln"></span>
		 			<span class="huo">或</span>
		 		</div>
		 		
				</div>
				
		 		<div class="img">
		 					<img src="../assets/img/yem1.png" width="1440" height="800">  
						
							
		 		</div>
				<div class="img2">
							<img src="../assets/img/yem2.png" width="1440" height="240"> 
						
							
				</div>
				<div class="img3">
							<img src="../assets/img/yem3.png" width="1440" height="800">  
						
						
				</div>
				
					
		 <p1>LIBERTY</p1>
		 <h11>让兴趣·更有趣</h11>
		 <p style="margin-top: -10px;color: #333333;font-size: small;">作品来自：xxx</p>
	 </div>
	 
	 
</template>
 
<script  >
		
export default {
	data() {
		return {
			userDto: {
				mobile: '',
				password: '',
				code: ''
			},
			token: ''
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/user').then(res => {
			// console.log(res);
			var img = this.$refs.codeImg;
			let url = window.URL.createObjectURL(res.data);
			img.src = url;
			console.log(res.headers);
			//取得后台通过响应头返回的sessionId的值
			this.token = res.headers['access-token'];
			console.log(this.token);
		});
	},
	methods: {
		signIn(userDto) {
			this.axios('http://localhost:8080/api/user').then(res => {
				if (res.data.msg === '成功') {
					alert('登录成功');
					localStorage.setItem('user', JSON.stringify(res.data.data));
					this.$router.push('/index');
				} else {
					alert(res.data.msg);
					this.userDto.code = '';
				}
			});
		},
		refresh() {
			this.axios.get('http://localhost:8080/api/user').then(res => {
				console.log(res);
				var img = this.$refs.codeImg;
				let url = window.URL.createObjectURL(res.data);
				img.src = url;
			});
		}
	}
};	 
</script>


<style>

	
	h11
	{
		
		position:absolute;
		top: 20%;
		width: 100%;
		font-size:30px;
		 color: #EEEEEE;
		text-align:center;
		text-shadow: 5px 5px 5px #333;
		letter-spacing: 20px;
	}
	
	p1
	{
		position:absolute;
		top: 6%;
		width: 100%;
		font-size:90px;
		 color: #EEEEEE;
		text-align:center;
		text-shadow: 5px 5px 5px #333;
	}
  .divv{
      width: 102,1%;
      height:700px;
	  margin-top: -18px;
	  margin-right:-18px;
	  margin-left:-18px;
      background-repeat: no-repeat;
  	 
  	
  	 animation:frams 10s infinite;
  } 
 @keyframes frams { 
	 
      0%{
          background-image: url(../assets/img/3.jpg);background-size: 100% 100%;background-repeat: no-repeat
      }
      33%{
          background-image: url(../assets/img/5.jpg);background-size: 100% 100%;background-repeat: no-repeat
      }
      66%{
          background-image: url(../assets/img/6.jpg);background-size: 100% 100%;background-repeat: no-repeat
      }
      100%{
          background-image: url(../assets/img/bj.jpg);background-size: 100% 100%;background-repeat: no-repeat
      }
  }

  .login-box {
  	width: 360px;
  	height: 250px;
  	/* border-radius: 10px; */
  	background-color: #EEEEEE;
  	border: none;
  	position: absolute;
  	border-bottom-left-radius: 10px;
  	
  	top: 400px;
  	left: 29%;
  	
  	
  }
  .reg{
  	width: 220px;
  	height: 250px;
  	
  	border-bottom-right-radius: 10px;
  	background-color: #EEEEEE;
  	position: absolute;
  	left: 360px;
  	top: 0px;
  	/* border-radius: ; */
  }
  
  h1{
  	color: #333333;
  	padding-bottom: 16px;
  }
  .sepln{
  	position: absolute;
  	    left: 0px;
  	    top: 30px;
  	    display: block;
  	    height: 190px;
  	    width: 1px;
  	    background: #DDDDDD;
  	
  }
  .huo {
      position: absolute;
      left: 0px;
      top: 95px;
      margin: 0 0 0 -6px;
      display: block;
      width: 20px;
      height: 50px;
      line-height: 50px;
      background:  #EEEEEE;
      color: #aaa;
  }
  .dl{
  	position: absolute;
  	left: 418px;
  	top: 330px;
  	width: 580px;
  	height: 70px;
  	border-top-left-radius: 10px;
  	border-top-right-radius: 10px;
  	background-color:rgb(0,0,0,0.5);
  }
  .z{
  	color: #DDDDDD;
  	
  }
  .login-form2{
  	position: absolute;
  	left: 10px;
  	top: 28px;
  	border-radius: 10px;
  	
  	
  	
  }
  .inp{
	  position: absolute;
	  top: 30px;
	  left: 45px;
  }
  
  .zhh2{
  	position: absolute;
  	left: 175px;
  	top: 163px;
  	
  }
  .w-btn1 {
      background-color: red;
      color: #FFFFFF;
  	width: 160px;
  	height: 40px;
  	
  	border-radius: 5px;
  	
  	text-align: center;
  	
  	font-size: 14px;
  	line-height: 40px;
  	cursor: pointer;
  	position: absolute;
  	left: 28px;
  	top: 30px;
  }
  
  .w-btn2 {
      background-color: orangered;
      color: #FFFFFF;
  	width: 160px;
  	height: 40px;
  	
  	border-radius: 5px;
  	
  	text-align: center;
  	
  	font-size: 14px;
  	line-height: 40px;
  	cursor: pointer;
  	position: absolute;
  	left: 28px;
  	top: 80px;
  }
  .w-btn3 {
      background-color: skyblue;
      color: #FFFFFF;
  	width: 160px;
  	height: 40px;
  	
  	border-radius: 5px;
  	
  	text-align: center;
  	
  	font-size: 14px;
  	line-height: 40px;
  	cursor: pointer;
  	position: absolute;
  	left: 28px;
  	top: 130px;
  }
  .w-btn4 {
      background-color: #4CAF50;
      color: #FFFFFF;
  	width: 160px;
  	height: 40px;
  	
  	border-radius: 5px;
  	
  	text-align: center;
  	cursor: pointer;
  	font-size: 14px;
  	line-height: 40px;
  	
  	position: absolute;
  	left: 28px;
  	top: 180px;
  }
  .img{
	  /* background-image: url(../assets/img/yem1.png); */
	 position: absolute;
	  left: 0px;
	  top: 700px;
	 
  }
  .img2{
  	  /* background-image: url(../assets/img/yem1.png); */
  	 position: absolute;
  	  left: 0px;
  	  top: 1500px;
  	 
  }
  .img3{
  	  /* background-image: url(../assets/img/yem1.png); */
  	 position: absolute;
  	  left: 0px;
  	  top: 1740px;
	  
  	 
  }
</style>