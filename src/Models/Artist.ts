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
import { Genre } from "./Genre";
import { Event } from "./Event";
import { ArtistEvent } from "./Artist-Event";

@Entity("artists")
export class Artist extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "name" })
  name!: string;

  @Column({ name: "country" })
  country!: string;

  @Column({ name: "created_at" })
  createdAt!: Date;

  @Column({ name: "updated_at" })
  updatedAt!: Date;

  @ManyToOne(() => Genre, (genre) => genre.artist)
  @JoinColumn({ name: "genre_id" })
  genre!: Genre;

  @ManyToOne(() => ArtistEvent, (artistEvent) => artistEvent.artist)
  @JoinColumn({ name: "artistEvent_id" })
  artistEvent!: ArtistEvent;
}
