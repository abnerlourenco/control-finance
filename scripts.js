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

const lines = [
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
]

const cashFlow = {
    incomes() {
        //somar as entradas

    },
    expenses() {
        //somar as saídas

    },
    total() {
        //entradas - saidas

    }
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

//no caso de um array, posso adicionar forEach, onde para cada elemento roda a função
lines.forEach(function(transaction){
    ModelTransaction.addTransacion(transaction)
})