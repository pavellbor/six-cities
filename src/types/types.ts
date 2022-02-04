import { Host } from "./offer";

export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export type Points = Point[];

export type Review = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: Host;
};