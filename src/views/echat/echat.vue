<template>
    <div ref="myChart" style="width: 600px;height:400px;"></div>
    <div> 时间：{{ time }} </div>
    <div></div>
</template>

<script>
// import * as echarts from 'echarts';
export default {
    data() {
        return {
            time:""
        }
    },
    created(){
        this.initEchart()
    },
    methods: {
        initEchart() {
            var option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data: ['销量']
                },
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [
                    {
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }
                ]
            };
          this.$refs['myChart'].setOption(option);
        }
    }
}
</script>

<style></style>