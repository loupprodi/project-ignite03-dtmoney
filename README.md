# project-ignite03-dtmoney
projeto 03 com typescript, com fins didaticos pela plataforma ignite

## Sobre o projeto

Este projeto foi desenvolvido com finalidade didaticas criando um sistema que contabiliza pequenas transações adicionando a uma tabela, esse projeto possuí uma arquitetura simples, foi adicionado
react-hook-form para a criação do formulario, resolvers para validação, junto com o zod e para o tratamento de datos e datas foi criado formatters. Foi usado contexto para passar os dados entre os componentes,
otimização do contexto pelo useContextSelector scheduler evitando que components sejam renderizados sem serem alterados, uso de callbacks em funções evitando que nao seja chamada quando nao utilizada. também foi utilizado 
o useMemo para comparar valores e calculos evitando que o componente seja renderizado sem necessidade, caso o valor nao seja alterado. Consumindo dados criados através do json-server

### Features

- [x] Adicionando Estrutura de pastas
- [x] Adicionado o react router dom
- [x] Adicionado o styled-components
- [x] Adicionado o radix-ui radiogroup
- [x] Adicionado o radix-ui dialog
- [x] Adicionado o phosphor-react
- [x] Adicionado o zod
- [x] Adicionado o react-hook-form & resolvers
- [x] Adicionado o json-server
- [x] Adicionado o axios
- [x] Adicionado o useContextSelector

## Pré-requisitos

- Qualquer IDE capaz de rodar aplicativo em react

  - [visual studio code](https://code.visualstudio.com/)
  Comandos:
  -yarn create vite@latest
  -yarn install || yarn
  -yarn run dev
  -npm add react-router-dom
  -npm install --save @types/react-router-dom
  -npm i styled-components
  -npm i @types/styled-components -D
  -npm install @radix-ui/react-radio-group
  -npm install @radix-ui/react-dialog
  -npm i json-server -D && npx json-server "nome-arquivo" && npx json-server nome-arquivo -p 3333 && npx json-server server.json -w -d 500
  ("-p: port", "-w: watch", -d delay)
  -npm i react-hook-form zod
  -npm i @hookform/resolvers
  -npm i use-context-selector scheduler
  
  Obs: Em caso de duvida veja o script no package.json
  caso queira fazer por si mesmo e adicione as dependencias:
##bibliotecas usadas:
-[phosphoricons](https://phosphoricons.com/)

#biblioteca de interface
-[radix-ui](https://www.radix-ui.com/)

#biblioteca de formulario
-[zod](https://zod.dev/)
-[react-use-form](https://react-hook-form.com/)
-[@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers)

#biblioteca backend
-[json-server](https://zod.dev/](https://github.com/typicode/json-server)

#desempenho
-[useContextSelector](https://www.npmjs.com/package/use-context-selector)

#biblioteca de data
 foi usado Intl(biblioteca propria) para o tratamento de dados com o formatter)

## Tecnologias utilizada

### Front-end

-Biblioteca React
-Typescript | Javscript

### Front-end

-json-server

### Desenvolvido por

Luiz Prosdoskimi
