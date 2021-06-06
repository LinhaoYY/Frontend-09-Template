组件化：
Properties  属性

Methods     方法   

Inherit     继承关系

----> 对象也有前三种

Attribute   属性

Config & State 状态

Event   向组件外传递

Lifecycle   生命周期

Children    树形结构的必要条件


attribute 和 properties 的区别

attribute强调描述性

property强调从属关系

例子：

<my-component attribute='v'/>

myComponent.getAttribute('a')

myComponent.setAttribute('a', 'value')

property:

myComponent.a = 'value'
