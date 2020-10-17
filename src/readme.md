# dom封装
## 增 
```
创建新节点
dom.create(`<div><span>chuangjian</span></div>`)
创建弟弟节点
dom.after(node,node2)
创建哥哥节点
dom.before(node,node2)
创建儿子节点
dom.son(parent,son)
创建父亲节点
dom.father(`<div></div>`)
```
## 删
```
删除节点
dom.rm(node)
删除某节点的全部后续节点
dom.rmallson(node)
```
## 改
```
更改属性
dom.attri(node,'attribute','finalTest')
更改文本
dom.text(node,'test的新内容')
更改html
dom.html(node,'string')
更改style
dom.style(node,{border:'1px solid blue',color:'orange'})
增加类属性
dom.class.add(node,'red')
移除类属性
dom.class.rm(node,'red')
添加事件监听
dom.on(node,'click',fn)
删除事件监听
dom.off(node,'click',fn)
```
## 查
```
获取标签数组
dom.find('.red',scope)[0]
获取下一个节点
dom.next(node)
获取上一个节点
dom.previos(node)
获取父节点
dom.parent(node)
获取孩子节点
dom.child(node)
获取兄弟节点
dom.siblings(node)
获取节点数组序号
dom.index(node)
遍历
dom.each(nodes,fn)
```