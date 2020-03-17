let userscore=0;
let robotscore=0;

let display_userscore=document.querySelector('.sq1');
let display_robotscore=document.querySelector('.sq2');

function action(id){
  if(checkscore(userscore,robotscore))
  {
      let userchoice;
    let imageValue=document.getElementById(id);
    if(id==1){
        userchoice='rock';
    }
    else if(id==2){
        userchoice='paper';
    }
    else if(id==3){
        userchoice='scissor';
    }
    else {
    }
    let choices=['rock','paper','scissor'];
    let val=Math.floor(Math.random() * 3);
    let robotchoice=choices[val];
    let divresult=document.querySelector('.rectangle');
    divresult.innerHTML=run(userchoice,robotchoice);
}
}

function checkscore(a,b)
{
  let button=document.querySelector('button');
  let divresult=document.querySelector('.rectangle');
  if(a==5 || b==5)
  {
    button.classList.add('visible');
    if(a==5)
    {
      divresult.innerHTML='Congrats You Won 5 Rounds';
      return false;
    }
    else
    {
      divresult.innerHTML='You Lost Five Rounds';
      return false;
    }
  }
  else
  {
    return true;
  }
}
function run(userchoice,robotchoice){
  if(userchoice=='rock')
  {
    if(robotchoice=='scissor')
    {
      display_userscore.innerHTML=++userscore;
      return `user wins <br> ${userchoice} X ${robotchoice}`
    }
    else if(robotchoice=='rock')
    {
      return 'draw '
    }
    else
    {
      display_robotscore.innerHTML=++robotscore;
      return `robot wins <br> ${userchoice} X ${robotchoice}`
    }
  }

  else if(userchoice=='paper')
  {
    if(robotchoice=='rock')
    {
      display_userscore.innerHTML=++userscore;
      return `user wins <br> ${userchoice} X ${robotchoice}`
    }
    else if(robotchoice=='paper')
    {
      return 'draw '
    }
    else
    {
      display_robotscore.innerHTML=++robotscore;
      return `robot wins <br> ${userchoice} X ${robotchoice}`
    }
  }

  else
  {
    if(robotchoice=='paper')
    {
      display_userscore.innerHTML=++userscore;
      return `user wins <br> ${userchoice} X ${robotchoice}`
    }
    else if(robotchoice=='scissor')
    {
      return 'draw '
    }
    else
    {
      display_robotscore.innerHTML=++robotscore;
      return `robot wins <br> ${userchoice} X ${robotchoice}`
    }
  }

}







// let userchoice=document.querySelector('input').textContent;
// console.log(userchoice);
