# TALENT FEST - DESAFIO GUPY

## Sobre o desafio

Gupy é uma startup focada em recrutamento, que usa inteligência artifical para rankear os candidatos e ajudar as empresas a fazerem processos seletivos mais eficientes.

O desafio consiste em criar um painel de visualização para gestão de candidatos para que a empresa recrutadora possa olhar quais os candidatos foram inscritos em determinada vaga.

## Funcionalidades e Regras de Negócio

1. A Pessoa recrutadora poderá navegar por uma lista de candidatos e cada candidato deverá ter as seguintes informações:

* Afinidade
* Nome
* Idade
* Data de inscrição
* Email 
* Telefone
* Endereço
* Tags

Obs. A lista de candidatos está disponibilizada via API da GUPY.

Na visualização inicial, os candidatos devem ser apresentados em ordem decrescente de afinidade.

2. A pessoa recrutadora poderá ordenar candidatos pelos campos afinidade, nome do candidato ou data de inscrição.

3. A pessoa recrutadora poderá filtrar candidatos baseado no seu nome.

4. Independente da ordenação ou dos filtros, os candidatos que estiverem com a propridade 'isActive' como 'false' (ou seja, reprovados), deverão ficar no final da lista com sua linha acinzentada.

## Requisitos Técnicos

* [x] Utilizar react
* [x] Implementar as telas seguindo o layout recomendado
* [x] Instalar dependências (como React e outras bibliotecas) com npm 
* [x] Não usar jQuery
* [x] Usar o Github como ferramenta de versionamento de códigx
* [x] Realizar o deploy da aplicação no Heroku
