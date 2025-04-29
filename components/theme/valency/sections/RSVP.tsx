import { useState, FormEvent } from "react";
import PaperPlaneIcon from "@/components/icons/PaperPlane";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    attendance: "yes",
    guests: "1"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setSubmitStatus({ success: false, message: "Please enter your name" });
      return;
    }

    if (formData.attendance === "yes" && !formData.guests) {
      setSubmitStatus({ success: false, message: "Please select number of guests" });
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to submit RSVP');

      setSubmitStatus({
        success: true,
        message: "Thank you for your RSVP!"
      });

      setFormData({
        name: "",
        address: "",
        attendance: "yes",
        guests: ""
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to submit RSVP. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 px-5 flex flex-col gap-12 bg-[#fef0e1] castoro-regular">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-primary">RSVP</h2>
        <p className="text-gray-500 leading-8 text-sm">Please help us prepare everything better by confirming your attendance at our wedding event with the following RSVP form:</p>
      </div>

      {submitStatus.message && (
        <div className={`text-center ${submitStatus.success ? 'text-green-600' : 'text-red-600'}`}>
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <div className="w-full max-w-xs">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Input Name"
            className="border p-2 rounded w-full text-sm"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="w-full max-w-xs">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address (optional)</label>
          <input
            id="address"
            type="text"
            placeholder="Input Address"
            className="border p-2 rounded w-full text-sm"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="w-full max-w-xs">
          <label htmlFor="attendance" className="block text-sm font-medium text-gray-700 mb-1">Will you attend?</label>
          <select
            id="attendance"
            className="border p-2 rounded w-full text-sm"
            value={formData.attendance}
            onChange={handleChange}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="w-full max-w-xs">
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Amount of guests</label>
          <select
            id="guests"
            className="border p-2 rounded w-full text-sm"
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

        <div className="w-full max-w-xs mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="castoro-regular flex items-center justify-center rounded-full border-0 bg-gradient-to-r from-secondary to-primary p-3 text-sm text-white w-full gap-4 disabled:opacity-70"
          >
            <PaperPlaneIcon />
            <p className="text-sm">{isSubmitting ? "Submitting..." : "Submit"}</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default RSVP;