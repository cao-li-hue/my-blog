<template>
	<div id="bj">
		
		<p1>LIBERTY</p1>
		<h11>让兴趣·更有趣</h11>
		<div class="dl">
				<h1 class="z" style="text-align: center;">欢迎注册</h1>
			</div>
		<div class="login-box2">
			<div class="inp2">
				
				<input type="text" placeholder="手机号码" style="width: 280px;height: 35px;">
				
				
					
					<input type="text" placeholder="密码" style="width: 280px;height: 35px;">
					
					<input type="text" placeholder="确认密码" style="width: 280px;height: 35px;">
					<input type="text" placeholder="输入验证码" style="width: 90px;height: 35px;">
					<img id="img-show" class="f-fl" src="//www.lofter.com/lpt/photoCaptcha/getPhotoCaptcha.do?width=125&amp;height=30&amp;75377">
					<h6>换一张<i class="iconfont">&#xe6cd;</i></h6>
					
				<input type="button" value="注册" @click="signIn(userDto)" style="width: 283px;height: 35px; background-color: #42C02E;color: #EEEEEE;outline: none;"/>
	
				<p2 style="color: #B4B4B4;font-size: small;"><input type="checkbox" name="vehicle" value="Bike"/>已阅读同意<router-link to="" style="text-decoration: none;">协议</router-link></p2>
				
				<div class="zhh">
				<router-link to="/sign-in" style="color: #AAAAAA;font-size: small;text-decoration: none;">已有账号？去登录</router-link>
			</div></div>
			
		
	
			<div class="reg">
				
				<button class="w-btn1" style="outline: none;">网易邮箱注册</button>
				<button class="w-btn2" style="outline: none;">新浪微博注册</button>
				<button class="w-btn3" style="outline: none;">腾讯QQ注册</button>
				<button class="w-btn4" style="outline: none;">微信注册</button>
				<span class="sepln"></span>
				<span class="huo">或</span>
			</div>
			</div>
			</div>
</template>
<script>

			
</script>
<style type="text/css">
	@font-face {
	  font-family: 'iconfont';  /* project id 1434171 */
	  src: url('//at.alicdn.com/t/font_1434171_3szzhdw9oz6.eot');
	  src: url('//at.alicdn.com/t/font_1434171_3szzhdw9oz6.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1434171_3szzhdw9oz6.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1434171_3szzhdw9oz6.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1434171_3szzhdw9oz6.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1434171_3szzhdw9oz6.svg#iconfont') format('svg');
	}
	
	.iconfont {
		font-family: "iconfont" !important;
		font-size: 13px;
		font-style: normal;
		color: #aaa;
		
	}
	.inp2 h6{
		position: absolute;
		top: 95px;
		right: 40px; 
		color: #AAAAAA
		
	}
	.inp2 p2{
		
			position: absolute;
			top: 185px;
			left: 0; 
		
		
	}
	#img-show{
		position: absolute;
		top: 107px;
		right: 99px; 
	}
	
	#bj{
		position: absolute;
		top: 0;
		left: 0; 
		width: 100%;
		height: 100%;
		background-image: url(../assets/img/bj.jpg);
		
		background-size:100% 100%;
			background-repeat:no-repeat;
	}
	.login-box2 {
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
	.reg2{
		width: 220px;
		height: 260px;
		
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
		margin-top: 13px;
	}
	.login-form2{
		position: absolute;
		left: 10px;
		top: 28px;
		border-radius: 10px;
		
		
		
	}
	.inp2{
		
		position: absolute;
		left: 40px;
		top: 20px;
		
	}
	.zhh{
		position: absolute;
		left: 180px;
		top: 185px;
		
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
		
		font-size: 14px;
		line-height: 40px;
		
		position: absolute;
		left: 28px;
		top: 180px;
	}
</style>
