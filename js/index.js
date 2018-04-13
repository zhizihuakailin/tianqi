// var weather;
 var location;
// $.ajax({
// 	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=吕梁",
// 	type: "get",
// 	dataType: "jsonp",
// 	success:function(obj){
// 		weather=obj.data.weather;
// 	}
// 	// data: {param1: 'value1'},
// })
var city_box;

$.ajax({
	url: "https://www.toutiao.com/stream/widget/local_weather/city/",
	type: "get",
	dataType: "jsonp",
	success:function(obj){
		// weather=obj.data.location,
		data=obj.data;
		console.log(data);
		updata1(city_box);
		// console.log(weather.city_name);	
	
	}
	
})
function updata1(city_box){
		var city_box=document.querySelector(".city_box");
		for(var m in data){
			var h1=document.createElement("h1");
			h1.className="remen";
			h1.innerHTML=m;
			city_box.appendChild(h1);
				for (var k in data[m]) {
					var chengshi=document.createElement("div");
         	        chengshi.className="chengshi";
         	        chengshi.innerHTML=k;
         	   	    city_box.appendChild(chengshi);
				    // console.log(k);
			 }
			 
		}

}
	

// 渲染数据
 function updata(weather){
 	// 城市
 	var city_name=document.querySelector(".city");
 	city_name.innerHTML=weather.city_name;
 	// 城市的温度
 	var current_temperature=document.querySelector(".temperature");
 	current_temperature.innerHTML=weather.current_temperature+"°";
 	// 城市的天气
 	var current_condition=document.querySelector(".qing");
 	current_condition.innerHTML=weather.current_condition;
// 城市空气质量
 	var quality_level=document.querySelector("#quality_level");
 	quality_level.innerHTML=weather.quality_level;
// 今天的最高温与最低温
 	 var dat_high_temperature=document.querySelector("#dat_high_temperature");
 	 dat_high_temperature.innerHTML=weather.dat_high_temperature;
 	 var dat_low_temperature=document.querySelector("#dat_low_temperature")+"°";
 	dat_low_temperature.innerHTML=weather.dat_low_temperature;
	// 今天天气晴
	var dat_condition=document.querySelector(".bottom_left");
 	dat_condition.innerHTML=weather.dat_condition;
 	// 今天天气icon
	var dat_weather_icon_id=document.querySelector(".tu1");
	dat_weather_icon_id.style=`background-image:url(img/${weather.dat_weather_icon_id}.png)`;
// 明天的最高温与最低温
 	 var tomorrow_high_temperature=document.querySelector("#tomorrow_high_temperature");
 	tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature;
    var tomorrow_low_temperature=document.querySelector("#tomorrow_low_temperature");
 	tomorrow_low_temperature.innerHTML=weather.tomorrow_low_temperature+"°";
// 明天天气状况
 	var tomorrow_condition=document.querySelector(".tomorrow .today_bottom .bottom_left");
 	tomorrow_condition.innerHTML=weather.tomorrow_condition;
// 明天天气icon
	var tomorrow_weather_icon_id=document.querySelector(".tu2");
	tomorrow_weather_icon_id.style=`background-image:url(img/${weather.tomorrow_weather_icon_id}.png)`;
 // 一天的天气状况，用数组
 
var str="";
 	weather.hourly_forecast.forEach((item,index)=>{
 		// console.log(item,index);
 		 str=str+`
			 <div class="now">
			 	<h1 class="now_time">${item.hour}:00</h1>
			 	<div class="icon" style="background-image:url(img/${item.weather_icon_id}.png)"></div>
				<h2 class="now_tem">${item.temperature}°</h2>
			 </div>
 		 `
 	})
 	$(".house").html(str);
//  for (var i in weather.hourly_forecast){
//  	// 创建now元素
//  	// 创建元素 标签名为div
//  	var now=document.createElement("div");
//  	// 添加类名
//  	now.className="now";
//  	// 插入到页面中，获取父元素；
//  	var house=document.querySelector(".house");
//  	house.appendChild(now);
// // 一天的时间段
//  	var h1=document.createElement("h1");
//  	h1.className="now_time";
//  	h1.innerHTML=weather.hourly_forecast[i].hour+":00";
//  	now.appendChild(h1);
// // 一天的图标
//  	var icon=document.createElement("div");
//  	icon.className="icon";
//  	icon.style=`background-image:url(img/${weather.hourly_forecast[i].weather_icon_id}.png)`;
//  	now.appendChild(icon);
// // 一天的温度
//  	var h2=document.createElement("h2");
//  	h2.className="now_time";
//  	h2.innerHTML=weather.hourly_forecast[i].temperature+"°";
//  	now.appendChild(h2);
//  }
var str2="";
weather.forecast_list.forEach((item,index)=>{
	console.log(item,index);
	str2=str2+`
		<div class="con1">	
		<div class="riqi1">${item.date.slice(5,7)}/${item.date.slice(8)}</div>
			<div class="wea_h">${item.condition}</div>
			<div class="pic_h" style="background-image:url(img/${item.weather_icon_id}.png"></div>
			<div class="xian_h">${item.high_temperature}°</div>
			<div class="xian_l">${item.low_temperature}°</div>
			<div class="wind_l">${item.wind_direction}</div>
			<div class="ji">${item.wind_level}级</div>
		</div>
	`
})
$(".wrap1").html(str2);
// for (var j in weather.forecast_list) {
// 	var con1=document.createElement("div");
// 	con1.className="con1";
// 	var wrap1=document.querySelector(".wrap1");
// 	wrap1.appendChild(con1);
// // 日期 
// 	var date=document.createElement("div");
// 	date.className="data1";
// 	con1.appendChild(date);
//     var date1=document.createElement("span");
// 	date1.className="data1";
// 	date1.innerHTML=weather.forecast_list[j].date.slice(5, 7)+"/"+weather.forecast_list[j].date.slice(8);
// 	date.appendChild(date1);
// // 天气
// 	var wea_h=document.createElement("div");
// 	wea_h.className="wea_h";
// 	wea_h.innerHTML=weather.forecast_list[j].condition;
// 	con1.appendChild(wea_h);
// // 图片weather_icon_id
// 	var pic_h=document.createElement("div");
// 	pic_h.className="pic_h";
// 	pic_h.style=`background-image:url(img/${weather.forecast_list[j].weather_icon_id}.png)`;
// 	con1.appendChild(pic_h);

// // 最高温
// 	var xian=document.createElement("div");
// 	xian.className="xian_h";
// 	xian.innerHTML=weather.forecast_list[j].high_temperature+"°";
// 	con1.appendChild(xian);
// // 最低温
// 	 var diwen=document.createElement("div");
// 	 diwen.className="xian_l";
// 	 diwen.innerHTML=weather.forecast_list[j].low_temperature+"°";
// 	 con1.appendChild(diwen);
// // 风
// 	var feng=document.createElement("div");
// 	feng.className="wea_l";
// 	feng.innerHTML=weather.forecast_list[j].wind_direction;
// 	con1.appendChild(feng);
// // 风级
// 	var fengji=document.createElement("div");
// 	fengji.className="ji";
// 	fengji.innerHTML=weather.forecast_list[j].wind_level+"级";
// 	con1.appendChild(fengji);

// // 日期
				
// }
}

