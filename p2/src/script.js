import Vue from 'vue';
import RoundDetail from './components/RoundDetail.vue';

// root Vue instance
var app = new Vue({
    el: '#app',
    components: {
        'round-detail': RoundDetail
    },
    data: {
        humanHand: null,
        compHand: null,
        results: '',
        hands: ['rock', 'paper', 'scissors'],
        rounds: [],
        round: 1
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

            this.rounds.unshift({
                number: this.round++,
                results: this.results,
                hands: 'The computer chose ' + this.compHand + '. You chose ' + this.humanHand
            })
        }
    }
})