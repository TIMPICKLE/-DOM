window.dom = {
    find(selecter,scope){
        //第一个写元素  第二个参数写范围
        result = (scope || document).querySelectorAll(selecter)
        //得到的result是一个数组
        return result
    },
    style(node, name ,value){
        //用于修改元素的样式 传入三个参数  节点 节点名字 要搞成什么样式
        if (arguments.length === 3){
            node.style[name] = value
        }else if(arguments.length === 2){
            if(typeof name === 'string'){
                return node.style[name]
            }else if(name instanceof Object){
                for(let key in object){
                    node.style[key] = object[key]
                }
            }
        }
    },
    each(nodeList,fn){
        //遍历所有的节点
        let i = 0;
        for(let i=0;i<nodeList.length; i++){
            fn.call(null,nodeList[i])
        }

    },

}