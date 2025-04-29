"use client"

import { ReactNode, useContext, useEffect, useState } from "react"
import { createContext } from "react"
import { useParams } from "next/navigation"
import getWeddingBySlug from "@/api/getWeddingBySlug"
import { Wedding } from "@/interfaces"

interface WeddingContextData {
  data: Wedding | undefined
}

const WeddingContext = createContext<WeddingContextData | undefined>(undefined)

function useWeddingContext(): WeddingContextData {
  const context = useContext(WeddingContext)

  if (!context) {
    throw new Error("useWeddingContext must be used within a WeddingProvider")
  }
  return context
}

const dumy = {
  data: {
    id: 1,
    slug: "thoriq-nisa",
    user_id: 1,
    our_journey:
      "And of His signs is that He created for you from yourselves mates that you may find tranquility in them, and He placed between you affection and mercy. Indeed in that are signs for a people who give thought. (Q.S Ar-Rum: 21)",
    active_until: "2025-12-31",
    wedding_date: "2025-05-15",
    wedding_music: "Perfect - Ed Sheeran",
    wedding_theme: "Rustic",
    groom_name: "Thoriq Dharmawan",
    groom_nickname: "Thoriq",
    groom_photo:
      "https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/TnkrklkDHc2oVzGnzimpHBtjbKUkmZ22aEVO1iS4.jpg",
    groom_parent: "Ir. Endang Jumhana & Mrs. Nengsih Maryati",
    groom_instagram: "johnny_doe",
    groom_whatsapp: "+1234567890",
    bride_name: "Nisatun Hasanah",
    bride_nickname: "Nisa",
    bride_photo:
      "https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/f5V7ssSC088njEOM3pNTlA7CCevO9feeDk0b4ERw.jpg",
    bride_parent: "Mr. Masrial, S.T. & Mrs. S. Martika",
    bride_instagram: "janie_smith",
    bride_whatsapp: "+0987654321",
    photo_highlight_one:
      "https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/3JEsPzxOXvtc3rNkuRsnyoV8ACEF5vdXzvdDL0UG.jpg",
    photo_highlight_two:
      "https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/3JEsPzxOXvtc3rNkuRsnyoV8ACEF5vdXzvdDL0UG.jpg",
    akad_date: "2025-05-05",
    akad_time: "15.00 – 17.00 WIB",
    akad_location_name: "Holiday Inn Bandung Pasteur (Pasteur Convention Center)",
    akad_address: "Jl. Dr. Djunjunan No.96, Pasteur, Kec. Sukajadi, Kota Bandung, Jawa Barat",
    akad_lat: "40.7128",
    akad_lng: "-74.0060",
    reception_date: "2025-05-15",
    reception_time: "18.00 – 20.00 WIB",
    reception_location_name: "Luxury Hotel",
    reception_address: "Jl. Dr. Djunjunan No.96, Pasteur, Kec. Sukajadi, Kota Bandung, Jawa Bara",
    reception_lat: "40.7128",
    reception_lng: "-74.0060",
    video_youtube_link: "https://youtube.com/some_wedding_video",
    live_streaming_link: "https://streaming.com/live_wedding",
    thanks_image: "https://example.com/images/thanks.jpg",
    thanks_message: "Thank you for celebrating our special day with us!",
    created_at: "2025-04-29T09:03:13.000000Z",
    updated_at: "2025-04-29T09:07:25.000000Z",
    photos: [
      {
        id: 3,
        wedding_id: 1,
        url: "https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/5bHjZz9XyhY5AU7kDc3uwNiePY3pHfWVXLZDgPJA.jpg",
        name: "New Memory 1",
        alt: null,
        created_at: "2025-04-29T09:07:25.000000Z",
        updated_at: "2025-04-29T09:07:25.000000Z",
      },
      {
        id: 4,
        wedding_id: 1,
        url: "https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/NQ89sUL8HlvS1hdLjQxLQPP4pBrZXrJdyDbY0luD.jpg",
        name: "New Memory 2",
        alt: null,
        created_at: "2025-04-29T09:07:25.000000Z",
        updated_at: "2025-04-29T09:07:25.000000Z",
      },
      {
        id: 5,
        wedding_id: 1,
        url: "https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/1sM1gcxCr3l3bAH0vK5gnMsbXDAo0jpk0J3lQ1hr.jpg",
        name: "New Memory 3",
        alt: null,
        created_at: "2025-04-29T09:07:25.000000Z",
        updated_at: "2025-04-29T09:07:25.000000Z",
      },
      {
        id: 6,
        wedding_id: 1,
        url: "https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/sgDnzZyWhX6fyeqNvfbOAWQctvkrSnq30DHviDJO.jpg",
        name: "New Memory 4",
        alt: null,
        created_at: "2025-04-29T09:07:25.000000Z",
        updated_at: "2025-04-29T09:07:25.000000Z",
      },
      {
        id: 7,
        wedding_id: 1,
        url: "https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/3ewHOhIF50eaMjPlqxIdEjulkYHA8Tj3ETUBzbYP.jpg",
        name: "New Memory perkotaan 1",
        alt: null,
        created_at: "2025-04-29T09:07:25.000000Z",
        updated_at: "2025-04-29T09:07:25.000000Z",
      },
      {
        id: 8,
        wedding_id: 1,
        url: "https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/XPXia6uoPjWFRLi6ekLmoFMl9t66FvGJmLbNqtME.jpg",
        name: "New Memory perkotaan 2",
        alt: null,
        created_at: "2025-04-29T09:07:25.000000Z",
        updated_at: "2025-04-29T09:07:25.000000Z",
      },
      {
        id: 9,
        wedding_id: 1,
        url: "https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/CIi9vRbP0IXgIXmDysa7FdFj3DGBQtgadsjLBcqz.jpg",
        name: "New Memory perkotaan 3",
        alt: null,
        created_at: "2025-04-29T09:07:25.000000Z",
        updated_at: "2025-04-29T09:07:25.000000Z",
      },
      {
        id: 10,
        wedding_id: 1,
        url: "https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/ZknwCNIPnZOll8YcfXIU9doXYAfEjdDEOM8JC29F.jpg",
        name: "New Memory perkotaan 4",
        alt: null,
        created_at: "2025-04-29T09:07:25.000000Z",
        updated_at: "2025-04-29T09:07:25.000000Z",
      },
    ],
  },
}

const WeddingProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Wedding | undefined>(dumy.data)
  const { slug } = useParams<{ slug: string }>()

  useEffect(() => {
    getWeddingBySlug(slug)
      .then(({ data }) => (data ? setData(data) : null))
      .catch((error) => console.error(error))
  }, [slug])

  return <WeddingContext.Provider value={{ data }}>{children}</WeddingContext.Provider>
}

export { WeddingProvider, useWeddingContext }
