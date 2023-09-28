import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";

@Entity({ name: "wallets" })
export class WalletEntity extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    name: "user_id",
    nullable: false,
    unique: true,
  })
  userId!: string;

  @Column({
    nullable: false,
    unique: true,
  })
  address!: string;

  @Column({
    name: "private_key",
    nullable: false,
    unique: true,
  })
  privateKey!: string;

  @Column({
    name: "public_key",
    nullable: false,
    unique: true,
  })
  publicKey!: string;

  @CreateDateColumn({
    name: "created_at",
  })
  createdAt!: Date;

  @UpdateDateColumn({
    name: "updated_at",
  })
  updatedAt!: Date;
}
