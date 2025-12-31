import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  // Soft Delete: Cực quan trọng trong Enterprise để khôi phục dữ liệu lỡ tay xóa
  @DeleteDateColumn({ type: 'timestamptz', nullable: true })
  deletedAt: Date;
}
