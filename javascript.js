let quizzes = document.querySelectorAll('.quiz-container');
        quizzes.forEach((quiz, index) => {
            let options = quiz.querySelectorAll('.option');
            let printval = quiz.querySelector(#print${index + 1});
            options.forEach((option) => {
                option.addEventListener('click', () => {
                    let isCorrect = option.getAttribute('value') === 'true';
                    if (isCorrect) {
                        option.classList.add('correct');
                        printval.innerHTML = '<p style="color: green;">You Have Selected the Correct Answer</p>';
                    } else {
                        option.classList.add('incorrect');
                        printval.innerHTML = '<p style="color: red;">You Have Selected the Wrong Answer</p>';
                    }
                    options.forEach((opt) => {
                        opt.style.pointerEvents = 'none';
                    });
                });
            });
        });


        function showQuiz(quizId) {
            let quizzes = document.querySelectorAll('.quiz-container');
            quizzes.forEach((quiz) => {
                if (quiz.id === quizId) {
                    quiz.style.display = 'block';
                } else {
                    quiz.style.display = 'none';
                }
            });
        }
