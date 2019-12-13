// Criando uma Promise em JavaScript

const testaPromise = (error = false) => {
    // Declaramos uma new Promise com os parametros resolve e reject

    return new Promise((resolve, reject) => {
        if (error) {
            // Reject serve para rejeitar a Promise
            reject('Deu ruim irmão')
        }
        // Resolve serve para resolver a Promise
        resolve('Promise Resolvida')
    });
}

// Se error for igual a False, a Promisse será Resolvida, e a resposta podera ser acessada no Then
testaPromise()
    .then(response => console.log(response)) // Promisse Resolvida  
    .catch(err => console.log(err)) // O bloco Catch não será acessado, pois erro é igual a FALSE


// Se error for igual a True, a Promisse será Rejeitada, e o erro irá cair no Catch
testaPromise(true)
    .then(response => console.log(response)) // O bloco Then não será acessado, pois erro é igual a TRUE
    .catch(err => console.log(err)) // Deu Ruim irmão 
    