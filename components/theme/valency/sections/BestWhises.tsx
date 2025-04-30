import { useState } from "react"
import Pagination from "@/components/common/Pagination"
import PaperPlaneIcon from "@/components/icons/PaperPlane"

const BestWhises = () => {
  const [formData, setFormData] = useState({ name: "", wish: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const [page, setPage] = useState(1)
  const totalPages = 3

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setError("")
    setSuccess(false)
    setIsLoading(false)

    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.wish.trim()) {
      setError("Please fill in all fields")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/wishes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: formData.name, wish: formData.wish }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit wish")
      }

      setSuccess(true)
      setFormData({ name: "", wish: "" })
    } catch (err) {
      setError("Failed to submit your wish. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      data-sal="slide-up"
      data-sal-duration="2000"
      data-sal-easing="ease-out-back"
      className="castoro-regular flex flex-col gap-12 bg-[#fef0e1] px-5 py-12"
    >
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold text-primary">BEST WHISES</h2>
        <p className="text-sm leading-8 text-gray-500">
          We are so grateful to have you in our lives. Your presence at our wedding is the greatest gift of all. Thank
          you for being a part of our special day!
        </p>
      </div>

      {success && (
        <div className="text-center text-green-600">
          <p>Thank you for your wish!</p>
        </div>
      )}

      <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
        {error && <p className="text-sm text-red-500">{error}</p>}

        <div className="w-full max-w-sm">
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Input Name"
            className="w-full rounded border p-2 text-sm"
          />
        </div>

        <div className="w-full max-w-sm">
          <label htmlFor="wish" className="mb-1 block text-sm font-medium text-gray-700">
            Your Best Whises
          </label>
          <textarea
            id="wish"
            name="wish"
            value={formData.wish}
            onChange={handleChange}
            placeholder="Input Whises"
            rows={4}
            className="w-full rounded border p-2 text-sm"
          />
        </div>

        <div className="mt-4 w-full max-w-sm">
          <button
            type="submit"
            disabled={isLoading}
            className="castoro-regular flex w-full items-center justify-center gap-4 rounded-full border-0 bg-gradient-to-r from-secondary to-primary p-3 text-sm text-white disabled:opacity-70"
          >
            <PaperPlaneIcon />
            <p className="text-sm">{isLoading ? "Submitting..." : "Submit"}</p>
          </button>
        </div>
      </form>

      <div>
        <div className="flex flex-col gap-1">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className="rounded p-4">
              <p className="mb-3 text-lg font-semibold text-primary">John Doe</p>
              <p className="text-sm leading-7 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
          ))}
        </div>
      </div>

      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  )
}

export default BestWhises
