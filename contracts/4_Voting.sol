// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Contrato para um sistema de votação simples
contract Voting {

    // Mapeia o nome dos candidatos para o número de votos recebidos
    mapping (string => uint256) public votesReceived;

    // Lista de candidatos
    string[] public candidateList;

    // Construtor que inicializa a lista de candidatos
    constructor (string[] memory candidateNames) {
        candidateList = candidateNames;
    }

    // Retorna o total de votos para um candidato específico
    function totalVotesFor(string memory candidate) view public returns (uint256) {
        // Verifica se o candidato é válido
        require(validCandidate(candidate));
        // Retorna o número de votos recebidos pelo candidato
        return votesReceived[candidate];
    }

    // Adiciona um voto para um candidato específico
    function voteForCandidate(string memory candidate) public {
        // Verifica se o candidato é válido
        require(validCandidate(candidate));
        // Incrementa o número de votos recebidos pelo candidato
        votesReceived[candidate] += 1;
    }

    // Verifica se o nome fornecido existe na lista de candidatos
    function validCandidate(string memory candidate) view public returns (bool) {
        // Itera sobre a lista de candidatos
        for(uint i = 0; i < candidateList.length; i++) {
            // Compara o nome do candidato com o nome fornecido
            if(keccak256(abi.encodePacked(candidateList[i])) == keccak256(abi.encodePacked(candidate))) {
                return true;
            }
        }
        // Retorna falso se o candidato não estiver na lista
        return false;
    }
}
