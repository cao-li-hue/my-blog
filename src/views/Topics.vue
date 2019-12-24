<template>
	<div class="row2">
		<div class="col-5">
			<div v-for="(user, index) in users.slice(0, 5)" :key="index" class="card-m my-shadow">
				<div class="card-header">
				<div class="card-header-1">
					<img :src="user.avatar" style="width:100% ;height:100% ;" />
					</div>
					
					<a style="float: left;margin-left: 55px;margin-top:-26px;color: #333333;">{{ user.nickname }}</a>
					<button style="float: right;background-color: white;border: rgb(164 196 61) 1px solid;width: 60px;height: 40px;
	outline: none;color:rgb(164 196 61);cursor: pointer;border-radius: 10px;margin-top: -35px;" onclick="this.innerHTML='已关注'">关注</button>
					
				</div>

				<div class="card-body">
					<img src="../assets/img/8.jpg" style="width:100% ;height:100%;" /></div>

				<div class="card-body2">
					<p>{{ user.introduction }}</p>
				</div>

				<div class="card-footer">
					
						<span style="color: #333333;">❤️188人喜欢</span>
					
				</div>
			</div>
		</div>
		<div class="col-5">
			<div v-for="(user, index) in users.slice(0, 5)" :key="index" class="card-s my-shadow">
				<div class="card-header">
					<div class="card-header-1">
						<img :src="user.avatar" style="width:100% ;height:100% ;" />
						</div>
					
					<a style="float: left;margin-left: 55px;margin-top:-26px;color: #333333;">{{ user.nickname }}</a>
					<button style="float: right;background-color: white;border: rgb(164 196 61) 1px solid;width: 60px;height: 40px;
					outline: none;color:rgb(164 196 61);cursor: pointer;border-radius: 10px;margin-top: -35px;" onclick="this.innerHTML='已关注'">关注</button>
				
				
				</div>
				<div class="card-body">
					<img src="../assets/img/3.jpg" alt="Card image" style="width:100% ;height:100% ;" /></div>

				<div class="card-body2">
					<p>{{ user.introduction }}</p>
				</div>

				<div class="card-footer">
					
						<span style="color: #333333;">💗111人喜欢</span>
					
				</div>
			</div>
			
		</div>
		<div class="col-5">
			<div v-for="(user, index) in users.slice(0, 4)" :key="index" class="card-b my-shadow">
				<div class="card-header">
					<div class="card-header-1">
						<img :src="user.avatar" style="width:100% ;height:100% ;" />
						</div>
					<a style="float: left;margin-left: 55px;margin-top:-26px;color: #333333;">{{ user.nickname }}</a>
					<button style="float: right;background-color: white;border: rgb(164 196 61) 1px solid;width: 60px;height: 40px;
					outline: none;color:rgb(164 196 61);cursor: pointer;border-radius: 10px;margin-top: -35px;" onclick="this.innerHTML='已关注'">关注</button>
				</div>

				<div class="card-body"><img class="card-body" src="../assets/img/6.jpg" alt="Card image" style="width:100% ;height:100% ;" /></div>

				<div class="card-body2">
					<p>{{ user.introduction }}</p>
				</div>

				<div class="card-footer">
					
						<span style="color: #333333;">🥰112人喜欢</span>
					
				</div>
			</div>
			<!-- <div class="card-b my-shadow"></div>
			<div class="card-b my-shadow"></div>
			<div class="card-b my-shadow"></div> -->
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

<style scoped>
	.card-header-1{
		width: 15%;
		height: 100%;
		background-color: #3366CC;
	}
.row2 {
	top: 130px;
	left: 140px;
	position: absolute;
	width: 80%;
	height: 1800px;
	display: flex;
	/* justify-content: space-around; */
	/* background: #000000; */
}
.col-5 {
	width: 40%;
	height: 1800px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	/* background-color: #008CBA; */
}
.card-m {
	
	width: 80%;
	height: 19%;
	background-color: rgb(255 255 255);
	border-radius: 5px;
	
}
.card-s {
	
	background-color: rgb(255 255 255);
	width: 80%;
	height: 18%;
	
	border-radius: 5px;
}
.card-b {
	background-color: rgb(255 255 255);
	width: 80%;
	height: 22%;
	
	border-radius: 5px;
}
.card-header {
	/* display: flex; */
	padding: 20px;
	width: 100%;
	height: 20%;
	padding-bottom: 10px;
	/* background-color: #aaaaaa; */
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
}
.card-body {
	padding: 7px;
	width: 100%;
	height: 50%;
	/* background-color: #87ceeb; */
}
.card-body2 {
	width: 100%;
	height: 15%;
	/* background-color: #cccccc; */
}
.card-footer {
	width: 100%;
	height: 10%;
	border-top: #e2e2e2 1px solid;
	/* background-color: #008b8b; */
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
}
.button {
	
	float: right;
	background-color: white;
	border: rgb(164 196 61) 1px solid;
	width: 60px;
	height: 40px;
	outline: none;
	color:rgb(164 196 61);

	cursor: pointer;
	border-radius: 12px;
}
</style>
