var td = new Array();
			var playing = false;
			var score = 0;
			var beat = 0;
			var success = 0;
			var knock = 0;
			var countDown = 30;
			var interId = null,
				timeId = null;
			//默认的图片地址
			var currentText = "img/start.png";
			//默认的图片大小
			var fWidth=95,fHeight=95;

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
					e.style.top=x+'px'; 
					setTimeout(animate,Math.min(25,time-elapsed));
				}
				else
				{
			  		e.style.cssText=originalStyle;
				}
			}// end animate
		}// end shake

			/*function shake(){
				var originalStyle=$("#mainGameArea").style.cssText;
				$("#mainGameArea").style.position='relative';
				$("#mainGameArea").style.left=5+'px';
				$("#mainGameArea").style.cssText=originalStyle;
			}*/

			function changeText(){
    		    var textInput = document.getElementById("textInput");
                currentText = textInput.value;
    		}

    		//上传图片显示的功能，不过现在被删了，看情况再加
            /*function previewImage(file) {
               var img = document.getElementById('preview');
               var reader = new FileReader();

               reader.onload = function () { 
                   img.src = this.result;            
               }
               reader.readAsDataURL(file.files[0]);
            }*/

            function show(){
				if(playing)
				{
					//current用于记录随机数，
					var current = Math.floor(Math.random()*16);
					//下面是修改过的地方，在td节点里创建了img节点用来生成图片
					var myT=document.getElementById("td["+current+"]");

					var img=document.createElement("img");
					img.src=currentText;
					img.width=fWidth;
					img.height=fHeight;
					myT.appendChild(img);

					setTimeout("document.getElementById('td["+current+"]').innerHTML=''",3000);
				}
			}

			function GameOver(){
				timeStop();
				playing = false;
				clearMouse();
				alert("游戏结束！\n你获得的分数为："+score+"\n命中率为："+success);
				success = 0;
				score = 0;
				knock = 0;
				beat = 0;
				countDown = 30;
			}
				
			function timeShow(){
				document.form1.remtime.value = countDown;
				if(countDown == 0)
					{
						GameOver();
						return;
					}
				else
					{
						countDown = countDown-1;
						timeId = setTimeout("timeShow()",1000);
					}
			}

			function timeStop(){
				clearInterval(interId);//clearInterval()方法返回setInterval()方法的id
				clearTimeout(timeId);//clearTime()方法返回setTimeout()的id
			}
				
			

			function clearMouse(){
				for(var i=0;i<=15;i++)
				{
					document.getElementById("td["+i+"]").innerHTML="";
				}
			}

			function hit(id){
				if(playing==false)
				{
					alert("请点击开始游戏");
					return;
				}
				else
				{						
					 beat +=1;
					if(document.getElementById("td["+id+"]").innerHTML!="")
					{
						score += 1;
						knock +=1;
						success = knock/beat;
						document.form1.success.value = success;
						document.form1.score.value = score;
						document.getElementById("td["+id+"]").innerHTML="";
					}
					else
					{
						score += -1;
						success = knock/beat;
						document.form1.success.value = success;
						document.form1.score.value = score;
					}
				}
				shake1();
			}

			function GameStart(){
				playing = true;
				interId = setInterval("show()",1000);
				document.form1.score.value = score;
				document.form1.success.value = success;
				
				timeShow();
			}