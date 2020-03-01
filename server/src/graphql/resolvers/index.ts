import merge from "lodash.merge";
// import { bookingResolvers } from "./Booking";
import { listingResolvers } from "./Listing";
// import { userResolvers } from "./User";

// export const resolvers = merge(bookingResolvers, listingResolvers, userResolvers);
export const resolvers = merge( listingResolvers);
