//variable

const accordion = document.getElementsByClassName('content-container');

 for( i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    
    
    })

};

const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', function(){
        this.parentElement.classList.toggle('active');
    });
});

    