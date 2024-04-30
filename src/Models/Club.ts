import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { Event } from "./Event";
@Entity("clubs")
export class Club extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "name" })
  firstName!: string;

  @Column({ name: "adress" })
  lastName!: string;

  @Column({ name: "link" })
  country!: string;

  @Column({ name: "created_at" })
  createdAt!: Date;

  @Column({ name: "updated_at" })
  updatedAt!: Date;

  @OneToMany(() => Event, (event) => event.club)
  events!: Event[];
}
