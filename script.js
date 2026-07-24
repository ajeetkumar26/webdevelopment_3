const questions = [

{
question:"What does HTML stand for?",
answers:[
"Hyper Text Markup Language",
"High Transfer Machine Language",
"Hyperlinks Text Management Language",
"Home Tool Markup Language"
],
correct:0
},

{
question:"Which language styles web pages?",
answers:[
"Python",
"Java",
"CSS",
"C++"
],
correct:2
},

{
question:"Which language makes websites interactive?",
answers:[
"HTML",
"CSS",
"JavaScript",
"SQL"
],
correct:2
}

];

let currentQuestion=0;
let score=0;

const question=document.getElementById("question");
const answers=document.getElementById("answers");
const nextBtn=document.getElementById("nextBtn");
const scoreText=document.getElementById("score");

function loadQuestion(){

question.textContent=questions[currentQuestion].question;

answers.innerHTML="";

questions[currentQuestion].answers.forEach((answer,index)=>{

const btn=document.createElement("button");

btn.textContent=answer;

btn.onclick=()=>{

if(index===questions[currentQuestion].correct){
score++;
}

nextBtn.style.display="block";

};

answers.appendChild(btn);

});

nextBtn.style.display="none";

}

nextBtn.onclick=()=>{

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}else{

question.textContent="Quiz Finished!";

answers.innerHTML="";

nextBtn.style.display="none";

scoreText.textContent=`Your Score: ${score}/${questions.length}`;

}

};

loadQuestion();
const jokeBtn=document.getElementById("jokeBtn");
const joke=document.getElementById("joke");

jokeBtn.addEventListener("click",()=>{

fetch("https://official-joke-api.appspot.com/random_joke")

.then(response=>response.json())

.then(data=>{

joke.innerHTML=`${data.setup}<br><br><strong>${data.punchline}</strong>`;

})

.catch(()=>{

joke.textContent="Unable to load joke.";

});

});