Ao instalar a api abra seu terminal e digite:

# npm install

para conectar ao banco de dados abra o MySQL, crie uma conexão abra um Query e digite:

### CREATE DATABASE itpcadb (qualquer nome desde que no database do código esteja exatamente igual)
### USE itpcadb

em src/app/config/database.js se você não quiser ter o trabalho de mecher na estrutura do código apenas abra o terminal e digite:

### npm install dotenv

na raiz do sistema crie um chamado:
### .env
e nele coloque as seguintes informações:

### DB_NAME=itpcadb (o nome do database que você criou no MySQL)
### DB_USER=root (se você não tiver definido nenhum)
### DB_PASS='sua senha'
### DB_HOST=127.0.0.1
### DB_PORT=3306

### SECRET=qualquer senha

por fim rode:

# npm run .
ou
# node  src/server.js


pra ter certeza de que seu código está funcionando e se por acaso você não tiver nenhum aplicativo como um postman, abra seu crome e coloque na URL:

### localhost:3000/login ou localhost:3000/cadastro
ou
### 127.0.0.1:3000/login ou 127.0.0.1:3000/cadastro