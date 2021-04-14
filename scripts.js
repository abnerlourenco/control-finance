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

const transactions = [
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
    }
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
    
    addTransacion(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = ModelTransaction.innerHTMLTransaction(transaction)

        console.log(tr.innerHTML)
    },
    innerHTMLTransaction(transaction){
        const exampleTransaction =` 
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `
        
        return exampleTransaction
    } 
}

ModelTransaction.addTransacion(transactions[0])