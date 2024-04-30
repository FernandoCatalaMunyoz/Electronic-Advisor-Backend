import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Club } from "./Club";

@Entity("events")
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "name" })
  name!: string;

  @ManyToOne(() => Club, (club) => club.events)
  @JoinColumn({ name: "club_id" })
  club!: Club;
}
