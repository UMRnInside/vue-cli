window.onload = function(){
    new Vue({
        el:"#my",
        data: {
            leftData:[
                {name: '北京市', id:1, flag:false},
                {name: '天津市', id:2, flag:false},
                {name: '南京市', id:3, flag:false},
                {name: '长沙市', id:4, flag:false},
                {name: '三明市', id:5, flag:false},
                {name: '武汉市', id:6, flag:false},
                {name: '福州市', id:7, flag:false},
                {name: '厦门市', id:8, flag:false},
                {name: '龙岩市', id:9, flag:false},
                {name: '安顺市', id:10, flag:false},
                {name: '贵阳市', id:11, flag:false},
                {name: '重庆市', id:12, flag:false},
                {name: '黑龙江市', id:13, flag:false},
                {name: '怀化市', id:14, flag:false},
                {name: '莆田市', id:15, flag:false},
                {name: '杭州市', id:16, flag:false},
                {name: '南昌市', id:17, flag:false},
                {name: '广州市', id:18, flag:false},
                {name: '惠州市', id:19, flag:false},
                {name: '平潭市', id:20, flag:false},
                {name: '福清市', id:21, flag:false},
                {name: '漳州市', id:22, flag:false},
                {name: '南平市', id:23, flag:false},
                {name: '绍兴市', id:24, flag:false},
                {name: '宁波市', id:25, flag:false},
                {name: '上海市', id:26, flag:false},
                {name: '苏州市', id:27, flag:false}
            ],
            rightData: []
        },
        methods: {
            add(item){
                item.flag = true;
                // 推测为浅拷贝
                this.rightData.push(item);
                // 数组去重es6
                this.rightData = [...new Set(this.rightData)];
                // 数组去重es5
                // for (let i = 0; i < this.rightData.length; i++) {
                //     if(item.id == this.rightData[i].id) return;
                // }
                // 数组去重filter()
                // let temp = this.rightData.filter(function(v){
                //     return v.id == item.id;
                // });
                // if(temp.length > 0) return;

            },
            del(item2, index){
                this.rightData.splice(index,1);
                item2.flag = false;
            }
        },
    })
}