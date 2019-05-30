# Groupe de amzani_a

## Outils utilisés

- [dotnet](https://paper.dropbox.com/ep/redirect/external-link?url=https%3A%2F%2Fdotnet.microsoft.com%2Fdownload&hmac=sdRoIazI9Mn%2BDbovUouFtguOMxjn92iIUwAW0SlkV84%3D) 
- Installer Azure data studio  https://docs.microsoft.com/en-us/sql/azure-data-studio/download?view=sql-server-2017 pour gérer la base de donnée mssql
- Docker


## Les étapes

### Etape.1 : Mockups et définition de projet

Presentation de projet [ici](./projet_NET5.pdf)

### Etape.2 : Définition de l'API

J'ai adopté l'approche API First, avec la définition de swagger d'abord.
Le swagger est mise en ligne sur la plateform : swaggerhub 
https://app.swaggerhub.com/apis/k423/booking_api/1.0.0

Le mock API permet de travailler sur le front même si le backend n'est pas encore terminé.

```
npm install -g @stoplight/prism-cli@alpha
# ou
yarn global add @stoplight/prism-cli@alpha

ensuite
prism mock api/swagger.yaml
```

### Etape.3 : Stockage

Avec MS Sql Server qui tourne dans un container Docker et écoute sur le port `1433`

### Etape.3 : Dévelopement de l'API

Avec .NET AspCore et Entity Framework

### Etape.4 : Dévelopement du SPA React

Avec [Create-React-App](https://github.com/facebook/create-react-app)

### Etape.5 : Implémentation de Login




## Démarrage de l'application

### API

```
    make db-run
    make api-run
```

### SPA


```
    make app-run
```
 


