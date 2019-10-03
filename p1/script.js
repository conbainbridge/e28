var app = new Vue({
    el: '#app',
    data: {
        humanHand: null,
        compHand: null,
        results: '',
        hands: ['rock', 'paper', 'scissors']
    },
    methods: {
        handThrowFunc: function () {
            let i = Math.floor(Math.random() * 3);
            this.compHand = this.hands[i];
            if (this.compHand == this.humanHand) {
                this.results = 'draw';
            } else if (this.humanHand == 'rock') {
                if (this.compHand == 'paper') {
                    this.results = 'lose';
                } else {
                    this.results = 'win';
                }
            } else if (this.humanHand == 'paper') {
                if (this.compHand == 'scissors') {
                    this.results = 'lose';
                } else {
                    this.results = 'win';
                }
            } else if (this.humanHand == 'scissors') {
                if (this.compHand == 'rock') {
                    this.results = 'lose';
                } else {
                    this.results = 'win';
                }
            } else {
                this.results = 'nothing';
            }
        }
    }
})