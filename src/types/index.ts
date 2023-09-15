export interface StaysProps {
  id: string,
  name: string,
  coordinate: string,
  thumbnails: string,
  rooms: number,
  city: string,

}

export interface IslandProps {
  id: string;
  name: string;
}

export interface CityProps {
  id: string;
  name: string;
  islandId: string;
}

export interface TestimonialProps {
  id: string;
  username: string;
  user_avatar: string;
  city: string;
  message: string;
}

export interface RestaurantProps{
  id: string;
  name: string;
  description: string;
  address: string;
  price: number
  rating: number;
  whatsapp: string;
  email: string;
  website: string;
  amenities: string;
  coordinate: string;
  cuisine: string;
  menu: string;
  cityId: string;
  
}

export interface AccomodationProps{
  id?: string;
  name: string;
  city: string
  address?: string;
  state?: string;
  phone?: string;
  price: number
  rating: number
  amenities?: string[];
  email?: string;
  website?: string;
  photos?: string[]
  Review?:string

}

export interface TripPlannerProps{
  id: string;
  name: string;
  imgUrl: string;
  imgAlt: string;

}

