import mysql from 'mysql2/promise';

// データベース接続設定
export const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tesutoYOUNOpassword123',
  database: 'TSforum'
});

export default connection;