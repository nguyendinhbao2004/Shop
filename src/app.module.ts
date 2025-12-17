import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/database.config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './module/product/product.module';
import { ProductController } from './module/product/controller/product.controller';
import { category } from './module/category/entity/category.entity';
import { CategoryModule } from './module/category/category.module';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    ProductModule,
    CategoryModule,

    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    TypeOrmModule.forRootAsync({
      useFactory: databaseConfig,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
