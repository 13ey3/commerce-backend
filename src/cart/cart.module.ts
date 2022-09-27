import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/auth/user.entity';
import { ProductEntity } from 'src/product/product.entity';
import { ProductService } from 'src/product/service/product/product.service';
import { CartEntity } from './cart.entity';
import { CartService } from './service/cart.service';
import { CartController } from './controller/cart.controller';

@Module({
  providers: [CartService, ProductService],
  imports: [TypeOrmModule.forFeature([CartEntity, ProductEntity, Users])],
  controllers: [CartController],
})
export class CartModule {}
