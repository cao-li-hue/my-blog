<template>
	<div id="UD-bj">
<div class="UD-bj-head">
	
</div>
	 <div class="UD-box">
		 <div class="UD-box-header">
	       <div class="UD-box-header-1">
			   
		   </div>
		   <div class="UD-box-header-2">
		   			   
					   <a style="font-size: xx-large;margin-left: 39px;letter-spacing: 4px;color: #333333;">yueban333</a>
		   </div>
		   <div class="UD-box-header-3">
		   			 <router-link to="/userfollows" style="text-decoration: none;color: #333333;margin-left: 260px;font-size: small;">关注</router-link>  
					 <router-link to="/userfollows" style="text-decoration: none;color: #333333;margin-left: 50px;font-size: small;">粉丝</router-link>
					 <router-link to="/userfollows" style="text-decoration: none;color: #333333;margin-left: 50px;font-size: small;">喜欢</router-link>
		   </div>
		   
		 </div>
		 <div class="UD-box-body"></div>
		 <div class="UD-box-body">
			 
			 <div class="UD-box-body-redu">
				<a style="font-size: small;color: #333333;float: left;">热度: 678 </a> 
			 </div>
			 <div class="UD-box-body-1">
			 		<a style="font-size: large;color: #333333;float: left;">LIBERTY，从简约中领悟品质的真谛 </a>	
					
					<div class="UD-box-body-2">
						<a style="color: #333333;">有没有那么一件单品、一张照片、一副美景或一杯暖饮，让你流连忘返、回味无穷？
						LIBERTY的视觉设计，希望悄悄的留住你的视线，带给你唯一却熟悉的感觉…
						
						</a>
						
					</div>
						 <div class="UD-box-body-sj">
						 		<a style="font-size: small;color: #333333;float: left;margin-top: 5px;">2019/12/30 </a>	
<!-- <router-link to="userdetailone">33</router-link> -->
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
			user: {},
			show: false
		};
	},
	created: function() {
			this.axios.get('http://localhost:8080/api/user').then(res => {
							console.log(res.data.data);
							this.users = res.data.data;
						});
					
			},
	methods:{
		updateUser:function(user){					
			let data = {						
				"id":user.id,						
				"nickname":user.nickname,						
				"address":user.address,						
				"introduction":user.introduction,				
				};				
				var _this = this;				
				axios.put('http://localhost:8080/api/user',JSON.stringify(data))				
				.then(function(response){					
					console.log(response.data.msg);					
					_this.show = false;				
					});			
					},			
					goout: function(){				
						window.location.href= "/UD";			
						}		
						}	
};
</script>

<style scoped="scoped">
	.UD-box-body-sj{
		float: right;
		border-bottom: #000000 1px solid;
		margin-top: 180px;
		width: 21%;
		height: 12%;
		
		/* background-color: #008CBA */
	}
	.UD-box-body-2{
		 display: flex; 
		float: left;
		/* background-color: #3366CC; */
		margin-top: 30px;
		margin-left: 50px;
		width: 70%;
		height: 70%;
		line-height:30px
		
	}
	.UD-box-body-1{
		float: left;
		
		margin-left: 50px;
		width: 83%;
		height: 100%;
		
		/* background-color: #87CEEB; */
	}
	.UD-box-body-redu{
		float: left;
		border-bottom: #000000 1px solid;
		width: 11%;
		height: 12%;
		
		/* background-color: #42B983; */
	}
	.UD-box-body{
		
		margin-top: -290px;
		margin-left: 15%;
		width: 70%;
		height: 15%;
		
		/* background-color: darkgoldenrod; */
	}
	.UD-box-header-3{
		padding-top: 23px;
		margin-top: 60px;
		margin-left: 25%;
		width: 50%;
		height: 9%;
		border-top:#000000 1px solid;
		border-bottom:#000000 1px solid;
		
	}
	.UD-box-header-2{
		padding-top: 20px;
		margin-left: 40%;
		width: 20%;
		height: 10%;
		/* background-color: darkgoldenrod; */
	}
	.UD-box-header-1{
		border-radius: 100%;
		margin-left: 45%;
		width: 11%;
		height: 20%;
		background-image: url(../assets/img/1.jpg);
		background-size: 100%;
		background-repeat: no-repeat;
	}
	.UD-bj-head{
		
		width: 100%;
		height: 6%;
		background-color: rgb(122 251 191);
	}
	#UD-bj{
		position: absolute;
		top: 0;
		left: 0; 
		width: 100%;
		height: 200%;
		background-color: rgb(241 255 250);
		
		
	}
	.UD-box{
		border:#000000 2px solid;
		margin-top: -4.5%;
		margin-left: 1%;
		width: 98%;
		height: 95.5%;
		/* background-color: rgb(241 255 250); */
	}
 .UD-box-header{
	 padding-top: 40px;
	 width: 100%;
	 height: 50%;
	 /* background-color: #3366CC; */
	 
   
  }

 
   .box-body {  
       display: flex;
       -webkit-align-items: stretch;
       align-items: stretch;
       width: 100%;
       height: 80%;
       background-color: rgb(241 255 250);
	   margin-top: 50px;
   }
   
  
  
   
</style>