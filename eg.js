// 1=================
            var str='I?���love�??�the�?great�?�?wall�in��?beijing',
            str=str.replace(/(\?)([a-z]{1})/g,function(a,b){
                return a.toUpperCase()
            })
            .replace(/[^a-zA-Z]+/g,' ');
            console.log('第一题结果：\n'+str)
// 2================
            var arr=[];
            function circle(count){
                var i=arr.length;
                arr.push(arr.length);
                if(i<count){
                    circle(count)
                }
            }
            circle(100);
            console.log('第二题结果：\n'+arr);
// 3=================
            function mainFunc(args,i){  //主调度方法，两个参数arg:对象（包括调用函数，时间间隔，是否重复调用）序列，i: arg下标
                if(i>=args.length) i=0;  // 下标大于等于args长度，重置为0，重复执行函数。
                var queue=function(func,duration){  //队列方法，顺次执行
                    setTimeout(function(){
                        func();
                        i++;
                        mainFunc(args,i);
                    },duration*1000);
                };
                var repeat=function(func,duration){ //重复调用方法，循环执行
                    func();
                    setTimeout(function(){
                        repeat(func,duration);
                    },duration*1000);
                };
                if(args[i].t>0){ //时间间隔必须大于0，否则重复调用会溢出
                    if(args[i].r){
                        repeat(args[i].f,args[i].t);
                        i++;
                        mainFunc(args,i);
                    }else{
                        queue(args[i].f,args[i].t);
                    }
                }else{ //时间间隔小于等于0则函数不执行，继续执行arg[i+1]
                    i++;
                    mainFunc(args,i);
                }
            };
            var aa=function(){   // 定义若干自定义函数
                    console.log('aa');
                },
                bb=function(){
                    console.log('bb');
                },
                cc=function(){
                    console.log('cc');
                },
                dd=function(){
                    console.log('dd');
                };
            
            mainFunc([{    
                t:2,  //延迟执行时间，单位：秒
                r:true, //是否循环执行
                f:aa //自定义函数名
            },{
                t:1,
                r:false,
                f:bb
            },{
                t:2,
                r:false,
                f:cc
            },{
                t:0,
                r:true,
                f:dd
            }],0);//默认从下标0的args开始
