class Calculate{
    //计算注数 active:当前选中的号码 play_name:当前的玩法标识
    //return number 注数
    computeCount(active,play_name){
        let count = 0;
        const exist=this.play_list.has(play_name);
        const arr=new Array(active).fill('0');
        if(exist && play_name.at(0)==='r'){
            count=Calculate.combine(arr,play_name.split('')[1]);
        }
        return count;
    }

    //组合运算 arr:参与组合运算的数组 size:组合运算的基数
    //return number 计算注数
    static combine(arr,size){
        let allResult=[];
        (function f(arr,size,result){
            let arrLen=arr.length;
            if(size>arrLen){
                return;
            }
            if(size === arrLen){
                allResult.push([].concat(result,arr));
            }else{
                for(let i=0;i<arrLen;i++){
                    let newResult=[].concat(result);
                    newResult.push(arr[i]);
                    if(size===1){
                        allResult.push(newResult);
                    }else{
                        let newArr=[].concat(arr);
                        newArr.splice(0,i+1);
                        f(newArr,size-1,newResult);
                    }
                }
            }
        })(arr,size,[])
    }
}
