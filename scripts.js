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
            amount: 95000000,
            date: '23/03/2021'
        },
        {
            id: 2,
            description: 'Energia',
            amount: -15000000,
            date: '25/03/2021'
        },
        {
            id: 3,
            description: 'Agua',
            amount: 6000354,
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
            amount: -24709768,
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
    

    // adicionar/criar a linha no novo lançamento
    addTransacion(line, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = ModelTransaction.innerHTMLTransaction(line, index)
        tr.dataset.index = index

        ModelTransaction.transactionsContainer.appendChild(tr)
    },

    // adicionar as colunas da linha na tabela
    innerHTMLTransaction(transaction, index){
        const alternClass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const exampleTransaction =` 
            <td class="description">${transaction.description}</td>
            <td class=${alternClass}>${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img onclick="cashFlow.remove(${index})" src="./assets/minus.svg" alt="Remover transação">
            </td>
        `
        
        return exampleTransaction
    },
    
    // Recalculo do fluxo de caixa
    updateBalance() {
        document.getElementById('incomeDisplay').innerHTML = Utils.formatCurrency(cashFlow.incomes())
        document.getElementById('expenseDisplay').innerHTML = Utils.formatCurrency(cashFlow.expenses())
        document.getElementById('totalDisplay').innerHTML = Utils.formatCurrency(cashFlow.total())
    },

    //limpar os registros
    clearallLines() {
        ModelTransaction.transactionsContainer.innerHTML = ""
    }

}

const Utils = {

    formatAmount(value) {
        value = Number(value) * 100;

        // Usaremos o metodo Math.round() para arredondar o numero, pois alguns bugs acontecem
        // Exemplo o numero 0.56

        return Math.round(value);
    },

    formatDate(date) {
        const splittedDate = date.split("-")
        return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`
    },

    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "") //replace(ache tudo que nao é numero (global) e troque por vazio)

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
        
        return signal + value
    }
}

//Trabalhano com a manipulação dos dados do Formulário
const Form = {
    // dados que são capturados pelo 
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),

    getValues() {
        return {
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value,
        }
    },

    validateFields() {
        const { description, amount, date } = Form.getValues();

        // Verificar se algum dos campos está vazio
        // usando trim() para limpar os espaços vazio no começo e fim da string
        if(description.trim() === "" || amount.trim() === "" || date.trim() === "" ) {
            // caso algum campo estiver vazio, vou criar um erro.
            throw new Error("Por favor, preencha todos os campos")
        }
    },

    // formatar valores do formulário
    formatValues() {
        let { description, amount, date } = Form.getValues();

        amount = Utils.formatAmount(amount);
        date = Utils.formatDate(date);

        return {
            description,
            amount,
            date,
        }
    },

    // Limpar campos do formulário
    cleanFields() {
        Form.description.value = ""
        Form.amount.value = ""
        Form.date.value = ""
    },

    // Evento de envio da nova transação
    submit(event) {
        //Removendo o comportamento padrão
        event.preventDefault();

        // tentar executar os passos 
        try {
            // verificar se todas as informações foram preenchidas.
            Form.validateFields();

            // Formatar os dados para salvar
            const transaction = Form.formatValues();

            // Salvar os dados
            cashFlow.add(transaction);

            // Limpar campos do formulário
            Form.cleanFields();

            // Fechar o Modal
            Modal.close();

        } catch (error) {
            // caso surgir erro executar uma função
            alert(error.message);
        }

        
    }
}

const App = {
    init() {
        //aplicando o inicio, já com a refatoração.
        //no caso de um array, posso adicionar forEach, onde para cada elemento roda a função
        cashFlow.all.forEach((transaction, index) => {  //arrow function aplicada
            ModelTransaction.addTransacion(transaction, index)
        })

        ModelTransaction.updateBalance()
    },
    reload() {
        ModelTransaction.clearallLines()

        App.init()
    },
}

App.init();

cashFlow.add({
    id: 7,
    description: 'Notebook',
    amount: -600000000,
    date: '01/04/2021'
}
)