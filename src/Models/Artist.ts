import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { Genre } from "./Genre";

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

  @OneToMany(() => ArtistEvent, (artistEvent) => artistEvent.artist)
  artistEvents!: ArtistEvent;
}
