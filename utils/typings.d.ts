export interface Stays{
  id:string,
  name: string,
  coordinate: string,
  thumbnails: string,
  rooms: number,
  city: string,

}

export interface Island{
  id: string;
  name: string;
}

export interface City{
  id: string;
  name: string;
  islandId: string;
}