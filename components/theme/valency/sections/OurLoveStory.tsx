import Image from "next/image"

interface Story {
  title: string
  desc: string
  src: string
}

const Story = ({ title, desc, src }: Story) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 px-4 py-4">
      <Image src={src} alt={title} width={340} height={200} className="border-8 border-[#f7ede2] shadow-2xl" />
      <div className="mt-4">
        <h3 className="mb-1 text-2xl text-primary">{title}</h3>
        <p className="text-sm leading-8 text-gray-500">{desc}</p>
      </div>
    </div>
  )
}

const OurLoveStory = () => {
  return (
    <div className="castoro-regular flex w-full flex-col items-center justify-center bg-[#fef0e1d7] px-4 py-12">
      <div className="text-center">
        <h2 className="mb-4 text-3xl text-primary">Our Love Story</h2>
        <Story
          src="https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/1sM1gcxCr3l3bAH0vK5gnMsbXDAo0jpk0J3lQ1hr.jpg"
          title="First Meeting"
          desc="At the beginning of our acquaintance, we were in the same class when we were in college. He sent a private chat because he knew that we were from the same city. From there we got to know each other."
        />
        <Story
          src="https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/1sM1gcxCr3l3bAH0vK5gnMsbXDAo0jpk0J3lQ1hr.jpg"
          title="Two Become One"
          desc="After getting closer when we met at the Chancellors Cup, we started communicating and meeting up frequently. Then he expressed his feelings and said he wanted to commit"
        />
        <Story
          src="https://zivora.s3.ap-southeast-2.amazonaws.com/users/thoriq-nisa/1sM1gcxCr3l3bAH0vK5gnMsbXDAo0jpk0J3lQ1hr.jpg"
          title="New Journey"
          desc="Year after year passed and brought us closer, we became convinced that we were meant to be together. It wasn't easy for us to get to this point, but it was all worth it."
        />
      </div>
    </div>
  )
}

export default OurLoveStory
