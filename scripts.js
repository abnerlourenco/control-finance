const Modal = {
    open(){
        //Abrir modal
        // Adicionar a class active ao model
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close(){
        //fechar modal
        //remover a class active do model
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

const cashFlow = {
    all: [
        {
            id: 1,
            description: 'Desenvolvimento App',
            amount: 500000,
            date: '23/03/2021'
        },
        {
            id: 2,
            description: 'Energia',
            amount: -50000,
            date: '25/03/2021'
        },
        {
            id: 3,
            description: 'Agua',
            amount: -6354,
            date: '25/03/2021'
        },
        {
            id: 4,
            description: 'Internet',
            amount: -9998,
            date: '25/03/2021'
        },
        {
            id: 4,
            description: 'Supermercado',
            amount: -24768,
            date: '29/03/2021'
        },
        {
            id: 6,
            description: 'Placa de Video',
            amount: -247000,
            date: '30/03/2021'
        },
    ],

    add (line){
        cashFlow.all.push(line)

        //chamamos a função reload() do App.
        App.reload();
    },

    remove(index){
        //procurar dentro do array, o indice da linha que vai ser removido e remover
        cashFlow.all.splice(index,1)

        App.reload()
    },

    incomes() {
        let income = 0;
        //pegar todas as transações
        cashFlow.all.forEach(transaction => {
            //para cada uma, verificar se é maior que zero
            if (transaction.amount > 0) {
                //somar em uma variavel 
                income = income + transaction.amount;
            }
        })
        //e retornar a variavel
        return income;
    },

    expenses() {
        let expense = 0;
        //pegar todas as transações
        cashFlow.all.forEach(transaction => {
            //para cada uma, verificar se é maior que zero
            if (transaction.amount < 0) {
                //somar em uma variavel 
                expense = expense + transaction.amount;
            }
        })
        //e retornar a variavel
        return expense;
    },

    total() {
        return cashFlow.incomes() + cashFlow.expenses();
    },
}

const ModelTransaction = {
    transactionsContainer: document.querySelector('#data-table tbody'),
    
    addTransacion(line, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = ModelTransaction.innerHTMLTransaction(line)

        ModelTransaction.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction){
        const alternClass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const exampleTransaction =` 
            <td class="description">${transaction.description}</td>
            <td class=${alternClass}>${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `
        
        return exampleTransaction
    },
    
    updateBalance() {
        document.getElementById('incomeDisplay').innerHTML = Utils.formatCurrency(cashFlow.incomes())
        document.getElementById('expenseDisplay').innerHTML = Utils.formatCurrency(cashFlow.expenses())
        document.getElementById('totalDisplay').innerHTML = Utils.formatCurrency(cashFlow.total())
    },

    clearallLines() {
        ModelTransaction.transactionsContainer.innerHTML = ""
    }

}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "") //replace(ache tudo que nao é numero (global) e troque por vazio)

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
        
        return signal + value
    }
}

const App = {
    init() {
        //aplicando o inicio, já com a refatoração.
        cashFlow.all.forEach(transaction => {  //arrow function aplicada
            ModelTransaction.addTransacion(transaction)
        })

        ModelTransaction.updateBalance()
    },
    reload() {
        ModelTransaction.clearallLines()

        App.init()
    },
}

/*
//no caso de um array, posso adicionar forEach, onde para cada elemento roda a função
lines.forEach(function(transaction){
    ModelTransaction.addTransacion(transaction)
})

ModelTransaction.updateBalance()


*/

App.init();

cashFlow.add({
    id: 7,
    description: 'Notebook',
    amount: -600000,
    date: '01/04/2021'
})