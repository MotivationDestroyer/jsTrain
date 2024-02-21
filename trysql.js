const mysql = require("mysql");
  
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "amogus",
  password: "root"
});

 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });


 function connectMySqlClose() {
    connection.end(function(err) {
        if (err) {
          return console.log("Ошибка: " + err.message);
        }
        console.log("Подключение закрыто");
      });
 }
 
 connection.query("SELECT * FROM `users`",  // В квери идет первое это сам запрос, следующее это уже отлов ошибки, результат поиска, мета-данные полей
 function(err, results) {
   console.log(err);
   console.log(results);
});
connectMySqlClose();