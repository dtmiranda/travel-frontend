import { restaurant, bed, fair, museum, trail } from '../assets'



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const testimonial = [
  {
    id: 1,
    username: "Bonnie Green",
    user_avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    city: "California",
    message: "Interesting plataform to helps you find places in santiago north",

  },
  {
    id: 2,
    username: "Bonnie Green",
    user_avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    city: "California",
    message: "Interesting plataform to helps you find places in santiago north",

  },
  {
    id: 3,
    username: "Bonnie Green",
    user_avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    city: "California",
    message: "Interesting plataform to helps you find places in santiago north",

  },
  {
    id: 4,
    username: "Bonnie Green",
    user_avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    city: "California",
    message: "Interesting plataform to helps you find places in santiago north",

  },

];



const categories = [
  {
    name: "Accomodation",
    link: "/accomodation",
    icon: bed,
    alt: "Accomodation"
  },

  {
    name: "Food & Drink",
    link: "/restaurants",
    icon: restaurant,
    alt: "Food and drink"
  },

  {
    name: "Arte & History",
    link: "/history",
    icon: museum,
    alt: "Arte & History"
  },

  {
    name: "Trails",
    link: "/trails",
    icon: trail,
    alt: "Trails"
  },

  {
    name: "Events",
    link: "/events",
    icon: fair,
    alt: "Events"
  },

];

const destinations = [
  {
    id: "1",
    name: 'Hotel Edu Horizonte',
    city: "Calheta",
    price: 5500,
    rating: 4.9,
    amenities: [
      "wifi",
      "pool"
    ],
    photos: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e9/04/20/villa-morgana-resort.jpg?w=1200&h=-1&s=1'
    ],

  },

  {
    id: "2",
    name: 'Hotel Edu Horizonte',
    city: "Calheta",
    price: 5500,
    rating: 4.9,
    amenities: [
      "wifi",
      "pool"
    ],
    photos: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e9/04/20/villa-morgana-resort.jpg?w=1200&h=-1&s=1'
    ],

  }, 
  
  {
    id: "3",
    name: 'Hotel Edu Horizonte',
    city: "Calheta",
    price: 5500,
    rating: 4.9,
    amenities: [
      "wifi",
      "pool"
    ],
    photos: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e9/04/20/villa-morgana-resort.jpg?w=1200&h=-1&s=1'
    ],
  }, 
  
  {
    id: "4",
    name: 'Hotel Edu Horizonte',
    city: "Calheta",
    price: 5500,
    rating: 4.9,
    amenities: [
      "wifi",
      "pool"
    ],
    photos: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e9/04/20/villa-morgana-resort.jpg?w=1200&h=-1&s=1'
    ],

  },
  
  {
    id: "5",
    name: 'Hotel Edu Horizonte',
    city: "Calheta",
    price: 5500,
    rating: 4.9,
    amenities: [
      "wifi",
      "pool"
    ],
    photos: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e9/04/20/villa-morgana-resort.jpg?w=1200&h=-1&s=1'
    ],

  }, 
  
  {
    id: "6",
    name: 'Hotel Edu Horizonte',
    city: "Calheta",
    price: 5500,
    rating: 4.9,
    amenities: [
      "wifi",
      "pool"
    ],
    photos: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/e9/04/20/villa-morgana-resort.jpg?w=1200&h=-1&s=1'
    ],

  },
]

const places = [
  {
    id: "1",
    name:"hotel",
    imgLink:"http://www.multiviagenstour.cv/uploads/images/hotels/slider/134231_32.jpg"
  },

  {
    id: "2",
    name:"rabelados",
    imgLink:"https://lirp.cdn-website.com/02a7372f/dms3rep/multi/opt/IMG_5984-1920w.jpg"
  },

  {
    id: "3",
    name:"rabelados",
    imgLink:"https://lidermagazine.sapo.pt/wp-content/uploads/Leading-Life_Destaque-900x600-1.jpg"
  }
]




export { testimonial, categories, destinations, places };