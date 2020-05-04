window.onload = function(){
    new Vue({
        el: "#app",
        data: {
            input: '',
            cur: 1,
            items: [
                {name:'学习计划1', check: false},
                {name:'学习计划2', check: false},
                {name:'学习计划3', check: true},
                {name:'学习计划4', check: true},
                {name:'学习计划5', check: true}
            ],
            newItems: []
        },
        methods: {
            add(){
                if(!this.input){
                    alert("请输入计划！");
                }else{
                    this.items.unshift({name:this.input, check: false});
                    this.input = '';    //清除数据
                    this.filterItem(this.cur);
                }
            },
            del(item){
                // 删除的是name对应的那个数据，不可以按照索引去找，否则会出错
                var i = this.items.findIndex(el => el.name == item.name)
                this.items.splice(i,1);
                this.filterItem(this.cur);
            },
            filterItem(n){  //筛选数据
                this.cur = n;
                if(n == 1) {
                    this.newItems = this.items;
                }else if(n == 2) {
                    this.newItems = this.items.filter(item => item.check);
                }else if(n == 3){
                    this.newItems = this.items.filter(item => !item.check);
                }
                // 数组方法filter：array.filter(function(currentValue,index,arr), thisValue)
                // 数组中每个元素都会执行function
            },
            delall(){
                if(this.cur == 1){
                    this.items = [];
                }else if(this.cur == 2){
                    this.items = this.items.filter(item => !item.check);
                }else if(this.cur == 3){
                    this.items = this.items.filter(item => item.check);
                }
                this.filterItem(this.cur);
            },
            rearr(item){
                let i = this.items.findIndex(el => el.name == item.name)
                let res = this.items[i];
                this.items.splice(i,1);
                if(item.check){
                    this.items.unshift(res);
                }else{
                    this.items.push(res);
                }
                item.check = !item.check;
                this.filterItem(this.cur);
            }
        },
        // computed的意思是计算属性，即计算后的一个属性，不是函数
        computed: {
            cal(){
                return this.items.filter(item => item.check).length;
            }
        },
        mounted() {
            this.filterItem(this.cur);
        }
    })
}