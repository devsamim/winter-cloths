import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductCard = () => {
  const { id } = useParams();

  const [campaign, setCampaign] = useState(null);
  const [formData, setFormData] = useState({
    quantity: "",
    itemType: "",
    pickupLocation: "",
    additionalNotes: "",
  });

  // Fetch campaign data
  useEffect(() => {
    fetch("/allData.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedCampaign = data.find((item) => item.id === parseInt(id));
        setCampaign(selectedCampaign);
      });
  }, [id]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! We will reach your destination soon", {});
    setFormData({
      quantity: "",
      itemType: "",
      pickupLocation: "",
      additionalNotes: "",
    });
  };
  if (!campaign) {
    return <p>Loading...</p>;
  }
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-lg">
      <div className="flex justify-center mb-6 p-4">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full max-w-sm rounded-lg shadow-md"
        />
      </div>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 border p-2 w-[60%] mx-auto hover:bg-yellow-100">
        {campaign.title}
      </h1>
      <div className="border p-2">
        <p className="text-gray-600 mb-4 text-center text-xl">
          <strong className="text-xl">Description : </strong>
          {campaign.description}
        </p>

        <p className="text-gray-600 mb-4 text-center text-xl">
          <strong className="text-xl">Division:</strong> {campaign.division}
        </p>

        <p className="text-gray-600 mb-4 text-center text-xl">
          <strong className="text-xl">Status:</strong>{" "}
          <span className="font-semibold text-white bg-green-400 p-2 rounded-full">
            {campaign.status}
          </span>
        </p>

        <p className="text-gray-600 mb-4 text-center text-xl">
          <strong className="text-xl">Contact :</strong>
          {campaign.contactInfo}
        </p>
      </div>

      <div className="divider"></div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="quantity"
            className="block text-gray-700 font-medium mb-2"
          >
            Quantity of Items
          </label>
          <input
            type="number"
            id="quantity"
            value={formData.quantity}
            onChange={(e) =>
              setFormData({ ...formData, quantity: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="itemType"
            className="block text-gray-700 font-medium mb-2"
          >
            Item Type
          </label>
          <select
            id="itemType"
            value={formData.itemType}
            onChange={(e) =>
              setFormData({ ...formData, itemType: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select an item type</option>
            <option value="blanket">Blanket</option>
            <option value="jacket">Jacket</option>
            <option value="sweater">Sweater</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="pickupLocation"
            className="block text-gray-700 font-medium mb-2"
          >
            Pickup Location
          </label>
          <input
            type="text"
            id="pickupLocation"
            value={formData.pickupLocation}
            onChange={(e) =>
              setFormData({ ...formData, pickupLocation: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="additionalNotes"
            className="block text-gray-700 font-medium mb-2"
          >
            Additional Notes (Optional)
          </label>
          <textarea
            id="additionalNotes"
            value={formData.additionalNotes}
            onChange={(e) =>
              setFormData({ ...formData, additionalNotes: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-gray-950 text-white font-semibold rounded-lg hover:bg-yellow-100 focus:outline-none hover:text-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductCard;
