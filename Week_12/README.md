## 盒模型
###### margin border padding content 组成
box-sizing:
- content-box: width = content
- border-box: width = content + padding + border

## css排版：
### 正常流排版
- 收集盒模型进行
- 计算盒模型在行中的排布
- 计算行的排布

###### BFC  block-level-formatting-context
###### IFC  inline-level-formatting-context
###### 正常流的行级排布
    行内盒（inline-block），他的基线是随盒内文字发生变化
    行模型：
        line-top  行高
        text-top   文字大小，以最大的文字为准
        base-line   文字基线
        text-bottom
        line-bottom
###### 正常流的块级排布
##### 1.float
**float: left | right**

**clear： right | left | both**
- float脱离文档流
- left向左靠
- right向右靠
- clearclear属性找一块干净的空间去执行剩下的float
 
float：left ；在一定情况下会发生重排。例如前面有文字

##### 2.margin折叠
margin上下两个盒，会折叠margin，展示最大的margin值

#### BFC合并
- Block Container: 里面有BFC的
- block-level box: 外面有BFC
- Block-Box = Block Container + Block-level Box(里外都是BFC)
 
###### Block Container
- block
- inline-block
- table-cell
- flex-item
- grid-cell
- tabal-caption
###### Block-level Box( block level | inline-level)
- display:  block\flex\tabel\grid
- display:inlline-block\inline-flex\inline-table

##### 创建BFC
1. float 浮动
1. 绝对定位
1. block-containers（inline-block等）
1. overflow：visible

注意：
默认能容纳正常流的盒，我们都认为他是bfc，例外情况：里外都是bfc如，block box && overflow：visible

#### Flex排版
- 收集盒进行
- 计算盒在主轴方向的排布
- 计算盒在交叉轴方向的排布
##### 容器属性：

- flex-direction:

row/row-reverse/column/column-reverse

- flex-wrap:

nowrap/wrap/wrap-reverse

- flex-flow:

是flex-direction和flex-wrap的简写

- justify-content


flex-start/flex-end/center/space-between/space-around

- align-items:定义项目在交叉轴方向上对齐方式

flex-start/flex-end/center/baseline/stretch

- align-content:定义多轴线的对齐方式，如果只有一条轴线，该属性不起作用

flex-start/flex-end/center/baseline/stretch

##### 项目属性：
- order:项目的排列顺序,数字表示
- flex-grow： 定义项目的放大比例，数字表示
- flex-shrink： 定义了项目的缩小比例，数字表示
- flex-basis
- flex
- align-self

#### 动画
##### Animation

```
@keyframes mykf {
  from {background: red;}     //相当于 0%
  to {background: yellow;}    // 相当于 100%
}
div {
	animation: mykf 5s infinite;
}

@keyframes mykf {
  0% {top:0;transition: top ease}
  50% {top:30px; transition: top ease-in}
  75% {top: 10px; transition: to ease out}
  100% {top: 0; transition: top linear}
}
```

- animation-name 时间曲线
- animation-duration 动画时长
- animation-timing-function 动画的时间曲线
- animation-delay 动画开始前的延迟
- animation-iteration-count动画的播放次数
- animation-direction 动画的方向


##### transition
- transition-property 要变换的属性
- transition-duration 变换的时长
- transition-timing-function 时间曲线
- transition-delay 延迟