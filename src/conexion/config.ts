import { config } from "mssql";

export const sqlConfig: config = {
  user: 'sa',
  password: '1234',
  database: 'PPI',
  server: 'localhost',
  port: 1433,
  options: {
    trustServerCertificate: true,
    encrypt: true
  }
};