let userfinalScore = []
userfinalScore.push(99)
let progressBar = document.querySelector('.circular-progress')
let  progressValue =   document.getElementById("pvlue")
let progressStartValue = 0

      
     progressEndValue = userfinalScore[0]
     speed = 50
    
     let progress = setInterval(() =>{
        if(progressEndValue > 0){
        progressStartValue++;
        if(progressStartValue > 100){
            progressStartValue = 100
        }
        progressValue.innerHTML = `${progressStartValue}%`
        progressBar.style.background =  `conic-gradient(var(--color-secondary) ${progressStartValue * 3.6}deg, var(--color-offwhite) 0deg ) `

        if(progressStartValue === userfinalScore[0])
        {
            clearInterval(progress)
            if(userfinalScore[0] > 100){
                clearInterval(progress)
            }
        }
     }
        else{progressValue.innerHTML = `0%`}
     }, speed)
    

// COPYRIGHT YEAR
let copyright = document.getElementById('copyright')
let date = new Date()
year = date. getFullYear()
copyright.innerHTML = `  COPYRIGHT ${year}`



    






