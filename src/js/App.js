import '../css/main.scss';
import Header from './Header';
import Form from './Form';
import Results from './Results';
import { getData, formHandler, restartQuizHTML, addRestart } from './helpers';

class App {
	constructor(){
		this.main = document.querySelector('.main');
		this.formElement = document.querySelector('.form');
		this.content = document.querySelector('.content')

		this.header = new Header();
		this.form = new Form(this.formElement);
		this.main.addEventListener('animationend', this.clickHandler.bind(this));
	}
	clickHandler(e){
		if(e.animationName === 'headerSlideOut'){
			formHandler(this.formElement);
		}
		if(e.animationName === 'formRollIn'){
			const { correct = 0, incorrect = 0 } = this.form.state;
			const element = document.querySelector('.content');
			const results = new Results(correct, incorrect, this.content)
			results.renderResult(element);
			addRestart();
		}
	}
}

export default App;