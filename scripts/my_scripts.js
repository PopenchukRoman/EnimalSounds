$(document).ready(function(){
	//alert("document");	
	
	var length = -367;
	var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;
	var sumClix = headclix+eyeclix+noseclix+mouthclix;
		lightning_one();
		lightning_two();
		lightning_three();
		
		function getRandom(num){
			var my_num = Math.floor(Math.random()*num);
			return my_num;
		}
		
		//случаное животное
		$("#btn_randomanimal").click(function(){
			var rand = [getRandom(10), getRandom(10), getRandom(10), getRandom(10)];
			headclix = rand[0];
			eyeclix = rand[1];
			noseclix = rand[2];
			mouthclix = rand[3];
			$("#head").animate({'left':length*headclix+'px'},500);
			$("#eyes").animate({'left':length*rand[1]+'px'},500);
			$("#nose").animate({'left':length*rand[2]+'px'},500);
			$("#mouth").animate({'left':length*rand[3]+'px'},500);
		});
		
		$("#btn_reset").click(function(){
				headclix=0; eyeclix=0; noseclix=0; mouthclix=0; sumClix =0+0;
				$("#head").animate({'left':'0px'},500);
				$("#eyes").animate({'left':'0px'},500);
				$("#nose").animate({'left':'0px'},500);
				$("#mouth").animate({'left':'0px'},500);
			});
			
			$('#head').draggable({axis: "x"});
			$('#eyes').draggable({axis: "x"});
			$('#nose').draggable({axis: "x"});
			$('#mouth').draggable({axis: "x"});
			
			function moveFace(){
				
				//$("#head").draggable({axis: 'x'});
				$('#head').click(function(){
						if(headclix<9){
							$(this).animate({'left':'-=367px'},500);
							headclix+=1;
							sumClix+=1;
						}else{
							$(this).animate({'left':'0px'},500);
							headclix=0;
							sumClix=sumClix-9;
							
						}	
					console.log('headclix: '+headclix);
					console.log('sumClix: '+sumClix);
					
					animalSound();
				});
				
			/*/*/
				$('#eyes').click(function(){
					if(eyeclix<9){
						$(this).animate({'left':'-=367px'},500);
						eyeclix+=1;
						sumClix+=1;
					}else{
						$(this).animate({'left':'0px'},500);
						eyeclix=0;
						sumClix=sumClix-9;
					}
					console.log('eyeclix: '+eyeclix);
					console.log('sumClix: '+sumClix);
					animalSound();
				});
			/*/*/	
				$('#nose').click(function(){
					if(noseclix<9){
						$(this).animate({'left':'-=367px'},500);
						noseclix+=1;
						sumClix+=1;
					}else{
						$(this).animate({'left':'0px'},500);
						noseclix=0;
						sumClix=sumClix-9;
					}
					console.log('noseclix: '+noseclix);
					console.log('sumClix: '+sumClix);
					animalSound();
				});
			/*/*/
				$('#mouth').click(function(){
					if(mouthclix<9){
						$(this).animate({'left':'-=367px'},500);
						mouthclix+=1;
						sumClix+=1;
					}else{
						$(this).animate({'left':'0px'},500);
						mouthclix=0;
						sumClix=sumClix-9;
					}
					console.log('mouthclix: '+mouthclix);
					console.log('sumClix: '+sumClix);
					animalSound();
				});
				
			
			}
			moveFace();
			//Проигрывание звука животного
		
			function animalSound(){
				if(sumClix == 0){
						$("<audio></audio>").attr({
						'src':'sounds/01_lemur.mp3',
						'volume':0.4,
						'autoplay':'autoplay'
						}).appendTo("body");	
				}
				if(sumClix === 4){
						$("<audio></audio>").attr({
						'src':'sounds/02_koala.mp3',
						'volume':0.4,
						'autoplay':'autoplay'
						}).appendTo("body");	
				}
				if(sumClix == 8){
						$("<audio></audio>").attr({
						'src':'sounds/03_burunduk.mp3',
						'volume':0.4,
						'autoplay':'autoplay'
						}).appendTo("body");	
				}
				if(sumClix == 12){
						$("<audio></audio>").attr({
						'src':'sounds/04_rabbit.mp3',
						'volume':0.4,
						'autoplay':'autoplay'
						}).appendTo("body");	
				}
				if(sumClix == 16){
						$("<audio></audio>").attr({
						'src':'sounds/05_tiger.mp3',
						'volume':0.4,
						'autoplay':'autoplay'
						}).appendTo("body");	
				}
				if(sumClix === 20){
						$("<audio></audio>").attr({
						'src':'sounds/06_fox.mp3',
						'volume':0.4,
						'autoplay':'autoplay'
						}).appendTo("body");	
				}
				if(sumClix == 24){
						$("<audio></audio>").attr({
						'src':'sounds/07_bear.mp3',
						'volume':0.4,
						'autoplay':'autoplay'
						}).appendTo("body");	
				}
				if(sumClix == 28){
						$("<audio></audio>").attr({
						'src':'sounds/08_wolf.mp3',
						'volume':0.4,
						'autoplay':'autoplay'
						}).appendTo("body");	
				}
				if(sumClix == 32){
						$("<audio></audio>").attr({
						'src':'sounds/09_deer.mp3',
						'volume':0.4,
						'autoplay':'autoplay'
						}).appendTo("body");	
				}
				if(sumClix == 36){
						$("<audio></audio>").attr({
						'src':'sounds/10_wild_boar.mp3',
						'volume':0.4,
						'autoplay':'autoplay'
						}).appendTo("body");	
				}
			}
			
		
		animalSound();
		
});
	//Данные функции почему-то не работают когда заключены в блок (document).ready ...???
	function lightning_one(){
		$("#container #lightning1").fadeIn(250).fadeOut(250);
		setTimeout("lightning_one()",4000);
	}

	function lightning_two(){
		$("#container #lightning2").fadeIn("fast").fadeOut("fast");
		setTimeout("lightning_two()",5000);
	}

	function lightning_three(){
		$("#container #lightning3").fadeIn("fast").fadeOut("fast");
		setTimeout("lightning_three()",7000);
	}

