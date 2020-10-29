var app = new Vue({
	el: '#app',
	data() {
		return {
			step: 1,
			score: 0,
			values: ['rock', 'paper', 'scissors'],
			own: null,
			house: null,
			status: -1,
			modal: false,
		}
	},
	methods: {
		moveNext(){
			this.step++;
		},
		setOwn(value){
			this.own = value;
			this.moveNext();
			this.setHouse();
		},
		setHouse(){
			setTimeout(() => {
				this.house = Math.floor(Math.random() * 3);
			}, 2000)
			setTimeout(() => {
				this.moveNext();
				this.setScore();
			}, 3000);
		},
		playAgain(){
			this.step++;
			setTimeout(() => {
				this.own = null;
				this.house = null;
				this.step = 1;
				this.status = -1;
			}, 400)
		},
		setScore(){
			if (this.own === this.house)
				this.status = -1;
			else if (this.own == 0 && this.house == 2 
				|| this.own == 1 && this.house == 0
				|| this.own == 2 && this.house == 1)
			{
				this.score++
				this.status = 1;
			}
			else
				this.status = 0
		},
		closeModal(){
			this.modal = false;
		}
	},
})