window.dom = {
    create(String) {
        const container = document.createElement('template');//template可以容纳任意元素，要是div不能放td或tr
        container.innerHTML = String.trim();//trim可以清楚全部空格文本
        return container.content.firstChild;//template内的元素不能直接通过children拿到，需要用content
    },
    after(node, node2) {//创建弟弟节点
        node.parentNode.insertBefore(node2, nextSibling);//找到node的下一个节点,再插到下一个节点前面
    },
    before(node, node2) {//创建哥哥节点
        node.parentNode.insertBefore(node2, node);
    },
    cChild(parent, node) {//创建孩子节点
        parent.appendChild(node);
    },
    cParent(node , parent ) {//在父子元素1与2之间，插入一个2的父元素3，即132的爷父子关系 
        dom.before(node, parent);
        dom.son(parent, node);
    },
    rm(node) {//删除节点
        node.parentNode.removeChild(node);
        return node;//保留节点的引用
    },
    rmChild(node) {//删除所有孩子节点
        //const childNodes = node.childNodes;等于const { childNodes } = node;
        const array = [];
        let x = node.firstChild;
        while (x) {
            array.push(dom.rm(node.firstChild));
            x = node.firstChild;
        }
        return array;
    },
    attri(node,name,value) {//（函数重载）
        if (arguments.length === 3) {//设定属性值
            node.setAttribute(name, value);
        } else if (arguments.length === 2) {//查看属性值
            return node.getAttribute(name);//获取的时候返回一个值
        } else {
            console.log('请输入两个或者三个参数');
        }
    },
    text(node, string) {//适配 
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string;
            } else {
                node.textContent = string;
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        }
    },
    html(node,string) {
        if (arguments.length === 2) {
            node.innerHTML = string;
        } else if (arguments.length === 1) {
            return node.innerHTML;
        }
    },
    
    class: {
        add(node, className) {
            node.classList.add(className);
        },
        rm(node, className) {
            node.classList.remove(className);
        },
        has(node, className) {
            return node.classList.contains(className);
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn);
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn);
    },
    
    parent(node) {//获取父节点
        return node.parentNode;
    },
    child(node) {//获取子节点
        return node.children;
    },
    sibilings(node) {//获取兄弟节点
        return Array.from(node.parentNode.children).filter(n => n !== node);
    },
    next(node) {//获取下一个节点
        let x = node.nextSibling;
        while (x&&x.nodeType === 3) {
            x = x.nextSibling;
        }
        return x;
    },
    previous(node) {//获取上一个节点
        let x = node.previousSibling;
        while (x&&x.nodeType === 3) {
            x = x.previousSibling;
        }
        return x;
    },
    index(node) {//获取节点序号
        let list = dom.children(node.parentNode);
        let i;
        for (i = 0; i < list.length; i++){
            if (list[i] === node) {
                break;
            }
        }
        return i;
    },
    find(selector, scope) {//选择器，第二个参数指定范围，返回的是一个数组，需要加[]
        return (scope || document).querySelectorAll(selector);
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value;
        } else if (arguments.length === 2) {
            return node.style[name]            
        } else if (name instanceof Object) {
            const obj = name;
            for (let key in obj) {
                node.style[key] = obj[key];
            }
        }
    },
    each(nodes, fn) {//遍历节点并执行函数
        for (let i = 0; i < nodes.length; i++)
            fn.call(null, nodes[i]);
    }
}