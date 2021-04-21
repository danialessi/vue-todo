// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

var app = new Vue ({
    el: '#root',
    data: {
        isActive: false,
        userInput: '',
        todos: [
            'fare i compiti',
            'fare la spesa',
            'fare il bucato'
        ]
    },
    methods: {
        addTodo() {
            if (this.userInput.length > 0) {
                this.todos.push(this.userInput);
                this.userInput = '';
                this.isActive = true;
            }
        },
        deleteToDo(index) {
            this.todos.splice(index, 1)
        }
    }
})