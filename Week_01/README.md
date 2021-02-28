# 学习笔记
## TicTacToe游戏实现（三子棋）
**实现步骤：**
###### 1、绘出背景图
1. 通过创建二维数组的方式，表示棋盘
2. 通过循环遍历二维数组方法，createElement元素，append到页面上
###### 2、鼠标点到相应位置是，会有子落在表格上，分别用两个不同的字母代表双方
1. 添加click事件，判断当前位置上的值，并给相应的图案
2. 每次要更新dom
3. 利用小技巧，当前棋子用1或2表示，当定值3减掉其中的任意一个，都为对手棋子，用来换棋子
###### 3、在每一步落子后判断是否有胜利者
1. 判断胜利是需要循环遍历4个方向，横竖和两斜
###### 4、通过判断落子位置和对方可能落子位置，判断自己的胜负情况
1. 判断自己棋子情况的方式，首先自己是否要赢了，其次，对手是否要赢了

## 异步
- 传统callback方式：setTimeout 层层嵌套


```
 function go() {
      green()
      setTimeout(function() {
        yellow()
        setTimeout(function(){
          red()
          setTimeout(function(){
            go()
          }, 500)
        }, 200)
      }, 1000)
    }
```



- Promise ： 利用异步，可以不停的then
- 
```
function sleep(t) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, t)
  })
}
function go() {
  green();
  sleep(1000).then(() => {
    yellow()
    return sleep(200)
  }).then(() => {
    red()
    return sleep(500)
  }).then(() => {
    go()
  })
}
```

- async await： 利用同步解决异步问题

```
async function go() {
  while(true) {
    green()
    await sleep(1000)
    yellow()
    await sleep(200)
    red()
    await sleep(500)
  }
}
```
