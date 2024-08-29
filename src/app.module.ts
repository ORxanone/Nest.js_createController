import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';

@Module({
  imports: [
    // TypeOrmModule.forRootAsync({
    //   useFactory: () => ({
    //     type: 'postgres',
    //     host: process.env.DB_HOST,
    //     port: parseInt(process.env.DB_PORT),
    //     username: process.env.DB_USER,
    //     password: 'secret', //'yBX0JkFZ4IGT',
    //     database: process.env.DB_NAME,
    //     entities: [User],
    //     synchronize: true,
    //   }),
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'secret',
      database: 'postgres',
      entities: [User, Product],
      synchronize: true,
    }),
    UserModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
