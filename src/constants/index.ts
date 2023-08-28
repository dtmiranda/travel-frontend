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

]




export { testimonial, categories };