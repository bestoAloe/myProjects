const mysql = require("mysql2/promise") 

async function getData(){
  //链接mysql
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456Oo',
    port: '3306',
    database: 'test'
  })

  connection.query('select * from user').then( res=>{
    console.log("获取成功", res)
    return res
  }).catch( err =>{
    console.log("获取失败", err)
    return err
  })
}

let data = getData()

console.log(data)