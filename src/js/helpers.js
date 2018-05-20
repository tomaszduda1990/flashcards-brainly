
// App funcitons -------------------------------------------------------------
export function formHandler(form){
  form.classList.add('form--active');
  document.querySelector('.header__buttonMain').style.display = 'none'; 
}


// form functions -------------------------------------------------------------

export function createHTML(array){
    return `
    <div id="answer_${array.id}" class="answers" data-question="${array.question}" data-index='${array.id - 1}'>
      <div class="answers__option">
        <input type='radio' name="answer_${array.id}" id="answer_${array.id}_a" value="${array.answers[0].answer}">
        <label for="answer_${array.id}_a">${array.answers[0].answer}<span></span></label>
      </div>
      <div class="answers__option">
        <input type='radio' name="answer_${array.id}" id="answer_${array.id}_b" value="${array.answers[1].answer}">
        <label for="answer_${array.id}_b">${array.answers[1].answer}<span></span></label>
      </div>
    </div>`;
  }


export function removeElement(arr, index, header){
    index = parseInt(index);
    header.classList.remove('form__header--active');
    arr[index].remove();
    arr = document.querySelectorAll('.answers')
    if(arr.length === 0) return;

    arr.forEach((el, i) => el.dataset.index = i); 
    if(index === arr.length){
      arr[index - 1].classList.add('answers--active');
      header.textContent = arr[index - 1].dataset.question;
      header.classList.add('form__header--active')
    }else{
      arr[index].classList.add('answers--active');
      header.textContent = arr[index].dataset.question;
      header.classList.add('form__header--active')
    }
    return arr;
  }


export function wrongAnswer(arr, index, header){
    index = parseInt(index)
    header.textContent = "";
    header.classList.remove('form__header--active')
    if(index === arr.length-1){
        arr[index].classList.add('answers--wrong')
        arr[0].classList.add('answers--active')
        header.textContent = arr[0].dataset.question;
        header.classList.add('form__header--active')
      }
    arr[index].classList.remove('answers--active', 'answers--wrong');
    
    if(index + 1 < arr.length){
      arr[index+1].classList.add('answers--active');
      header.textContent = arr[index+1].dataset.question;
      header.classList.add('form__header--active')
    }
    if(arr.length === 1){
    	arr[0].classList.add('answers--active');
    }
    
}


export const connectionFailed = `
        <p style="font-size: 20px; margin: 20px; line-height: 25px;"><strong>Something went wrong! </br>
            Please try again later. Cannot load the data :(</strong>
        </p>
        <video alt="try again GIF" src="https://media1.giphy.com/media/LyrRqqwD6Orf2/giphy.mp4" poster="https://media1.giphy.com/media/LyrRqqwD6Orf2/giphy_s.gif" autoplay="" loop="" playsinline="" style="width: 200px; height: 200px; left: 0px; top: 1px;"></video>`;


export function displayFirsQuestion(el, questionLabel){
    el.classList.add('answers--active');
    questionLabel.textContent = el.dataset.question;
    questionLabel.classList.add('form__header--active');
}
// header button -----------------------------------------------------


export function buttonChange(button){
	button.setAttribute('disabled', 'disabled')
	button.textContent = '';
	button.classList.remove('header__buttonMain--active')
	button.classList.add('header__buttonMain--inactive');
}

//results function

export function answersPercentage(percentage){
	if(percentage < 10){
		return "0";
	}else if(percentage >= 10 && percentage < 20){
		return "10"
	}else if(percentage >= 20 && percentage < 30){
		return "20";
	}else if(percentage >= 30 && percentage < 40){
		return "30"
	}else if(percentage >= 40 && percentage < 50){
		return "40"
	}else if(percentage >= 50 && percentage < 60){
		return "50"
	}else if(percentage >= 60 && percentage < 70){
		return "60"
	}else if(percentage >= 70 && percentage < 80){
		return "70"
	}else if(percentage >= 80 && percentage < 90){
		return "80"
	}else if(percentage >= 90){
		return "90"
	}

}
export function resultsHTML(quote, correct, all) {
	return `
		<div class="results">
			<h2 class="results__header">${quote.main}</h2>
			<div class="results__numbers">
				<p>${correct}/${all}</p>
			</div>
			<p class="results__quote">"${quote.quote}"</p>
			<button class="button">RESTART</button>
		</div>
	`
}

export const restartQuizHTML = `<form class="form">
	  								<h2 class="form__header"></h2>
	  								<div class="form__questions"></div>
	  							</form>`;

export function addRestart (){
	const results = document.querySelector('.results');
	const button = results.querySelector('button');
	button.addEventListener('click', () => {
		results.classList.add('results--hide');
		window.location.reload()
	});
}


export const quotes = {
	0: {
		main: "Bad",
		quote: "Character consists of what you do on the third and fourth tries!"
	},
	10: {
		main: "Train more",
		quote: "Winners never quit, and quitters never win"
	},
	20: {
		main: "Not Bad!",
		quote: "It always seems impossible until it’s done"
	},
	30: {
		main: "You can do better",
		quote: "How long should you try? Until!"
	},
	40: {
		main: "Almost there!",
		quote: "There is no failure except in no longer trying"
	},
	50: {
		main: "There is still place for improvement",
		quote: "All progress takes place outside the comfort zone"
	},
	60: {
		main: "Nice!",
		quote: "Without hard work, nothing grows but weeds"
	},
	70: {
		main: "Good!",
		quote: "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come"
	},
	80: {
		main: "Great!",
		quote: "Success usually comes to those who are too busy to be looking for it"
	},
	90: {
		main: "Excellent!",
		quote: "Success is not final, failure is not fatal. It is the courage to continue that counts"
	},
}

