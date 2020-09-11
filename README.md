# Desafio Charlie

Microsite responsivo que mostra a previsão do tempo.
http://weather-charlie.herokuapp.com/


###  setup

```
  git clone git@github.com:bruunas/pvt-challenge-charlie.git
  cd challenge-charlie
  yarn
```

#### run development mode
`yarn dev`

#### run development mode with server
```
  yarn watch
  node spa-server
```

Open the browser on `localhost:9000`


#### create a build
`yarn build`

### run with docker
```
  docker build -t <your-username>/node-web-app .
  docker run -p 49160:8080 -d <your-username>/node-web-app
```

Open the browser on `http://0.0.0.0:49160/`

----------

*Tecnologias usadas:*

- Webpack
- Node e Express
- Docker
- Heroku
- React 
- React Hooks
- Redux
- Styled Component


*Metodologias de desenvolvimento:*

- Kanban no Trello (https://trello.com/b/1KwbxNix/challenge-charlie)
- Gitflow no Github

