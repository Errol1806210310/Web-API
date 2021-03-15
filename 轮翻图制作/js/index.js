window.addEventListener('load',function(){

  var arrowl=document.querySelector('.arrow-l');
  var arrowr=document.querySelector('.arrow-r');
  var focus=document.querySelector('.focus');

  focus.addEventListener('mouseenter',function(){
  arrowl.style.display="block";
  arrowr.style.display="block";
  })
  
  arrowl.addEventListener('mouseenter',function(){
  arrowl.style.color="orange";
  })
  
  arrowr.addEventListener('mouseenter',function(){
  arrowr.style.color="orange";
  })

  focus.addEventListener('mouseleave',function(){
  arrowl.style.display="none";
  arrowr.style.display="none";
  })
  
  arrowl.addEventListener('mouseleave',function(){
  arrowl.style.color="#fff";
  })
  
  arrowr.addEventListener('mouseleave',function(){
  arrowr.style.color="#fff";
  })
  
 
  
//动态创建小圆圈
var ul=focus.querySelector('ul');
var circle=focus.querySelector('.circle');
for(var i=0;i<ul.children.length;i++)
{
  //创建小圆点
var li=document.createElement('li');
circle.appendChild(li);
//为小圆点赋值index
li.setAttribute('index',i);
//设置第一个li为默认值
circle.children[0].className='current';
//点击事件，排他思想，一边创建li，一边添加事件
li.addEventListener('click',function(){
for(var i=0;i<circle.children.length;i++){
circle.children[i].className='';
}
this.className='current';

//点击小圆点，让照片移动
var focusImgWidth=focus.clientWidth;
//获取索引号，求移动距离，是ul在移动
var index=this.getAttribute('index');
//num为全局变量，js运行时，自动提取到最前面
num=index;
circleNum=index;
var ulLeft=-focusImgWidth*index;
animate(ul,ulLeft);
})
}

//复制第一张图片到ul后面
var first=ul.children[0].cloneNode(true);
ul.appendChild(first);

var focusImgWidth=focus.clientWidth;
var focusImgLeft=ul.clientLeft;
//左右箭头移动
var num=0;
var circleNum=0;



 arrowr.addEventListener('click',function(){
   console.log(num,circleNum);
  if(num==ul.children.length-1)
  {
    ul.style.left=0+'px';  //轮到最后一张图时，左边距离变为0px
    num=0;
  }
    num++;
    circleNum++;
    focusImgLeft=-focusImgWidth*num;
    animate(ul,focusImgLeft);

    for(var i=0;i<circle.children.length;i++)
    {
      circle.children[i].className='';
    }
    circleNum=circleNum%circle.children.length;
    circle.children[circleNum].className='current';
})



// 向右就直接跳到最后一张
arrowl.addEventListener('click',function(){
 if(num==0)
 {
   num=ul.children.length-1;
   ul.style.left=-focusImgWidth*num +'px';
 }
   num--;
    circleNum--;
  focusImgLeft=-focusImgWidth*num;
    animate(ul,focusImgLeft);

    for(var i=0;i<circle.children.length;i++)
    {
      circle.children[i].className='';
    }
    circleNum=circle.children.length-circleNum%circle.children.length;
    circle.children[circleNum].className='current';
 })


})
  //页面中所有图片加载完，执行