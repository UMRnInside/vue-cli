<template>
    <div class="c-header">
        <ul class="header-ul">
            <li class="active">推荐</li>
            <li class="active">课程</li>
            <li class="active">实战</li>
            <li class="active">职业路线</li>
            <li class="header-search"><img src="../../assets/search.png"></li>
            <li class="header-history"><img src="../../assets/history.png" /></li>
        </ul>
    </div>
</template>
<!-- scoped表示样式仅用于该组件，不影响其他页面 -->
<style scoped>
    .c-header{
        position: fixed;
        z-index: 3;
        width: 375px;
        height: 44px;
        line-height: 44px;
        top: 0;
        background-color: #ffffff;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
    }
    .header-ul{
        font-size: 0;
    }
    .header-ul li{
        display: inline-block;
        margin-left: 20px;
        font-size: 16px;
        color: #71777D;
        text-align: center;
        box-sizing: border-box;
    }
    .header-ul li.active:hover{
        color: #000000;
        font-weight: 700;
        border-bottom: 2px solid #ff0000;
        cursor: pointer;
    }
    .header-ul li.header-search{
        margin-left: 60px;
    }
    .header-ul li img{
        width: 18px;
        vertical-align: middle;
    }
</style>

<script>
export default {
    data(){
        return{
        }
    }
}
</script>