# Desafio Charlie

#### setup

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