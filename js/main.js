const app = new Vue({
	el: '#root',
	data: {
		todos: [
			'Fare la spesa',
			'Portare fuori il cane',
			'Cucinare il pranzo'
		],
		inputValue: '',
		isActive: true
	},
	methods: {
		addTodo: function() {
			// se non è vuoto aggiungo l'elemento nell'array
			if( this.inputValue !== "" ) {
				this.todos.push(this.inputValue);
				this.inputValue = "";
			}
		},
		removeTodo: function(index) {
			this.todos.splice(index, 1);
		}
	}
});