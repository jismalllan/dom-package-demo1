const div = dom.find('#test>.red')[0] // 获取对应的元素
dom.style(div, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素

/* const div1 = dom.create('span');//创建一个span
console.log(div1);

let div2 = dom.create(`<div id='father'></div>`);//创建父节点
dom.father(test, div2);

const nodes = dom.rmallson(window.rmson);//移除节点全部子元素
console.log(nodes);//数组打印出来长度为7，因为有4个文本包裹

dom.attri(test, 'title', 'finalTest');//更改属性
let title = dom.attri(test, 'title');
console.log(`title:${title}`); 

dom.attri(test);//一个参数返回提示

dom.text(test, 'test的新内容');//更改文本
console.log(dom.text(test));//查文本

dom.style(test, { border: '1px solid red', color: 'blue' });
console.log(dom.style(test, 'border'));
dom.style(test, 'border', '1px solid black');

dom.class.add(test, 'red')

dom.on(test, 'click', () => {
    console.log('点击了按钮')
}) */
