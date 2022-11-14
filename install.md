--na pasta principal
npx nest new pizza-fresh-server

--preparar pastas
deletar pasta de tests
deletar app-controler-spec

--criar repositorio no github e fazer o primeiro commit

--criar editor config na raiz
.editorconfig

--alterar a porta no main para evitar conflitos

--rodar em desenvolvimento
npm run start:dev

--app controler modificado para aparecer status, utilizado f2 para renomear
@Get()
getAppStatus(): string {
return this.appService.getAppStatus();
}
}

ctrl +. aparece a opcao para criar o metodo
--swagger
npm i @nestjs/swagger swagger-ui-express
