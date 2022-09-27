import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { ProductService } from './service/product/product.service';
import { ProductsController } from './controller/product.controller';

@Module({
  providers: [ProductService],
  imports: [
    TypeOrmModule.forFeature([ProductEntity])
  ],
  controllers: [ProductsController],
})
export class ProductModule {}
