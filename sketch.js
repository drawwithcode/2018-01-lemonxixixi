function setup(){
  createCanvas(600,800);
}
function draw(){
	background(255);
	//ears&neck
	noStroke();
	fill(191,66,66);
	ellipse(210,153,60);
	ellipse(390,153,60);
		rectMode(CENTER);
	fill(191,66,66);
	rect(300,205,30,20);

	//head
  fill(83,183,148);
	noStroke();
	arc(300, 150,200, 200, PI, TWO_PI, OPEN);
	rect(300,175,200,50);

	//eyes
	fill(76,56,68);
	ellipse(265,110,30);
	ellipse(335,110,30);
	//mouth
	rect(300, 170, 130, 25, 25);
//neck clouth
	rect(300,240,160,50,20);
		//shoulders
stroke(76,56,68);
	strokeWeight(15);
	line(130,300,100,340);
	line(470,300,500,340);
	line(90,360,95,420);
		line(510,360,505,420);

	strokeWeight(10);
	stroke(191,66,66);
	noFill();
	arc(97, 450, 50, 50, PI,TWO_PI , OPEN);
		arc(502, 450, 50, 50, PI,TWO_PI , OPEN);
noStroke();
	fill(191,66,66);
ellipse(140,300,55);
	ellipse(460,300,55);
	fill(76,56,68);
	rect(185,300,90,100,30);
	rect(415,300,90,100,30);

	fill(222,185,82);
ellipse(510,360,60);
	ellipse(90,360,60);

	//leg
  fill(191,66,66);
	rectMode(CORNER);
	rect(245,450,25,175);
  rect(320,450,25,175);

		rectMode(CENTER);
	  fill(83,183,148);
	rect(257,560,40,100);
	rect(333,560,40,100);

	rectMode(CENTER);
		fill(76,56,68);
	rect(300,467,170,50,40);

	fill(191,66,66);
	ellipse(257,565,50);
	ellipse(333,565,50);

	//foot
  fill(76,56,68);
	arc(257,650,60,60, PI,TWO_PI);
	arc(333,650,60,60, PI,TWO_PI);

	//body
	rectMode(CENTER);
	fill(83,183,148);
	rect(300,350,235,235,5);

	fill(191,66,66);
	ellipse(300,350,120);
		fill(221,189,86);
	rect(300,350,75,12,10);
	rect(300,325,75,12,10);
	rect(300,375,75,12,10);
}
