## reactive
利用Proxy 的get和set方法，对object对象做一些操作

```
new Proxy(object, {
    set(object, prop, value) {
        object[prop] = value;
        .....
        return object[prop]
    },
    get(object, prop) {
        ......
        return object[prop]
    }
})
```
使用effect函数，执行回调函数

```
function effect(callback) {
    callback();
    console.log(usedReactivties,'usedReactives');
    ...
}
```

- 添加变量callbacks存放回调函数
- 变量reactivities，用于存放修改后的object
- usedReactivties，存放对象属性组成的数组值


## dragable
拖拽原理，利用mouse事件监听
注意要在div的mousedown的事件中，添加其他事件

```
dragable.addEventListener('mousedown', function(event) {
    let startX = event.clientX, startY = event.clientY;
    let up = (event) => {
    //初始位置的记录，第二次后拖拽时的位置，在鼠标上
        baseY = baseY + event.clientY - startY;
        baseX = baseX + event.clientX - startX;
        //为document添加鼠标事件，防止鼠标不在div上时，拖拽失效
        document.removeEventListener('mousemove', down )
        document.removeEventListener('mouseup', up)
    }
    let down = (event) => {
        //要对div做的行为
    }
    //此时添加事件，防止在鼠标up状态时，也触发
    document.addEventListener('mousemove', down)
    document.addEventListener('mouseup', up)
})
```
扩展
range

```
let range = document.createRange()
range.setStart(container.childNodes[0], i)
range.setEnd(container.childNodes[0], i)
range.getBoundingClientRect();
range.insertNode(div元素)
```


