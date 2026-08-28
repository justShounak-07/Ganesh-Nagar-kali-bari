"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/siteContent";

export const DonationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    amount: "",
    date: "",
    transactionId: "",
    paymentMethod: "UPI",
    message: "",
  });

  const [botcheck, setBotcheck] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    if (botcheck !== "") {
      setStatus("success");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: siteContent.donationFormConfig.formEndpointKey,
          subject: `Donation Receipt Request from ${formData.name}`,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          amount: `INR ${formData.amount}`,
          date: formData.date,
          transaction_id: formData.transactionId,
          payment_method: formData.paymentMethod,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please check your inputs and try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage("Could not reach the submission server. Please verify your network connection.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-surface-container-low border border-outline-variant p-8 rounded-lg text-center space-y-6 animate-in fade-in duration-300">
        <span className="material-symbols-outlined text-[64px] text-secondary">
          check_circle
        </span>
        <h3 className="font-display text-2xl font-bold text-primary">Receipt Request Submitted</h3>
        <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-md mx-auto leading-relaxed">
          Thank you, <strong>{formData.name}</strong>. Your request for a donation receipt of <strong>₹{formData.amount}</strong> has been successfully dispatched. We will verify transaction ID <code>{formData.transactionId}</code> against our bank records and email you the receipt.
        </p>
        <button
          onClick={() => {
            setFormData({
              name: "",
              phone: "",
              email: "",
              amount: "",
              date: "",
              transactionId: "",
              paymentMethod: "UPI",
              message: "",
            });
            setStatus("idle");
          }}
          className="inline-flex items-center justify-center bg-primary text-on-primary px-6 py-2.5 rounded-default font-sans text-sm font-semibold uppercase tracking-wider hover:bg-primary-container transition-colors shadow-sm"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface-card border border-outline-variant/35 p-8 rounded-lg shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field (hidden from users, exposed to spam bots) */}
        <input
          type="text"
          name="botcheck"
          value={botcheck}
          onChange={(e) => setBotcheck(e.target.value)}
          className="hidden"
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* Error Alert Banner */}
        {status === "error" && (
          <div className="bg-error/10 border-l-4 border-error p-4 rounded-r-md text-left flex items-start gap-3">
            <span className="material-symbols-outlined text-error">error</span>
            <div>
              <p className="font-sans text-xs font-bold text-error uppercase tracking-wider">Submission Error</p>
              <p className="font-sans text-sm text-on-surface-variant mt-1">{errorMessage}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="name" className="font-sans text-sm font-semibold text-on-surface-variant">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border border-outline rounded-default bg-surface hover:border-primary focus:border-primary focus:outline-none transition-colors text-base"
              placeholder="E.g. Shounak Sen"
            />
          </div>

          {/* Mobile Number */}
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="phone" className="font-sans text-sm font-semibold text-on-surface-variant">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border border-outline rounded-default bg-surface hover:border-primary focus:border-primary focus:outline-none transition-colors text-base"
              placeholder="E.g. +91 98765 43210"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="email" className="font-sans text-sm font-semibold text-on-surface-variant">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border border-outline rounded-default bg-surface hover:border-primary focus:border-primary focus:outline-none transition-colors text-base"
              placeholder="E.g. helper@example.com"
            />
          </div>

          {/* Donation Amount */}
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="amount" className="font-sans text-sm font-semibold text-on-surface-variant">
              Donation Amount (INR) *
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              min="1"
              className="w-full px-4 py-2.5 border border-outline rounded-default bg-surface hover:border-primary focus:border-primary focus:outline-none transition-colors text-base"
              placeholder="E.g. 501"
            />
          </div>

          {/* Date of Transfer */}
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="date" className="font-sans text-sm font-semibold text-on-surface-variant">
              Date of Transfer *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border border-outline rounded-default bg-surface hover:border-primary focus:border-primary focus:outline-none transition-colors text-base"
            />
          </div>

          {/* Transaction / Reference ID */}
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="transactionId" className="font-sans text-sm font-semibold text-on-surface-variant">
              Transaction / Reference ID *
            </label>
            <input
              type="text"
              id="transactionId"
              name="transactionId"
              value={formData.transactionId}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border border-outline rounded-default bg-surface hover:border-primary focus:border-primary focus:outline-none transition-colors text-base"
              placeholder="UPI Ref No. or Bank Txn ID"
            />
          </div>

          {/* Payment Method */}
          <div className="flex flex-col space-y-1.5 md:col-span-2">
            <label htmlFor="paymentMethod" className="font-sans text-sm font-semibold text-on-surface-variant">
              Payment Method *
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 border border-outline rounded-default bg-surface hover:border-primary focus:border-primary focus:outline-none transition-colors text-base"
            >
              <option value="UPI">UPI (Google Pay / PhonePe / Paytm)</option>
              <option value="Bank Transfer">Bank Transfer (IMPS / NEFT / RTGS)</option>
              <option value="Cheque">Cheque</option>
              <option value="Cash">Cash (Handed to Office Bearer)</option>
            </select>
          </div>

          {/* Message / Purpose */}
          <div className="flex flex-col space-y-1.5 md:col-span-2">
            <label htmlFor="message" className="font-sans text-sm font-semibold text-on-surface-variant">
              Message / Purpose (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2.5 border border-outline rounded-default bg-surface hover:border-primary focus:border-primary focus:outline-none transition-colors text-base resize-none"
              placeholder="E.g. Puja contribution or welfare donation details..."
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-primary text-on-primary py-3.5 rounded-default font-sans text-sm font-semibold uppercase tracking-wider hover:bg-primary-container disabled:bg-primary/50 transition-colors shadow-md active:scale-98"
          >
            {status === "submitting" ? "Submitting Request..." : "Submit Receipt Request"}
          </button>
        </div>
      </form>
    </div>
  );
};
