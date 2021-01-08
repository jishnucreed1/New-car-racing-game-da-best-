class Form{
    constructor(){
        this.title=createElement('h2','CAR RACING GAME BOIIII');
        this.input=createInput('TYPE YOUR NAME HERE ONLY');
        this.button=createButton('click me boii');
        this.greeting=createElement('h3');

    }

    hide(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
     
       this.title.position(displayWidth/2+350,displayHeight/6);
        
      
        this.input.position (displayWidth/2+350,displayHeight/4+30)
        this.input.size (400,50);

       
     
        this.button.position (displayWidth/2+390,displayHeight/2);
        this.button.size(100,50)
        this.button.mousePressed(()=>{

            this.input.hide  ();
            this.button.hide ();

            player.name=this.input.value();
            playerCount++;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html('hello'+player.name);
            this.greeting.position (displayWidth/2+350,displayHeight/4+30);
            
        });
    }

    
}