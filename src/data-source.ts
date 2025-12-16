// src/data-source.ts
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config(); // Load biến môi trường từ .env

export const AppDataSource = new DataSource({
  type: 'mssql', // Hoặc mysql, postgres tùy DB của bạn
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 1433,
  username: process.env.DB_USERNAME || 'sa',
  password: process.env.DB_PASSWORD || 'Sa@12345',
  database: process.env.DB_DATABASE || 'SaleDb',
  synchronize: false,
  logging: true,
  entities: ['src/**/*.entity.ts'], // Quan trọng: trỏ đúng vào file .ts
  migrations: ['src/migrations/*.ts'],
  migrationsTableName: 'migrations',
  options: {
    encrypt: false, // Dành cho MSSQL nếu bị lỗi SSL
    trustServerCertificate: true,
  },
});

// Quan trọng: Phải initialize thì CLI mới không báo lỗi trong một số trường hợp,
// nhưng thường CLI sẽ tự init. Quan trọng nhất là phải EXPORT biến này.
