interface CardProps {
  title: string
  desc: string
  label: string
}

const Card = ({ title, desc, label }: CardProps) => {
  return (
    <div className="text-center bg-[#fef0e1d7] px-4 py-12 rounded-xl mb-4 shadow-2xl">
      <h3 className="castoro-regular text-primary mb-3 text-center text-xl font-semibold">{title}</h3>
      <p className="castoro-regular text-body leading-8 text-sm">{desc}</p>

      <div className="flex items-center justify-center mt-4">
        <button
          className="castoro-regular flex items-center justify-center gap-2 rounded-full border-0 bg-gradient-to-r from-secondary to-primary p-3 text-sm text-white"
        >
          <svg className="size-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>

          <p className="text-sm leading-3">{label}</p>
        </button>
      </div>
    </div>
  )
}

export default function GiftAndStreaming() {
  return (
    <div className="flex flex-col gap-4 px-5 py-12 text-center relative overflow-clip">
      <Card
        title="WEDDING GIFT"
        desc="Your presence is a present in itself. But if you do wish to give us something else, please tap the button down below for further information:"
        label="WEDDING GIFT"
      />
      <Card
        title="LIVE STREAMING"
        desc="We invite those of you who cannot attend in person to join our special moment through a virtual live streaming by clicking the following:"
        label="LIVE STREAMING"
      />
    </div>
  );
}
