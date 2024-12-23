"use client"; 

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { PDFDocument, rgb } from "pdf-lib"; 

export default function PaymentPage() {
  const router = useRouter(); 

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [cardType, setCardType] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  // Function to detect card type
  const detectCardType = (number: string) => {
    const visaRegex = /^4[0-9]{0,15}$/; // Visa starts with 4
    const masterCardRegex = /^(5[1-5][0-9]{0,14}|2[2-7][0-9]{0,14})$/; // MasterCard starts with 51-55 or 2221-2720

    if (visaRegex.test(number)) {
      return "Visa";
    } else if (masterCardRegex.test(number)) {
      return "MasterCard";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update form data
    setFormData({ ...formData, [name]: value });

    // Detect card type when updating card number
    if (name === "cardNumber") {
      const detectedType = detectCardType(value);
      setCardType(detectedType);
    }
  };

  const generatePDFReceipt = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);

    page.drawText("Payment Receipt", {
      x: 50,
      y: 350,
      size: 20,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Name: ${formData.name}`, {
      x: 50,
      y: 320,
      size: 12,
      color: rgb(0, 0, 0),
    });

    page.drawText(
      `Address: ${formData.address}, ${formData.city}, ${formData.state} - ${formData.zipCode}`,
      {
        x: 50,
        y: 300,
        size: 12,
        color: rgb(0, 0, 0),
      }
    );

    page.drawText(
      `Order Confirmation: Your order will be delivered within 5-7 business days.`,
      {
        x: 50,
        y: 280,
        size: 12,
        color: rgb(0, 0, 0),
      }
    );

    const pdfBytes = await pdfDoc.save();

    // Create a Blob for download
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "payment-receipt.pdf";
    link.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Generate the PDF receipt
    await generatePDFReceipt();

    // Redirect to order confirmation page after payment
    router.push("/order-confirmation");
  };

  const handleGooglePay = () => {
    setPaymentMethod("Google Pay");
    alert("You selected Google Pay.");
  };

  const handleApplePay = () => {
    setPaymentMethod("Apple Pay");
    alert("You selected Apple Pay.");
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-md shadow-md space-y-4 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Street Address"
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="flex space-x-4">
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State"
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Zip Code</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="Zip Code"
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
            className="w-full border rounded-md px-3 py-2"
            required
          />
          {cardType && (
            <div className="text-sm text-gray-500 mt-1 block flex items-center">
              <span className="mr-2">Detected Card Type:</span>
              {cardType === "Visa" && <FaCcVisa size={24} color="blue" />}
              {cardType === "MasterCard" && <FaCcMastercard size={24} color="red" />}
            </div>
          )}
        </div>
        <div className="flex space-x-4">
          <div>
            <label className="block text-sm font-medium mb-1">Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">CVV</label>
            <input
              type="password"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="123"
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>
        </div>

        {/* Payment method selection */}
        <div className="space-y-2">
          <button
            type="button"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
            onClick={handleGooglePay}
          >
            Pay with Google Pay
          </button>
          <button
            type="button"
            className="w-full bg-black text-white py-2 rounded-md"
            onClick={handleApplePay}
          >
            Pay with Apple Pay
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md mt-4"
        >
          Pay Now
        </button>
      </form>
    </main>
  );
}
