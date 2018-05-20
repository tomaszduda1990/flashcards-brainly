import { 	createHTML, 
			connectionFailed, 
			displayFirsQuestion, 
			wrongAnswer, 
			removeElement

} from './helpers';
class Form {
	constructor(form){
		this.form = form;
		this.state = {};
		this.header = this.form.querySelector('.form__header');
		this.url = 'https://gist.githubusercontent.com/vergilius/6d869a7448e405cb52d782120b77b82c/raw/e75dc7c19b918a9f0f5684595899dba2e5ad4f43/history-flashcards.json';

		this.form.addEventListener('change', this.formValidation.bind(this));
		this.form.addEventListener('animationend', (e) => {

			if(e.animationName === 'formExpand'){
				this.form.reset();
				this.getData(this.url, this.form.querySelector('.form__questions'));
			}
			if(e.animationName === 'goLeft'){
				this.form.reset();	
			    wrongAnswer(this.state.answers, e.target.dataset.index, this.header)
			}
			if(e.animationName === 'goRight'){
				if(this.state.correct === 10){
					this.form.classList.add('form--rollIn')
				}
				this.form.reset(); 
				console.log(this.state)
			    this.state.answers = removeElement(this.state.answers, e.target.dataset.index, this.header);
			}
		});
	}
	formValidation(e){
       const element = document.querySelector(`#${e.target.name}`);
       if(this.state.valid[e.target.name] === e.target.value){
         this.state.correct ? this.state.correct += 1 : this.state.correct = 1;
         element.classList.add('answers--correct');
       }else{
         this.state.incorrect ? this.state.incorrect += 1 : this.state.incorrect = 1;
         element.classList.add('answers--wrong');
       }
  }
  



  getData(url,form){
  	let valid = {};
  	let answers = [];
	   fetch(url)
	    .then(function(response) {
	      return response.json();
	    })
	    .then(function(data) {
	      const html = data
	      	.map((el, i) => {
	        	const answers = el.answers;
	  			el.id = i+1;
				answers.forEach(item => {
					if(item.correct){
				   		valid[`answer_${el.id}`] = item.answer;
					}
				})
				return el;
	          })
	          .map(item => createHTML(item))
	          .join('');


	      form.innerHTML += html;
	      answers.push(...document.querySelectorAll('.answers'))
	      displayFirsQuestion(answers[0], document.querySelector('.form__header'));
	    })


	    .catch(function(error){
	      console.error(error);
	      form.innerHTML = connectionFailed;
	    })

	    this.state.answers = answers;
	    this.state.valid = valid;
	}
}

export default Form;