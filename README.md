# Gameplay
## Conteúdo
* [Sobre o Projeto](#sobre-o-projeto)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Screenshots](#camera_flash-screenshots)
* [Iniciando o Projeto](#car-iniciando-o-projeto)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre o projeto
<p>Projeto desenvolvido em React Native, durante o NLW 06, da Rocketseat.</p>
Faz autenticação pelo Discord e permite agendar partidas com os colegas.</p>
Ao incluir um agendamento, mostra todos os usuários do servidor selecionado.</p>
Armazena os dados dos agendamentos e de autenticação no asyncStorage.</p>
Criação de vários componentes que compõem uma interface muito bem elaborada.</p>
Uso intensivo de contexto, acesso à API do Discord através do Axios, 
  
## :hammer_and_wrench: Tecnologias
* __React Native__ com Expo
* Autenticação com __AuthSession__ (expo-auth-session)
* __Axios__ para acessar a API do Discord
* __Uuid__ (react-native-uuid)
* __LinearGradient__ (expo-linear-gradient)
* Uso de fontes com useFont (expo-google-fonts)
* Rotas com useNavigation (react-navigation)
* Uso de variáveis de ambiente (dotenv)

## :camera_flash: Screenshots
![](https://github.com/luiizsilverio/gameplay/blob/main/assets/gameplay.gif)

## :car: Iniciando o projeto
```bash
# Baixe o repositório com git clone e entre na pasta do projeto.
$ git clone https://github.com/luiizsilverio/gameplay.git

# Execute yarn para instalar as dependências (ou npm install)
$ yarn

# Para iniciar a aplicação 
$ expo start

# Se for testar em dispositivo físico, instale o app ExpoGo no seu celular.
```

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)
