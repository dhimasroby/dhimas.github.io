// inisialisasi variabel
var karakterUtama;
var skorPermainan;
var bgPermainan;
var ornamenPermainan;
var tanahMabur = [];
var tanahPaten;
var watuNgalangi = [];
var tulisanHelp;


var lebarLayar = window.innerWidth-160;
var tinggiLayar = window.innerHeight-100;

var mouseX;
var mouseY;
var mouseDown=0;
var lompat = false;


var ukTanah = 64;
var offset = 5;
var batasTanah = tinggiLayar - ukTanah + offset;

//animate req
 var requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function(callback, element){
            window.setTimeout(callback, 1000 / 60);
            };
  })();

//inisialisasi latar game/canvas
var latarGame = {
	//membuat object canvas
    canvas : document.createElement("canvas"),
    //deklarasi fungsi mulai
    start : function() {
        //menyesuaikan ukuran canvas dengan layar
		this.canvas.width = lebarLayar;
        this.canvas.height = tinggiLayar;
        this.canvas.alignItems = "center";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;  
    	this.interval = setInterval(updateLatar, 5);
    	// keyboard event handler, untuk kontrol menggunakan arrow keyboard
		window.addEventListener('keydown', function (e) {
		 	latarGame.key = e.keyCode;
        	}
        )
        window.addEventListener('keyup', function (e) {
            latarGame.key = false;
        	}
        )
	    },
    //deklarasi fungsi reset
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
 }

 //Mulai Permainan
function mulai() {
    karakterUtama = new karakter(140, 170, "img/as.png", 10, 0, "image");     
    skorPermainan = new karakter("30px", "Consolas", "white", 50, 90, "text");
    tulisanHelp = new karakter("30px", "Consolas", "white", 50, 120, "text");
    bgPermainan = new karakter (lebarLayar, tinggiLayar, "img/bg.png", 0, 0, "background");
    //tanahPaten = new karakter ( ukTanah, ukTanah, "img/ground.png", 0, batasTanah, "background");
    ornamenPermainan = new karakter (lebarLayar, tinggiLayar, "img/ornamen.png", 0, 0, "background");
    latarGame.start();
}


//interval funct
function everyinterval(n) {
    if ((latarGame.frameNo / n) % 1 == 0) {return true;}
    return false;
}

//inisialisasi karakter
function karakter(lebar, tinggi, warna, x, y, type) {
	this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = warna;
    }
    this.lebar = lebar;
    this.tinggi = tinggi;
    this.x = x;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 0.05;
    this.gravitySpeed = 0;
    this.topBorder = 1;
    this.bounce = 0.3;
    this.y = y; 
    this.update = function()	{
   		ctx = latarGame.context;
        if (type == "image" || type == "background" ) {
            ctx.drawImage(this.image, this.x, this.y, this.lebar, this.tinggi);
            if (type == "background") {
                ctx.drawImage(this.image, this.x + this.lebar, this.y, this.lebar, this.tinggi);
            }
        } else if (this.type == "text") {
            ctx.font = this.lebar + " " + this.tinggi;
            ctx.fillStyle = warna;
            ctx.fillText(this.text, this.x, this.y);
        } else {
    	   ctx.fillStyle = warna;
    	   ctx.fillRect(this.x, this.y, this.lebar, this.tinggi);
        }
    }

    this.newPos = function() {
    	this.gravitySpeed += this.gravity/2;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed; 
        this.hitBottom();
        this.hitTop();
    } 

    this.newPosBg = function() {
        this.x += this.speedX;
        this.y += this.speedY; 
        if (this.type == "background") {
            if (this.x == -(this.lebar)) {
                this.x = 0;
            }
        }
    } 

    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.lebar);
        var mytop = this.y;
        var mybottom = this.y + (this.tinggi);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.lebar);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.tinggi);
        var crash = true;
        if ((mybottom < othertop) ||
               (mytop > otherbottom) ||
               (myright < otherleft) ||
               (myleft > otherright)) {
           crash = false;
        }
        return crash;
    }

    this.hitBottom = function () {
    	var batasBawah = batasTanah - this.tinggi;
    	if ( this.y > batasBawah ) {
    		this.y = batasBawah;
            this.gravitySpeed = -(this.gravitySpeed * this.bounce);
    	}
    }

    this.hitTop = function () {
        var batasAtas = this.tinggi - 30;
    	if ( this.y < batasAtas ) {
    		this.y = batasAtas;
            this.gravitySpeed = -(this.gravitySpeed * this.topBorder);
    	}
    }
}

//fungsi update latar game
function updateLatar() {
    var x, y;
        // modar nek nubruk
        for (i = 0; i < watuNgalangi.length; i += 1) {
            if (karakterUtama.crashWith(watuNgalangi[i])) {
                latarGame.stop();
            return;
            } 
        }
		// latar ripres
        latarGame.clear();
        latarGame.frameNo += 1;
        
        // bg ripres
        bgPermainan.speedX = -1;
        bgPermainan.newPosBg();
        bgPermainan.update();

        // ornamen ripres
        ornamenPermainan.speedX = -1;
        ornamenPermainan.newPosBg();
        ornamenPermainan.update();

        //tanahPaten.speedX = -1;
        //tanahPaten.newPosBg();
        //tanahPaten.update();

        
        //iki watu sek marai gem over
        if (latarGame.frameNo == 40 || everyinterval(800)) {
             x = latarGame.canvas.width;
             y = latarGame.canvas.height - (ukTanah + ukTanah - 5);
             minHeight = 20;
             maxHeight = 100;
             height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
             watuNgalangi.push(new karakter ( ukTanah, ukTanah, "img/duri.png", x, y, "image"));
        }
        for (i = 0; i < watuNgalangi.length; i += 1) {
            watuNgalangi[i].x += -1;
            watuNgalangi[i].update();
        }

        //iki lemah nemplek
        if (latarGame.frameNo == 10 || everyinterval(64)) {
             x = latarGame.canvas.width;
             tanahMabur.push(new karakter ( ukTanah, ukTanah, "img/ground.png", x, batasTanah, "image"));
        }
        for (i = 0; i < tanahMabur.length; i += 1) {
            tanahMabur[i].x += -1;
            tanahMabur[i].update();
        }
    	
        karakterUtama.newPos();
    	karakterUtama.update();

        tulisanHelp.text="PRESS SPACE TO JUMP!";
        tulisanHelp.update();
        
        skorPermainan.text="SCORE: " + latarGame.frameNo;
        skorPermainan.update();
    	if (latarGame.key && latarGame.key == 32) { 
    			lompatLancar(-3);
				lompatAction(-0.09);
			}
			else {
				lompatAction(0.09);
			}
    	if (latarGame.key && latarGame.key == 40) { 
    		lompatAction(0.2); 
    		}
    }

//fungsi lompat karakter
function lompatAction(n) {
	karakterUtama.gravity = n;
}

//mengurangi lag lompat
function lompatLancar(n) {
	karakterUtama.gravitySpeed = n;
}