import { answersPercentage, resultsHTML, quotes } from './helpers'

class Results{
	constructor(correct, incorrect, element){
		this.correct = correct;
		this.incorrect = incorrect;
		this.element = element;
		this.all = this.correct + this.incorrect;
		this.quotes = quotes;

	}
	renderResult(element){
		const percent = (this.correct / this.all) * 100;
		const index = answersPercentage(percent);
		const html = resultsHTML(this.quotes[index], this.correct, this.all)
		element.innerHTML = html;
	}
}

export default Results;