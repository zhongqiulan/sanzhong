//获取鼠标在页面中的位置
function getMPos(e){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

    return {x:scrollLeft+e.clientX,y:scrollTop+e.clientY};
}

//获取非行间样式 -- 获得字符串值
function getStyle(obj,styleName){
	if(obj.currentStyle){
		return obj.currentStyle[styleName];
	}else{
		return getComputedStyle(obj,false)[styleName];
	}
}

//根据ID获取元素
function $id(idStr){
	return document.getElementById(idStr);
}

//根据类名获取元素 -- 获取(包含)classStr类名的元素
function getAClass(parentNode,classStr){
	var aEle = parentNode.getElementsByTagName('*');
	var arr = [];

	for(var i=0;i<aEle.length;i++){
		if(aEle[i].className == classStr){
			arr.push(aEle[i]);
		}
		//类名数组
		var aClassName = aEle[i].className.split(' ');

		for(var j=0;j<aClassName.length;j++){
			if(aClassName[j] == classStr){
				arr.push(aEle[i]);
			}
		}
	}
	return arr;
}

//根据类名获取元素 -- 获取classStr类名的元素
function getAClass(parentNode,classStr){
	var aEle = parentNode.getElementsByTagName('*');
	var arr = [];

	for(var i=0;i<aEle.length;i++){
		if(aEle[i].className == classStr){
			arr.push(aEle[i]);
		}
	}
	return arr;
}

//缓冲运动框架 -- 兼容到CSS2
function startMove(obj, json, fnEnd){
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var bStop=true;		//假设：所有值都已经到了
		
		for(var attr in json){
			if(attr == 'zIndex'){
				obj.style[attr] = json[attr];
				continue;
			}
			var cur=0;
			
			if(attr=='opacity'){
				cur=Math.round(parseFloat(getStyle(obj, attr))*100);
			}
			else{
				cur=parseInt(getStyle(obj, attr));
			}
			
			var speed=(json[attr]-cur)/5;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(cur!=json[attr])
				bStop=false;
			
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}
			else{
				obj.style[attr]=cur+speed+'px';
			}
		}
		
		if(bStop){
			clearInterval(obj.timer);
						
			if(fnEnd)fnEnd();
		}
	}, 30);
}

//弹性运动
function pudMove(obj,json,fn){
	clearInterval(obj.timer);
	var iSpeed = 0;

	obj.timer = setInterval(function(){
		for(var attr in json){
			if(attr == 'opacity'){
				break;
			}else if(attr == 'zIndex'){
				obj.style.zIndex = json[attr];
				break;
			}

			var cur = parseInt(getStyle(obj,attr));
			iSpeed += (json[attr] - cur)/5;
			iSpeed *= 0.7;
			cur += iSpeed;
			if(Math.abs(iSpeed)<1 && Math.abs(cur-json[attr])<1){
				clearInterval(obj.timer);
				obj.style[attr] = json[attr] + 'px';

				if(fn) fn();
			}else{
				obj.style[attr] = cur + iSpeed + 'px';
			}
		}
	}, 30);
}

/*
*弹性运动
*obj:目标元素
*att:要改变的属性名(string)
*target:目标距离
*velocity:变化速度，值越小越快，越大越慢
*/
function flexMove(obj,att,target,velocity) {
	clearInterval(obj.timeId);
	var speed = 0;
	obj.timeId = setInterval(function(){
		speed += (target - parseInt(getStyle(obj,att)))/8;
		//摩擦系数一般选0.7或0.5
		speed *= 0.7;
		if(Math.abs(speed) < 1 && Math.abs(target - parseInt(getStyle(obj,att))) < 1) {
			clearInterval(obj.timeId);
			obj.style[att] = target + 'px';
		}else{
			obj.style[att] = parseInt(getStyle(obj,att)) + speed + 'px';
		}
	},velocity);
}

//绑定事件兼容IE
function addEvent(obj,event,fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+event,fn);
	}else{
		obj.addEventListener(event,fn,false);
	}
}

//封装事件对象鼠标坐标
var eventTool = {
	getEvent:function(e){
		return e||event;
	},
	getClientX:function(e){
		return this.getEvent(e).clientX;
	},
	getClientY:function(e){
		return this.getEvent(e).clientY;
	},
	getPageX:function(e){
		return this.getClientX(e) + window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
	},
	getPageY:function(e){
		return this.getClientY(e) + window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
	},
	stopBubble:function(e){
		e = this.getEvent();
		e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
	}
};

//