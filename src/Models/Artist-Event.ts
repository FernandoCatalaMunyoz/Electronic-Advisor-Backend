import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Artist } from "./Artist";
import { Event } from "./Event";

@Entity("artist-event")
export class ArtistEvent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Artist, (artist) => artist.artistEvents)
  @JoinColumn({ name: "artist_id" })
  artist!: Artist;

  @ManyToOne(() => Event, (event) => event.artistEvents)
  @JoinColumn({ name: "event_id" })
  event!: Event;
}
