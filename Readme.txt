Projekt stworzony na Node js w połączeniu z bazą MSSQL.

Aby uruchomić projekt lokalnie należy:

w pliku config/dbconfig.js podmienić wartości na właściwą bazę (użyłem tutaj bazy szkolnej przez VPN)

const pool = new sql.ConnectionPool({
    server: 'db-mssql',
    database: 's16578', -- (nazwa bazy) 
    driver: 'msnodesqlv8',
    options: { trustedConnection: true }
})

Uruchomić 3 skrypty sql z lokalizacji database_model w kolejności:
1. gwarancje_model_create - tworzy tabele oraz ich relacje - pracownik, naprawa, komputer
2. cast_date_function - funkcja do przetwarzania dat pomiędzy MSSQL a nodejs
3. data_Insert - przykładowe dane 

Należy zainstalować moduły:
    "alert": "^5.0.10",
    "bcryptjs": "^2.4.3",
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "ejs": "~2.6.1",
    "express": "~4.16.1",
    "express-session": "^1.17.1",
    "http-errors": "~1.6.3",
    "joi": "^17.3.0",
    "module": "^1.2.5",
    "morgan": "~1.9.1",
    "msnodesqlv8": "^2.0.11",
    "mssql": "^6.3.1"

Strona posiada rejestracje nowych konta oraz ich logowania. W skrypcie generującym dane został umieszczony administrator, który (ma największe prawa) może dodatkowo usuwać rekordy. Osoby zarejestrowne mogą jedynie je przeglądać, dodawać i edytować. Osoby niezarejestrowane mogą jedynie przeglądać stronę główną oraz/lub zarejestrować/zalogować się.

Po utworzeniu rekordów/aktualizacji/usuwania otrzymujemy informację na kategorii strony w której się znajdujemy.

Schemat modelu bazy znajduje się w database_model

login: admin
hasło: admin


