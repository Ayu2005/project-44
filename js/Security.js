class Security {

    constructor(){

        // Add code to create the input and button elements
        this.input1=createInput("");
        this.input2=createInput("");
        this.input3=createInput("");

        this.button1=createButton('Check');
        this.button2=createButton('Check');
        this.button3=createButton('Check');


        //this.access1('')=this.input1('');

    


    }

    display(){

        // Add code to make the buttons function as expected
        this.input1.position(100,100);
        this.input1.style('background','orange');

        this.input2.position(700,200);
        this.input2.style('background','cyan');

        this.input3.position(100,300);
        this.input3.style('background','yellow');

        this.button1.position(100,140);

        this.button2.position(700,240);

        this.button3.position(100,340);

        //creating mousePressed function for button 1
        this.button1.mousePressed(()=>{
            if(system.authenticate(accessCode1,this.input1.value())){
                this.button1.hide();
                this.input1.hide();
                score++;
            }
        })

         //creating mousePressed function for button 1
        this.button2.mousePressed(()=>{
            if(system.authenticate(accessCode2,this.input2.value())){
                this.button2.hide();
                this.input2.hide();
                score++;
            }
        })

         //creating mousePressed function for button 1
         this.button3.mousePressed(()=>{
            if(system.authenticate(accessCode3,this.input3.value())){
                this.button3.hide();
                this.input3.hide();
                score++;
            }
        })





    }
}