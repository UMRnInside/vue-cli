<template>
	<ul class="c-course">
		<router-link to="/detail">
			<li v-for="item in arrList">
				<img :src="item.imgUrl" />
				<h1>{{item.title}}</h1>
				<p>{{item.msg}}</p>
			</li>
		</router-link>
	</ul>
</template>
<script>
	export default{
        // 接收传参,说明数组类型Array
		props:{
			arrList: Array
		}
	}
</script>
<style scoped>
    a{
        text-decoration: none;
    }
	.c-course{
		padding: 24px 0;
		background: #fff;
	}
	.c-course li{
		position: relative;
		width: 335px;
		height: 72px;
		margin : 0 auto 24px;
	}
	.c-course li:hover{
		transform: scale(1.1) translateX(3%);
		transition: transform .2s ease-in-out;
	}
	.c-course li img{
		position: absolute;
		width: 108px;
		border-radius: 5px;
	}
	.c-course li h1{
		font-size: 15px;
		padding-left: 124px;
		color: #2B333B;
	}
	.c-course li p{
		font-size: 12px;
		padding: 8px 0 0 124px;
		color: #71777D;
	}
</style>