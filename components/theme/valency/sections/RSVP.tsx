import { useState, FormEvent } from "react"
import PaperPlaneIcon from "@/components/icons/PaperPlane"

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    attendance: "yes",
    guests: "1",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      setSubmitStatus({ success: false, message: "Please enter your name" })
      return
    }

    if (formData.attendance === "yes" && !formData.guests) {
      setSubmitStatus({ success: false, message: "Please select number of guests" })
      return
    }

    try {
      setIsSubmitting(true)

      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Failed to submit RSVP")

      setSubmitStatus({
        success: true,
        message: "Thank you for your RSVP!",
      })

      setFormData({
        name: "",
        address: "",
        attendance: "yes",
        guests: "",
      })
    } catch {
      setSubmitStatus({
        success: false,
        message: "Failed to submit RSVP. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      data-sal="slide-up"
      data-sal-duration="2000"
      data-sal-easing="ease-in-out-quint"
      className="castoro-regular flex flex-col gap-12 bg-[#fef0e1] px-5 py-12"
    >
      <div className="text-center">
        <h2 className="text-primary mb-4 text-2xl font-bold">RSVP</h2>
        <p className="text-sm leading-8 text-gray-500">
          Please help us prepare everything better by confirming your attendance at our wedding event with the following
          RSVP form:
        </p>
      </div>

      {submitStatus.message && (
        <div className={`text-center ${submitStatus.success ? "text-green-600" : "text-red-600"}`}>
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <div className="w-full max-w-sm">
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Input Name"
            className="w-full rounded-sm border bg-white p-2 text-sm"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="w-full max-w-sm">
          <label htmlFor="address" className="mb-1 block text-sm font-medium text-gray-700">
            Address (optional)
          </label>
          <input
            id="address"
            type="text"
            placeholder="Input Address"
            className="w-full rounded-sm border bg-white p-2 text-sm"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="w-full max-w-sm">
          <label htmlFor="attendance" className="mb-1 block text-sm font-medium text-gray-700">
            Will you attend?
          </label>
          <select
            id="attendance"
            className="w-full rounded-sm border bg-white p-2 text-sm"
            value={formData.attendance}
            onChange={handleChange}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="w-full max-w-sm">
          <label htmlFor="guests" className="mb-1 block text-sm font-medium text-gray-700">
            Amount of guests
          </label>
          <select
            id="guests"
            className="w-full rounded-sm border bg-white p-2 text-sm"
            value={formData.guests}
            onChange={handleChange}
            disabled={formData.attendance === "no"}
          >
            <option value="">Select number of guests</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="mt-4 w-full max-w-sm">
          <button
            type="submit"
            disabled={isSubmitting}
            className="castoro-regular from-secondary to-primary flex w-full items-center justify-center gap-4 rounded-full border-0 bg-linear-to-r p-3 text-sm text-white disabled:opacity-70"
          >
            <PaperPlaneIcon />
            <p className="text-sm">{isSubmitting ? "Submitting..." : "Submit"}</p>
          </button>
        </div>
      </form>
    </div>
  )
}

export default RSVP
