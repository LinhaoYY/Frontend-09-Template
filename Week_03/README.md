# 词法语法分析
### 词法：
四则运算符：

```
"Number", "Whitespace", "LineTerminator", "*", "/", "+", "-"
```
利用正则表达式exec方法，将运算中的符合条件的运算符抛出一个带type，value的对象数组

```
正则表达式： /([0-9\.]+)|([ \t]+)|([\n\r]+)|(\*)|(\/)|(\+)|(\-)/g
```



### 语法：
通过递归的方式，不断的将数据处理为以下格式：
- Expression
> AdditiveExpression + end

```
if(source[0].type === 'AdditiveExpression' && source[1] && source[1].type === 'EOF') {
    let node = {
        type: 'Expression',
        children: [source.shift(), source.shift()]
    }
    source.unshift(node);
    return source
}
//不满足if条件时，需先调用AdditiveExpression函数，处理数据，再回调自己
AdditiveExpression(tokens)
return Expression(tokens)
```

- AdditiveExpression
> AdditiveExpression <+> MultiplicativeExpression
> AdditiveExpression <-> MultiplicativeExpression
   
```
if(source[0].type == 'MultiplicativeExpression') {
    let node = {
        type: 'AdditiveExpression',
        children: [source[0]]
    }
    source[0] = node;
    return AdditiveExpression(source)
}
...
...
...
//不满足if条件时，需先调用MultiplicativeExpression进行数据处理，再回调自己：
MultiplicativeExpression(source)
return AdditiveExpression(source)

```

- MultiplicativeExpression
> MultiplicativeExpression <*> Number   
> MultiplicativeExpression </> Number
```
if(source[0].type === "Number") {
    let node = {
        type: 'MultiplicativeExpression',
        children: [source[0]]
    }
    source[0] = node;
    return MultiplicativeExpression(source)
}  
```


## # 扩展
##### 正则方法：
RegExp的lastIndex属性：
- 在正则表达式设置标志g时
- 调用方法regExp.exec()或RegExp.test()时
都以lastIndex属性所指的位置，作为下次检索的起始点

##### generator函数：
generator函数是一个普通函数。
###### 特征：
- function关键字和函数名之间有一个星号
- 函数内部使用yield表达式，定义不同的内部状态
- generator函数调用后，不会立即执行，需要再次执行next()方法，结束时,done状态为true

for..in..可直接遍历迭代对象，map，set，array等数据结构