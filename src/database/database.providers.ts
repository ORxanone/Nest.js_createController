// import { TypeOrmModule } from '@nestjs/typeorm';
// import * as process from 'process';

// export const databaseProviders = [
//   TypeOrmModule.forRootAsync({
//     useFactory: () => ({
//       type: 'postgres',
//       host: process.env.DB_HOST,
//       port: parseInt(process.env.DB_PORT, 10) || 5432,
//       username: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
//       synchronize: true,
//     }),
//   }),
// ];