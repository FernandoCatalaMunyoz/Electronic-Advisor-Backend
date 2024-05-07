import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Artist } from "./Artist";
import { Event } from "./Event";

@Entity("artist-event")
export class ArtistEvent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "artist_id" })
  artistId!: number;

  @Column({ name: "event_id" })
  eventId!: number;

  @Column({ name: "created_at" })
  createdAt!: Date;

  @Column({ name: "updated_at" })
  updatedAt!: Date;

  @OneToMany(() => Artist, (artist) => artist.artistEvent)
  artist!: Artist[];

  @OneToMany(() => Event, (event) => event.artistEvent)
  event!: Event[];
}
