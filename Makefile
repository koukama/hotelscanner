.PHONY: api-run-db
api-start-db:
	docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Azerty@33' -p 1433:1433 -d microsoft/mssql-server-linux:2017-latest

.PHONY: api-run
api-run:
	cd api
	dotnet run

.PHONY: api-mook
api-mook:
	prism mock api/swagger.yaml
