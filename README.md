# Utils

pacote com componentes comuns entre projetos e necessários em algum momento da vida.  


## Dependências 

Os componentes de load dependem do fontawesome.

```html
<!-- index.html -->
<link data-require="fontawesome@*" data-semver="4.5.0" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.css"/>
```

## Componentes Implementados

### load-input

Este componente insere um icone de carregamento em _ut-load-input_ no canto esquerdo e desabilita o input até que o callback em _[call]_ retorne algo. Se a promise retornar um erro na execução o icone se tornará um X, caso contrário ao final será um icone de _check_.

#### Como usar

```html
<!-- template -->
<ut-load-input [input]="input1" [watch]="['blur', 'enter']" [call]="someAction">
   <input type="text" #input1>
</ut-load-input>
<ut-load-input [input]="input2" [watch]="['blur', 'enter']" [call]="someAction">
   <input type="text">
</ut-load-input>
```

```javascript
// typescript
someAction(): Promise<any> {
   return new Promise(((resolve, reject) => {
     setTimeout(() => {
       resolve('someVelue');
     }, 3000);
   }).bind(this))
 }

 someActionError(): Promise<any> {
   return new Promise(((resolve, reject) => {
     setTimeout(() => {
       reject('someError');
     }, 3000);
   }).bind(this))
 }

```

Passe para o componente _ut-load-input_ em _[input]_ a _templateRef_ da tag input que deve ser assistida nos eventos informados no array _[watch]_. O atributo _watch_ suporta todos os evento providos pela DOM com exceção dos eventos de keupress/up mas suporta o valor especial _'enter'_ para quando se deseja escutar o evento de _keypress.enter_.

O atributo _[call]_ recebe a referência para a função que deve ser chamada quando qualquer um dos eventos es _[watch]_ ocorrer.

A função de callback deve retornar um promise ou um boolean. Note que a função passada no construtor da promise está envolvida em _( () => { } ).bind(this)_ isso porque a função de callback será chamada em um contexto que não é o do componente atual.

| Atributos        | Tipo           | Padrão    |  Descrição                                                                                    |
| ---------------- |:--------------:|:---------:| --------------------------------------------------------------------------------------------- |
| input            | Obrigatório    | undefined | _templateRef_ da tag input que deve ser assistida nos eventos informados no array  _[watch]_. |
| call             | Obrigatório    | undefined | Referência para a função que deve ser chamada quando um dos evento ocorrer.                   |
| watch            | Obrigatório    | undefined | Array com o nome dos eventos que devem ser assistidos no input.                               |
| disable          | Opcional       | true      | Se o input deve ser desabitado antes _callback_ ser chamado.                                  |
| timeState        | Opcional       | 1000      | Tempo pelo qual o icone de _error/chack_ deve ficar visivel. Especificado em _ms_.            |

### load-directive

Está diretiva subistitui temporariamento o conteúdo da tag por um ícone de _loading_. Foi projetada para ser usada em botões que chamam funções assíncronas ou esperam por promises.
A função de callback deve retornar uma promise. Se a promise retornar um erro na execução o ícone se tornará um X, caso contrário ao final será um ícone de _check_.

#### Como usar

```html
<!-- template -->
<button [utLoad]="someAction" >foo</button>
<button [utLoad]="someActionError" >foo error</button>
<button #btn1 [utLoad]="someAction" [group]="[btn1, btn2]">btn foo</button>
<button #btn2 [utLoad]="someActionError"  [group]="[btn1, btn2]">btn foo error </button>
```

```javascript
// typescript
someAction(): Promise<any> {
   return new Promise(((resolve, reject) => {
     setTimeout(() => {
       resolve('someVelue');
     }, 3000);
   }).bind(this))
 }

 someActionError(): Promise<any> {
   return new Promise(((resolve, reject) => {
     setTimeout(() => {
       reject('someError');
     }, 3000);
   }).bind(this))
 }
```
Note que a função passada no construtor da promise está envolvida em _( () => { } ).bind(this)_ isso porque a função de callback será chamada em um contexto que não é o do componente atual.


| Atributos        | Tipo           | Padrão    |  Descrição                                                                                                        |
| ---------------- |:--------------:|:---------:| ----------------------------------------------------------------------------------------------------------------- |
| utLoad           | Obrigatório    | undefined | Referência para a função que deve ser chamada quando um dos evento de click ocorrer.                              |
| group            | Opcional       | undefined | Array de _templateRef_ com a referência para os botões que devem ser desabilitados antes do callback ser chamado. |
| timeState        | Opcional       | 1000      | Tempo pelo qual o icone de _error/chack_ deve ficar visível. Especificado em _ms_.                                |
| event            | Opcional       | click     | Evento que o deve ser escutado para que o callback seja chamado.                                                 |

## Componentes Futuros

 - Pipe: Formatação de telefones de xxxxxxxxxxx para (xx) x xxxx-xxxx;
 - HttpItercepter: Intercepter para habilotar o CORS para uma lista de endereços especificados;
 - Service: EnderecoResolverService, traduz o cep para um endereço completo;
 - Diretiva para mascaras de input;
 - ReactiveForm Validator: Validador de CPF de acordo com as regras de composição do mesmo;
 - ReactiveForm Validator: Validador que obriga o usuário a informar apenas um de varios campos;
 - Directive: Diretiva para renderizar na tela uma imagem selecionada em um input file;
 - outros.  