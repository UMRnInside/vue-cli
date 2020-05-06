<template>
    <div>
        <!-- 5.初始化dom大小 -->
        <div id="main" style="width: 700px; height:400px; margin: 40px auto;"></div>
    </div>
</template>

<script>
    // 1.引入echarts
    import echarts from 'echarts'
    export default {
        data() {
            return {

            }
        },
        methods: {
            init() {
                // 2.基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(document.getElementById('main'));

                // 3.指定图表的配置项和数据
                var option = {
                    title: {
                        // 图标大标题
                        text: '疫情趋势图'
                    },
                    tooltip: {
                        // 对齐线
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    legend: {
                        // 数据标题
                        data: ['确诊人数', '疑似病例']
                    },
                    xAxis: {
                        // x轴坐标名称
                        data: ["05-01", "05-02", "05-03", "05-04", "05-05", "05-06"]
                    },
                    yAxis: {},
                    // 数据
                    series: [
                        {
                            name: '确诊人数',
                            type: 'line',
                            data: [5, 20, 36, 10, 10, 20]
                        },
                        {
                            name: '疑似病例',
                            type: 'line',
                            data: [15, 270, 306, 100, 150, 210]
                        }
                    ]
                };

                // 4.使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        },
        mounted() {
            this.init();
        },
    }
</script>

<style>

</style>