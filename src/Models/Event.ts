import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Club } from "./Club";
import { Artist } from "./Artist";

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

  @ManyToMany(() => Artist)
  @JoinTable({
    name: "artist-event",
    joinColumn: {
      name: "event_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "artist_id",
      referencedColumnName: "id",
    },
  })
  artistEvent?: Event[];
}
