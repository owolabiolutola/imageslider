

const deer = 'https://i.pinimg.com/736x/20/9a/5e/209a5e17dfbfc8d54a755c3d650c0004.jpg'

const antelope = 'https://121clicks.com/wp-content/uploads/2013/01/Simon_Roy_01.jpg'

const quokka = 'https://i.pinimg.com/236x/5f/64/98/5f6498dfa84607da568e9b1bdd8e2dd3.jpg'

const cave= 'https://static.boredpanda.com/blog/wp-content/uploads/2018/10/wildlife-photographer-of-the-year-2018-natural-history-museum-5bc8325f38fa1__880.jpg' 


const list= [  deer,  cave , antelope, quokka ];


const balls = document.getElementsByClassName('bali'); 

let current = 0;


balls[current].setAttribute("style","background-color:white") 


console.log(balls)

document.getElementById("images").src =list[current];



function changeLeftImageButton(){ 

for (let i = 0; i < balls.length; i++) {
    balls[i].setAttribute("style","background-color:grey") 
  }




    if (current < 0){

        document.getElementById("images").src =list[3] 
        current = 3;

  balls[current].setAttribute("style","background-color:white") 


        return
    }

    balls[current].setAttribute("style","background-color:white") 


 var images = document.getElementById("images").src =list[ current];
 current--

};




function changeRightImageButtons(){ 


for (let i = 0; i < balls.length; i++) {
    balls[i].setAttribute("style","background-color:grey") 
  }

  
    if (current > 3){

        document.getElementById("images").src =list[0] 
        current = 0;
        balls[current].setAttribute("style","background-color:white") 

        return
    }

    balls[current].setAttribute("style","background-color:white") 


 document.getElementById("images").src =list[ current];
 current++
   

 };
   















