import { ObjectId, Collection } from "mongodb";

export interface Booking {
  _id: ObjectId;
  listing: ObjectId; // One-to-One
  tenant: string; // user _id, One-to-One
  checkIn: string;
  checkOut: string;
}

export enum ListingType {
  Apartment = "APARTMENT",
  House = "HOUSE",
}

interface BookingsIndexMonth {
  [key: string]: boolean;
}

interface BookingsIndexYear {
  [key: string]: BookingsIndexMonth;
}

export interface BookingsIndex {
  [key: string]: BookingsIndexYear;
}

export interface Listing {
  _id: ObjectId;
  title: string;
  description: string;
  image: string;
  host: string; // One-to-One
  type: ListingType;
  address: string;
  country: string;
  admin: string; // analogous to the concept of states or provinces
  city: string;
  bookings: ObjectId[]; // One-to-Many
  bookingsIndex: BookingsIndex;
  price: number;
  numOfGuests: number;
}

export interface User {
  _id: string;
  token: string;
  name: string;
  avatar: string;
  contact: string;
  walletId?: string;
  income: number;
  bookings: ObjectId[]; // One-to-Many
  listings: ObjectId[]; // One-to-Many
}

export interface Database {
  bookings: Collection<Booking>;
  listings: Collection<Listing>;
  users: Collection<User>;
}
