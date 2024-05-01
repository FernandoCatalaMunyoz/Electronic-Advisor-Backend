import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Role } from "./Role";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "firstName" })
  firstName!: string;

  @Column({ name: "lastName" })
  lastName!: string;

  @Column({ name: "country" })
  country!: string;

  @Column({ name: "email" })
  email!: string;

  @Column({ name: "password", select: false })
  password!: string;

  @Column({ name: "created_at" })
  createdAt!: Date;

  @Column({ name: "updated_at" })
  updatedAt!: Date;

  @ManyToOne(() => Role, (role) => role.user)
  @JoinColumn({ name: "role_id" })
  role!: Role;
}
