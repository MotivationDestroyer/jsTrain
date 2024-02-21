const mysql = require("mysql");
  
const connection = mysql.createConnection({
  host: "192.168.1.65",
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
let changeUser="Oleg";
connection.query("UPDATE `users` SET `username`='" + changeUser + "' WHERE 1");
connectMySqlClose();