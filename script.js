let startButton=document.getElementById('start-btn');
let nextButton=document.getElementById('next-btn');
let questionContainerElement=document.getElementById('question-container');
let shuffledQuestions,currentQuestionIndex;
let questionElement=document.getElementById('question')
let answerButtonsElement=document.getElementById('answer-buttons')



startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setNextQuestion()
})


function startGame(){
startButton.classList.add('hide')
shuffledQuestions=questions.sort(()=>Math.random()-.5)
currentQuestionIndex=0
questionContainerElement.classList.remove('hide')
setNextQuestion()

}

function setNextQuestion(){
    resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText=question.question
    question.answers.forEach(answer => {
       const button=document.createElement('button')
       button.innerText=answer.text
       button.classList.add('btn')

        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)

    });
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton=e.target
    selectedButton.classList.add('selected')     
    selectedButton.classList.add('pointer')  
    answerButtonsElement.classList.add('pointer') 
    const correct=selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button=>{
    setStatusClass(button,button.dataset.correct)
    })
  if(shuffledQuestions.length>currentQuestionIndex+1){
    nextButton.classList.remove('hide')
    }
 else{
    startButton.innerHTML='Restart'
    startButton.classList.remove('hide')
  }  

}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions=[{
    question:'What is 8+7',
    answers:[      
        {text:'16', correct:false},
        {text:'15', correct:true}, 
        {text:'17', correct:false}, 
        {text:'14', correct:false}

    ]
},
{
    question:'What is 3 x 3',
    answers:[
        {text:'9', correct:true},
        {text:'8', correct:false},
        {text:'19', correct:false},
        {text:'12', correct:false}

    ]
},
{
    question:'What is 15 % 3',
    answers:[        
        {text:'6', correct:false},
        {text:'5', correct:true},
        {text:'4', correct:false},
        {text:'8', correct:false}

    ]
},
{
    question:'What is 9 - 4',
    answers:[       
        {text:'3', correct:false},
        {text:'4', correct:false},
        {text:'5', correct:true},
        {text:'6', correct:false}

    ]
}
]