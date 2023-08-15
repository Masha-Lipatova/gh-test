let start = document.getElementById("start-btn");
let dopBtn = document.getElementById("dop-btn");
let dop = document.getElementById("dop");

let stage = document.getElementById("stage");
let input = document.getElementById("input");
let stageBtn = document.getElementById("stage-btn");
let stageAsk = document.getElementById("stage-ask");

let firstStage = document.getElementById("first-stage");
let inputAsk = document.getElementById("input-ask");
let firstStageButton = document.getElementById("first-stage-btn");
let divAsk = document.getElementById("ask");

let secondStage = document.getElementById("second-stage");

let img1 =  document.getElementById("img1");
let img =  document.getElementById("img");

let secondDivAsk = document.getElementById("second-div-ask");
let stage3 = document.getElementById("stage3");


//старт игры 

let startGame = () => {
    stage.classList.remove("hide-first");
    stage.classList.add("visible");
    dopBtn.classList.add("hide-first");
        };

start.addEventListener("click", startGame);




let userName = () => {
stageAsk.textContent = " Молодец!Теперь потверди,что ты не робот";
   setTimeout(function getFirstStage(){
    stage.remove();
    firstStage.classList.remove("hide-first");
    firstStage.classList.add("visible-first");
   },2000);
    }
stageBtn.addEventListener("click",userName)



let checkAsk = () => {
    if(inputAsk.value =="4"){
   divAsk.textContent = "Правильно,продолжаем дальше...";
   setTimeout(function getSecondStage(){
    firstStage.remove();
   secondStage.classList.remove("hide-first");
   secondStage.classList.add("visible-second");
   },2000);
    }else{
        divAsk.textContent = " Неправильно, начни заново";
        setTimeout(function getSecondStage(){
        firstStage.classList.remove("hide-first");
        firstStage.classList.add("visible-first");
        divAsk.textContent="";
        inputAsk.value="";
        },2000);
    }
};

firstStageButton.addEventListener("click",checkAsk);




let trueAsk = () => {
    secondDivAsk.textContent = "Правильно , это цветок.Ты не робот,поэтому переходим к игре";
    setTimeout( function getStage3(){
    secondStage.remove();
    stage3.classList.remove("hide-first");
    stage3.classList.add("visible-3");
    },1000);
    
};

let falseAsk = () => {
    secondDivAsk.textContent = "Не правильно , это не цветок. Попробуй ещё раз";
};


img1.addEventListener("click", falseAsk );
img.addEventListener("click",trueAsk);


let healthMonster = document.getElementById("health-monster");
let healthUser = document.getElementById("health-user");
let btnAttac = document.getElementById("btn-attac");
let btnHealth = document.getElementById("btn-health");
let hpMonster=10;
let hpUser=10;
let stage4 = document.getElementById("stage4");
healthMonster.textContent = hpMonster;
healthUser.textContent = hpUser;

let randomNumber = (min,max) => {
return Math.floor(Math.random()*(max-min))+min;
};

let goAttac = () =>{
   hpMonster--;
   hpUser-= randomNumber(1,4 );
   healthMonster.textContent = hpMonster;
   healthUser.textContent = hpUser;
   if(hpMonster<=0){
    setTimeout( function getStage4(){
        stage3.remove();
        stage4.classList.remove("hide-first");
        stage4.classList.add("visible-3");
        },1000);
        
   }
};

let heal = () => {
  hpUser+=3;
  healthUser.textContent = hpUser;
};

btnAttac.addEventListener("click",goAttac);
btnHealth.addEventListener("click",heal);

 



let trueBtn = document.getElementById("trueBtn");
let div4= document.getElementById("div4");

let trueButton = () => {
div4.textContent = "ты нашёл, переходи на следущий этап";
 setTimeout( function getStage4(){
        stage4.remove();
        stage5.classList.remove("hide-first");
        stage5.classList.add("visible-second");
        },1000);
};

trueBtn.addEventListener("click",trueButton);




let stage5 = document.getElementById("stage5");
let goodWayBtn = document.getElementById("good-way-btn");
let badWayBtn = document.getElementById("bad-way-btn");
let img3 = document.getElementById("img3");
let action = document.getElementById("action");
let stage6 = document.getElementById("stage6");
let stage7 = document.getElementById("stage7");
let goodBtn = document.getElementById("good-btn");
let badBtn = document.getElementById("bad-btn");



let goodWay = () =>{
action.textContent = " Тогда погладь монстрика,чтобы подружиться с ним"; 
setTimeout( function getStage5(){
stage5.remove();
stage6.classList.remove("hide-first");
stage6.classList.add("visible-5");
    },2000);
};

let badWay = () => {         
    action.textContent = "Тогда убей монстрика"; 
    setTimeout( function getStage5(){
    stage5.remove();
    stage6.classList.remove("hide-first");
    stage6.classList.add("visible-5");
        },2000)
    };


goodWayBtn.addEventListener("click",goodWay);
badWayBtn.addEventListener("click",badWay);


let good = () => {
img3.classList.toggle("img-turn")
setTimeout( function getStage6(){
    stage6.remove();
    stage7.classList.remove("hide-first");
    stage7.classList.add("visible-4");
        },3000)
};

let bad = () => {
    img3.classList.toggle("img-right")
    setTimeout( function getStage6(){
        stage6.remove();
        stage7.classList.remove("hide-first");
        stage7.classList.add("visible-4");
            },3000)
    };

goodBtn.addEventListener("click",good);
badBtn.addEventListener("click",bad);

//бонус игра(крестики нолики)

const startDopBtn = () => {
    stage.remove();
    firstStage.remove();
    secondStage.remove();
    stage3.remove();
    stage4.remove();
    stage5.remove();
    stage6.remove();
    stage7.remove();
    dop.classList.remove("hide-first");
    dop.classList.add("visible-dop");
    start.classList.add("hide-first");
};

dopBtn.addEventListener('click',startDopBtn);




let cells = document.querySelectorAll("#table td");
let askk = document.getElementById('askk');

const isVictory = (cells) => {
    let combs = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for (let comb of combs){
        if(cells[comb[0]].textContent==cells[comb[1]].textContent&&
        cells[comb[1]].textContent==cells[comb[2]].textContent&&
        cells[comb[0]].textContent!=''
        ){
return true;
        }
    }
    return false;
};


const starts = (argCells) => {
    let i = 0;

    for(let cell of argCells){
       cell.addEventListener("click",function turn(){
        cell.textContent =["X","O"][i%2];
        cell.removeEventListener("click",turn);

        if(isVictory(argCells)){
            setTimeout(()=>(askk.textContent = `Победил  ${cell.textContent}`));
        }else if (i==8) {
            askk.textContent=("Ничья");
        }
        i++;
       }) ;
    }
};


starts(cells);