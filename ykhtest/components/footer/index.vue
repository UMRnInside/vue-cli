<template>
	<div class="c-footer">
		<ul class="footer-ul">
            <li v-for="item in footerArr">
                <img v-bind:src="item.footerImgUrl">
                <span>{{item.name}}</span>
            </li>
		</ul>
	</div>
</template>

<style scoped>
	.c-footer{
		position: fixed;
		z-index: 3;
		width: 375px;
		background: #fff;
		border-top: 1px solid #F3F5F7;
		bottom: 0;
	}
	.footer-ul{
		display: flex;
	}
	.footer-ul li{
		display: flex;
		height: 50px;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 10px;
	}
	.footer-ul li img{
		width: 24px;
	}
</style>

<script>
import home from '@/assets/home.png';
import sea from '@/assets/sea.png';
import download from '@/assets/download.png';
import me from '@/assets/me.png';

export default {
    data(){
        return{
            footerArr : []
        }
    },
    mounted() {
        this.footerArr = [
            {
                footerImgUrl: home,
                name:'首页'
            },
            {
                footerImgUrl: sea,
                name:'发现'
            },
            {
                footerImgUrl: download,
                name:'下载'
            },
            {
                footerImgUrl: me,
                name:'我的'
            },
        ];
    }
}
</script>