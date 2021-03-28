## 字典树
通过创建原型对象的方式，确立一个树的根节点

```
class Trie {
    constructor() {
        this.root = Object.create(null)
    }
    //添加新的节点
    insert(word) {
        
    }
    //找出出现最多的单词
    most() {
        
    }
}
```
- 通过不断的调用insert方法，向字典树中添加新的分支，直到结束
- most方法，通过递归调用的方式，找出结束$节点的最大值，并输出此单词

## KMP
- 模式匹配算法，当不匹配时，移动到上次匹配的位置，进行重新匹配
- 匹配具有自重复的特性

##  wildcard
- 带有*号通配符，最后一个字符，需要尽量多的匹配，需要倒序的方式，从后向前匹配
- 第一个*号之前的内容，需要先匹配，并且精致匹配
- 中间部分的*号内容，需要循环exec匹配
## 扩展方法
- 将 Unicode 编码转换为一个字符串:
String.fromCharCode(72,69,76,76,79)//hello
- 返回字符串第一个字符的 Unicode 编码:
var n = str.charCodeAt(0);// 72
- object in 方法，遍历此对象的属性
