// Importando web3.js para interagir com as smart contracts
const { Web3 } = require('web3');
const web3 = new Web3('< URL do nó/servidor >');

// ABI do contrato
const abi = require('./abi.json');
const contractAddress = '< Endereço do contrato... >';
const contract = new web3.eth.Contract(abi, contractAddress);


  // Listar contas
  web3.eth.getAccounts()
    .then(accounts => console.log('Contas:', accounts))
    .catch(error => console.error('Erro ao listar contas:', error));

  // Método candidateList, para obter o nome do candidato a partir do índice
  const index = 0; 
  contract.methods.candidateList(index).call()
    .then(result => console.log('Candidato no índice', index, ':', result))
    .catch(error => console.error('Erro ao obter candidato:', error));
  
  // Método totalVotesFor, para obter o número total de votos para um candidato específico
  const candidateName = 'Fulano';  
  contract.methods.totalVotesFor(candidateName).call()
    .then(result => console.log('Total de votos para', candidateName, ':', result))
    .catch(error => console.error('Erro ao obter total de votos:', error));
  
  // Método validCandidate, para verificar se um candidato é válido
  const candidateNameToCheck = 'Ciclano'; 
  contract.methods.validCandidate(candidateNameToCheck).call()
    .then(result => console.log('É', candidateNameToCheck, 'um candidato válido?', result))
    .catch(error => console.error('Erro ao verificar se candidato é válido:', error));
  
  // Método voteForCandidate, para votar em um candidato
  const candidateToVoteFor = 'Candidato';  
  const voterAccount = 'Endereço da conta do eleitor'; 
  
  contract.methods.voteForCandidate(candidateToVoteFor).send({ from: voterAccount })
    .then(result => console.log('Voto registrado para', candidateToVoteFor, 'com sucesso'))
    .catch(error => console.error('Erro ao registrar voto:', error));
  
  // Método votesReceived, para ver quantos votos um candidato recebeu
  const candidateForVotes = 'Fulano'; 
  contract.methods.votesReceived(candidateForVotes).call()
    .then(result => console.log('Votos recebidos por', candidateForVotes, ':', result))
    .catch(error => console.error('Erro ao obter votos recebidos:', error));