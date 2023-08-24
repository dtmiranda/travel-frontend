
import Head from "next/head"
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
import TrailCard from "../src/components/TrailCard"

const trails = [


  {
    id: 1,
    name: 'Trilha de Serra Malagueta',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis dignissimos quos sint excepturi blanditiis labore dolore. Eligendi deserunt nulla dignissimos facilis quos. Impedit, excepturi est cum sit iusto quisquam.",
    trail_thumbnails: 'https://hotelrouxinol.com.br/wp-content/uploads/2019/02/saiba-aqui-quais-sao-as-5-melhores-trilhas-em-santa-catarina-719x480.jpeg',
    start_coordinate: "5345345345534",
    end_coordinate: "5345345345534",
    price: '$35',
    duration: "45",
    star_range: "4.95",
    city: "Calheta",

  }, {
    id: 2,
    name: 'Trilha de Serra Malagueta',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis dignissimos quos sint excepturi blanditiis labore dolore. Eligendi deserunt nulla dignissimos facilis quos. Impedit, excepturi est cum sit iusto quisquam.",
    trail_thumbnails: 'https://hotelrouxinol.com.br/wp-content/uploads/2019/02/saiba-aqui-quais-sao-as-5-melhores-trilhas-em-santa-catarina-719x480.jpeg',
    start_coordinate: "5345345345534",
    end_coordinate: "5345345345534",
    price: '$35',
    duration: "45",
    star_range: "4.95",
    city: "Calheta",

  }, {
    id: 3,
    name: 'Trilha de Serra Malagueta',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis dignissimos quos sint excepturi blanditiis labore dolore. Eligendi deserunt nulla dignissimos facilis quos. Impedit, excepturi est cum sit iusto quisquam.",
    trail_thumbnails: 'https://hotelrouxinol.com.br/wp-content/uploads/2019/02/saiba-aqui-quais-sao-as-5-melhores-trilhas-em-santa-catarina-719x480.jpeg',
    start_coordinate: "5345345345534",
    end_coordinate: "5345345345534",
    price: '$35',
    duration: "45",
    star_range: "4.95",
    city: "Calheta",

  }, {
    id: 4,
    name: 'Trilha de Serra Malagueta',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis dignissimos quos sint excepturi blanditiis labore dolore. Eligendi deserunt nulla dignissimos facilis quos. Impedit, excepturi est cum sit iusto quisquam.",
    trail_thumbnails: 'https://hotelrouxinol.com.br/wp-content/uploads/2019/02/saiba-aqui-quais-sao-as-5-melhores-trilhas-em-santa-catarina-719x480.jpeg',
    start_coordinate: "5345345345534",
    end_coordinate: "5345345345534",
    price: '$35',
    duration: "45",
    star_range: "4.95",
    city: "Calheta",

  }, {
    id: 5,
    name: 'Trilha de Serra Malagueta',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis dignissimos quos sint excepturi blanditiis labore dolore. Eligendi deserunt nulla dignissimos facilis quos. Impedit, excepturi est cum sit iusto quisquam.",
    trail_thumbnails: 'https://hotelrouxinol.com.br/wp-content/uploads/2019/02/saiba-aqui-quais-sao-as-5-melhores-trilhas-em-santa-catarina-719x480.jpeg',
    start_coordinate: "5345345345534",
    end_coordinate: "5345345345534",
    price: '$35',
    duration: "45",
    star_range: "4.95",
    city: "Calheta",

  }, {
    id: 6,
    name: 'Trilha de Serra Malagueta',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis dignissimos quos sint excepturi blanditiis labore dolore. Eligendi deserunt nulla dignissimos facilis quos. Impedit, excepturi est cum sit iusto quisquam.",
    trail_thumbnails: 'https://hotelrouxinol.com.br/wp-content/uploads/2019/02/saiba-aqui-quais-sao-as-5-melhores-trilhas-em-santa-catarina-719x480.jpeg',
    start_coordinate: "5345345345534",
    end_coordinate: "5345345345534",
    price: '$35',
    duration: "45",
    star_range: "4.95",
    city: "Calheta",

  },

  // More products...
]

export default function Trails() {
  return (
    <>
      <Head>
        <title>
          TravelNorth
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className="mt-8">
        <div className="mx-auto text-center max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Incredible
            <span className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl"> trails</span>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            There is so many incredible trails in the north that you can explore with us.
          </p>
        </div>

      </section>

      <section>
        <div className="mx-auto max-w-2xl pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {trails.map((trail) => {
              return (
                <div key={trail.id} className="group relative">

                  <TrailCard {...trail} />

                </div>
              )
            }
            )}

          </div>
        </div>
      </section>


      <Footer />

    </>

  )

}
