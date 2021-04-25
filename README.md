# Monitorando e otimizando APIs feitas com AWS Lambda

<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

Quando criamos nossas APIs usando serverless, tudo parece maravilhoso em um primeiro momento, mas conforme nosso uso e nossa carga aumenta, começamos a perceber algumas limitações (muitas vezes quando tudo já está pegando fogo!). Neste workshop vemos quais métricas são importantes e como podemos tirar proveito das ferramentas da AWS para achar gargalos em nossas aplicações. Também veremos alguns truques que podem melhorar a performance da sua aplicação como um todo.

Este repositório consiste de uma API feita em Node.js que usa serverless framework, AWS API Gateway, Lambdas, DynamoDB e SNS.

## Expert

| [<img src="https://avatars.githubusercontent.com/u/711732?s=460&u=6b1039f8a921c5733d92d13b2971c55157fee005&v=4" width="75px;"/>](https://github.com/askmon) |
| :-: |
|[André Spanguero Kanayama](https://github.com/askmon)|

### Requisitos

- Node.js - Há um arquivo `.nvmrc` no projeto caso queira realizar a instalação usando o [nvm](https://github.com/nvm-sh/nvm).
- Uma conta na [AWS](https://aws.amazon.com/pt/console/) - Se você ainda não tem conta, vai precisar de um cartão de crédito, mas não se preocupe, existe um [free tier](https://aws.amazon.com/pt/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc) para experimentar os recursos.
- [Serverless framework](https://www.serverless.com/) - Pode ser instalado usando o comando `npm install -g serverless`

### Fazendo o deploy

1. Crie uma conta de acesso programático com acesso de admin no [IAM](https://console.aws.amazon.com/iam/home) da AWS e pegar a chave e a secret.
2. Configure o serverless para usar essa conta, isso pode ser feito usando o serverless: `serverless config credentials -o --provider aws --key <chave> --secret <secret>`
3. Depois de configurar o `serverless.yml` com os recursos desejados, fazer deploy usando o comando `serverless deploy`

## Links e referências

- [Como criar um usuário no IAM](https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/id_users_create.html#id_users_create_console) - Caso você não tenha familiaridade com a criação de usuários na AWS usando IAM
