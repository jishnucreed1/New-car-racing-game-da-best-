class Game{
    constructor(){}

    getState(){
        var ref=database.ref('gameState');
        ref.on('value',function(data){
            gameState=data.val();
        });
    }

    updateState(state){
        database.ref('/').update({
            gameState:state
        });
    }

    start(){
        if(gameState==0){
            player=new Player();
            player.getCount();

            form=new Form();
            form.display();
            
        }
        car1=createSprite(100,200);
        car1.addImage("car1",car1Img)
        car2=createSprite(300,200);
        car2.addImage('car2',car2Img)
        car3=createSprite(500,200);
        car3.addImage('car3',car3Img)
        car4=createSprite(700,200);
        car4.addImage('car4',car4Img)
        cars=[car1,car2,car3,car4];

    }

    play(){
        form.hide();
        Player. getPlayerInfo();
        if(allPlayers!==undefined){

            background('#654321');
            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);

           // var ypos=150
            var xpos=230;
            var ypos=0;
            var carIndex=0;
            for(var plr in allPlayers){
                carIndex++;
                xpos+=210;
                ypos=displayHeight-allPlayers[plr].distance;
                cars[carIndex-1].x=xpos;
                cars[carIndex-1].y=ypos;

                if(carIndex===player.index){
                  
                    
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[carIndex-1].y;
                             

                }
               /* ypos+=50;
                textSize(15);
                text(allPlayers[plr].name+' : '+ allPlayers[plr].distance,150,ypos)*/

            }
        }
        if(keyDown(UP_ARROW)&&player.index!==null){
            player.distance+=50;
            player.update();
        }

        if(player.distance>4150){

            gameState=2
        } 
        drawSprites();
    }

    end(){

        alert('gameEnded')


    }
}