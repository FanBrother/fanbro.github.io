			function shake(){
			 e=document.getElementById("button"); //获取元素
			var time=500; //设置默认时间/如果未经过赋值，则变量值是undefined，if语句返回true 
			var distance=5; // 晃动幅度
			var originalStyle=e.style.cssText; //保存原有样式
			e.style.position='relative';//设置相对定位
			var start=(new Date()).getTime();// 获取初始化时间
			animate(); //执行动画
			function animate(){
		  		var now=(new Date()).getTime();  //获取现在时间
				var elapsed=now-start; //计算从按下按钮开始到执行此语句的时间差
				var fraction=elapsed/time; //按下按钮后经过长度为time的时间后 还原，也就是说动画执行的时间 
				if (fraction<1) 
				{
					var x=distance*Math.sin(fraction*4*Math.PI);
					console.log(fraction,x); //输出的结果表明  此对象进行了左右晃动 而晃动的距离均小于distance 说明这个变量是晃动幅度
					e.style.left=x+'px'; 
					setTimeout(animate,Math.min(25,time-elapsed));
				}
				else
				{
			  		e.style.cssText=originalStyle;
				}
			}// end animate
		}// end shake

			function shake1(){
			e=document.getElementById("mainGameArea"); //获取元素
			var time=500; //设置默认时间/如果未经过赋值，则变量值是undefined，if语句返回true 
			var distance=5; // 晃动幅度
			var originalStyle=e.style.cssText; //保存原有样式
			e.style.position='relative';//设置相对定位
			var start=(new Date()).getTime();// 获取初始化时间
			animate(); //执行动画
			function animate(){
		  		var now=(new Date()).getTime();  //获取现在时间
				var elapsed=now-start; //计算从按下按钮开始到执行此语句的时间差
				var fraction=elapsed/time; //按下按钮后经过长度为time的时间后 还原，也就是说动画执行的时间 
				if (fraction<1) 
				{
					var x=distance*Math.sin(fraction*4*Math.PI);
					console.log(fraction,x); //输出的结果表明  此对象进行了左右晃动 而晃动的距离均小于distance 说明这个变量是晃动幅度
					e.style.left=x+'px'; 
					setTimeout(animate,Math.min(25,time-elapsed));
				}
				else
				{
			  		e.style.cssText=originalStyle;
				}
			}// end animate
		}// end shake

			function GameStart(){
				shake1();
			}