.PHONY: db-run
db-run:
	docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Azerty@33' -p 1433:1433 -d microsoft/mssql-server-linux:2017-latest

.PHONY: api-run
api-run:
	dotnet run --project=BookingAPI

.PHONY: api-mook
api-mook:
	prism mock BookingAPI/swagger.yaml