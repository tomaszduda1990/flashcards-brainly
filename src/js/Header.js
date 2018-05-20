import { buttonChange } from './helpers';

class Header {
	constructor(){
		this.header = document.querySelector('.header');
		this.button = document.querySelector('.header__buttonMain');
		this.form = document.querySelector('.form');
	
		this.header.addEventListener('animationend', this.headerOpen.bind(this));
		this.button.addEventListener('click', this.submitHandler.bind(this));
	}
	submitHandler(){
		buttonChange(this.button)
		this.header.classList.add('header--out');
		this.form.classList.add('form--visible');
	}
	headerOpen(e){
		if(e.animationName === 'headerSlideIn'){
			this.button.classList.add('header__buttonMain--active');

		}
	}	
}

export default Header;