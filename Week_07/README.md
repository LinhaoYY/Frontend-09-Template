# 优先级关系
## member -> new -> call

Member类
- a.b
- a[b]
- foo`string`
- new.target
- super.b
- super[b]
- new Foo()
New类
- new Foo
Call类
- foo()
- super()
- foo()['b']
- foo().b
- foo()`abc`



# 语句
## conpletion record 语句完成状态

normal,break,continue,return,throw

```
简单语句
expressionstatement  表达式语句 (等号赋值，计算机计算语句)
emptystatement （:）
debuggerstatement（debugger断点）
throwstatement（抛异常语句）
continuestatement（循环语句，当前语句不执行）
breakstatement（循环语句，当前语句和后面的语句不执行不执行）
returnstatement
复合语句
blockstatement
ifstatement
swichstatement
iterationstatement

for循环， do while，while
withstatement
trystatement


声明
functiondeclaration
generatordeclaration
asyncfunctiondeclaraion
asyncgeneratordeclaration
variablestatement
classdeclaration
lexicaldeclaration
```


** 注意 funciton** * 是generator声明

宏任务(macrotask)：

script(整体代码)

setTimeout、setInterval、setImmediate

微任务(microtask)：

Promise

待完善。。。。

