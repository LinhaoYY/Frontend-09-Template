# css语法
##### at-rules:
- @charset 
- @import
- @media
- @page  网页分页
- @counter-style 写列表时，定制列表形状
- @keyframes
- @fontface
- @supports
- @namespace

##### rules
- selector
- declaration
-     key,value

##### 选择器语法
###### 复合选择器
- <简单选择器><简单选择器><简单选择器>
- *或者div必须写在最前面

###### 复杂选择器
- <复合选择器><space><复合选择器>
- <复合选择器>">"<复合选择器>
- <复合选择器>"~"<复合选择器>
- <复合选择器>"+"<复合选择器>
- <复合选择器>"||"<复合选择器>   

###### 选择器优先级


```
[0,2,1,1]
s = 0 * n^3 + 2 * n^2+ 1 * n^1 + 1 * n^0;
n = 任意一个数，但尽量要
```

###### 伪类：
- :any-link  所有的超链接
- :link :visited link没有访问过的超链接  visited访问过的超链接
- 知识点1： 一旦运用了link或者visited后，就不能更改除文字颜色外的其他属性了，因为layout的相关属性会重新渲染页面此时会读取visited数据，知道用户浏览的url，不符合安全性
- :hover
- :active
- :focus
- :target

###### 树结构伪类：
- :empty
- :nth-child(odd|even)
- :nth-last-child()
- :first-child :last-child :only-child

###### 逻辑型：
- :not伪类
- :where :has
- 

##### 伪元素
- ::before
- ::after


```
<div>
<::before/>
content content
<::after/>
</div>
```


- ::first-line
    
```
属性：
    font系列
    color系列
    background系列
    word-spacing
    letter-spacing
    text-decoration
    text-transform
    line-height
```

- ::first-letter
    
```
属性：
    font系列
    color系列
    background系列
    word-spacing
    letter-spacing
    text-decoration
    text-transform
    line-height
    float
    vertical-align
    盒模型系列：padding，margin，border
```


```
例如：
<div>
<::first-letter>c</::first-letter>
content content
</div>
```



##### 思考题：
first-letter和first-line的原理与 伪类中first-child和其他child类似；
first-letter和first-child他们在layout之前就可以被确定，不破坏结构，而first-line，需要渲染中才能确定