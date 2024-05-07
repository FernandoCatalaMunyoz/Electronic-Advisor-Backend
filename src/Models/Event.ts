import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { Club } from "./Club";
import { ArtistEvent } from "./Artist-Event";

@Entity("events")
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "name" })
  name!: string;

  @Column({ name: "month" })
  month!: number;

  @Column({ name: "day" })
  day!: number;

  @Column({ name: "year" })
  year!: number;

  @ManyToOne(() => Club, (club) => club.event)
  @JoinColumn({ name: "club_id" })
  club!: Club;

  @OneToMany(() => ArtistEvent, (artistEvent) => artistEvent.event)
  artistEvents!: ArtistEvent;
}