function AJAX(str){
	var url1=`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`;
	$.ajax({
		url:url1,
		type:"get",
		dataType:"jsonp",
		success:function(obj){
			// 获取数据
			var weather=obj.data.weather;
			// 渲染数据；
			 updata(weather);
			 // updata1();
			// 让城市盒子消失
			$(".location").css({"display":"none"});
			$(".hide").addClass("block");

// $(".location").css({"display":"block"});
		}
	})
	
	
}

 // 页面加载完成以后再执行
 window.onload=function(){ 	
 	// updata1();
 	// updata();
 	// 设置鼠标的功能
	$(".chengshi").on("click",function(){

	 		var cityh=this.innerHTML;
	 		AJAX(cityh);
			
	 	})
	 $(".city").on("click",function(){

	 		$(".location").css({"display":"block"});
			
	 	})
	 // 获取焦点
	 $("input").on("focus",function(){
	 	 $(".search_right").html("搜索");
	 })
	var button=document.querySelector(".search_right");
	 console.log(button);
	
	button.onclick=function(){
		var text=button.innerText;
		if(text=="取消"){
			$(".location").css({"display":"none"});
	}
		else{
			var str1=document.querySelector("input").value;
			for (var i in data) {
				for (var j in data[i]) {
					if(str1==j){
						AJAX(str1);
						return;
					}
					// else(str1==j+"市"){
					// 	AJAX(str1);
					// }
				}
				
			}
			alert("没有该城市");
		}
	}
	

 }

// 
	