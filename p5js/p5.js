    function setup(){
        createCanvas(700,750);
    }
    function draw(){
        stroke("black");
        background("#7c8874");

        fill("#893229");
        strokeWeight(3);
        circle(width/2,150,150); //balloon

        stroke("black");
        strokeWeight(1);
        fill("black");
        line(340,224,340,300); //line 224
        line(360,225,340,300) //line cross 225
        line(340,224,360,300); //line cross 224
        arc(350, 300, 20, 30, 0, PI); //bottom of balloon 300
        line(360,225,360,390); //line 225

        noStroke();
        fill("#846c43");
        circle(0,130,200);  //half circle left
        rect(0,130,100,190);  //connecting to half circle
        stroke('black');
        strokeWeight(4);
        line(5,320,10,100); //tree trunk
        line(8,200,50,130); //branch 
        line(7,240,60,170); //branch

        noStroke();
        fill("#6b4f37");
        rect(0,320,100,250);  //red/brown
        rect(100,445,50,125);  //connecting to above - red/yellow

        strokeWeight(2);
        //stroke("black");
        fill("#154735");
        rect(150,445,40,125);  //green

        fill("#bca527");
        square(100,320,125);  //yellow square

        fill("#b13130");
        triangle(150,445,190,445,150,415);  //red triangle

        fill("#3a2f2d");
        rect(190,445,110,125); //brown rectangle

        noStroke();
        fill("#a77873");
        rect(290,445,40,125);  //pink rectangle
        triangle(290,570,330,570,330,610); //pink triangle

        strokeWeight(2);
        //stroke("black");
        fill("#343564");
        triangle(290,445,330,415,330,445); //blue rectangle

        noStroke();
        fill("#424a3e");
        rect(0,570,290,180); //bottom green
        triangle(290,570,290,750,500,750); //bottom triangle

        strokeWeight(2);
        //stroke("black");
        fill("#a1895f");
        triangle(700,0,550,200,700,200); //red triangle right
        rect(550,200,150,550); //right side

        fill("#1a1e21");
        rect(520,220,30,40); //black rectangle

        fill("#8b7943");
        rect(550,260,40,50); //yellow rectangle
        rect(460,310,90,120); //yellow rectangle

        fill("#1b482c");
        rect(550,430,50,100); //green rectangle

        fill("#8a2822");
        rect(500,530,50,220);  //red rectangle
    }
    

