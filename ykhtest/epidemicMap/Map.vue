<template>
    <div class="map">
        <div id="main" style="width: 1000px; height:550px; margin: 0 auto 50px;"></div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    //引入中国地图
    import 'echarts/map/js/china.js'
    // 引入jsonp, 跨域请求
    import jsonp from 'jsonp'
    const option = {
        // 标题
        title: {
            text: '实时疫情地图',
            textStyle: {
                color: '#f40',
                fontSize: 30
            },
            x: 'center'//居中
        },
        // 数据
        series: [
            {
                //图标的类型，有line、map等
                type: 'map',
                map: 'china',
                data: [],
                //图形上的文本标签，用于说明图形数据信息
                label: {
                    show: true,
                    color: 'purple',
                    fontSize: 11
                },
                //缩放比例
                zoom: 1.2,
                // 区域多边形（每个省）的图形样式
                itemStyle: {
                    borderColor: '#abcedf'
                },
                // 鼠标移入后，区域多边形的图形样式
                emphasis: {
                    label: {
                        color: '#000',
                        fontSize: 14
                    },
                    itemStyle: {
                        areaColor: '#abcdef'
                    },
                }
            }
        ],
        // 提示信息
        tooltip: {
            // 地图 : {a}（系列名称），{b}（data.name），{c}（data.value）
            formatter: '地区：{b}<br/>累计确诊：{c}'
        },
        // 视觉地图
        visualMap: {
            // 分段型
            type: 'piecewise',
            pieces: [
                { min: 20000 }, // 不指定 max，表示 max 为无限大（Infinity）。
                { min: 1000, max: 19999 },
                { min: 500, max: 999 },
                { min: 300, max: 499 },
                { min: 100, max: 299 },
                { min: 50, max: 99 },
                { max:49 }   
                //{ value: 10, color: 'red' }表示 value 等于 10 的情况下，修改文字颜色为red
                 
                // 不指定 min，表示 min 为无限大（-Infinity）。
            ]
            // 连续型
            // min:0,
            // max:20000,
            // text:['High','Low'],
            // inRange:{
            //     color:['blue','green','yellow','red']
            // },
            // // 范围可修改拖拽
            // calculable:true,
            // // 是否实时更新
            // realtime: true
        },
        // 其他工具
        toolbox:{
            feature:{
                // 保存为图片
                saveAsImage:{}
            }
        }
    };
    export default {
        data() {
            return {
                myChart: ''
            }
        },
        methods: {
            init() {
                // 基于准备好的dom，初始化echarts实例
                this.myChart = echarts.init(document.getElementById('main'));
                // 使用刚指定的配置项和数据显示图表
                this.myChart.setOption(option);
            },
            getData() {
                jsonp('http://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427',(err, data) => {
                    // 数据在 data.data.list
                    var lists = data.data.list.map(item => {
                        return {name: item.name, value: item.value}
                    });
                    // 赋值
                    option.series[0].data = lists;
                    // 加载
                    this.myChart.setOption(option);
                })
            }
        },
        mounted() {
            this.init();
            // 真实数据获取
            // http://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427
            this.getData();
        },
    }
</script>