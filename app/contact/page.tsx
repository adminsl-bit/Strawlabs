"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Footer } from "@/components/footer"
import { TransitionLink } from "@/components/transition-link"
import { ArrowLeft } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `New Contact Form Submission:
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}`

    const whatsappNumber = "919791743010" // Updated to user's number
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Open WhatsApp with pre-filled message
    window.open(whatsappUrl, "_blank")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="h-full overflow-y-auto flex flex-col pt-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 max-w-2xl text-center flex-grow mb-12">
        <div className="flex justify-start mb-8">
          <TransitionLink href="/" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </TransitionLink>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-neutral-300 mb-6">We'd love to hear from you. Drop us a line below.</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-12 text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium tracking-wider uppercase opacity-50">Visit:</span> 18, Arul Malar Convent Street, KK Nagar, Madurai-625020
          </div>
          <a href="tel:+919791743010" className="hover:text-white transition-colors flex items-center gap-2">
            <span className="text-sm font-medium tracking-wider uppercase opacity-50">Call:</span> +91 97917 43010
          </a>
          <a href="mailto:info@strawlabs.in" className="hover:text-white transition-colors flex items-center gap-2">
            <span className="text-sm font-medium tracking-wider uppercase opacity-50">Email:</span> info@strawlabs.in
          </a>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="bg-[#1a1a1a] border-neutral-700 text-white"
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="bg-[#1a1a1a] border-neutral-700 text-white"
            />
          </div>
          <Input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="bg-[#1a1a1a] border-neutral-700 text-white"
          />
          <Input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="bg-[#1a1a1a] border-neutral-700 text-white"
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            required
            className="bg-[#1a1a1a] border-neutral-700 text-white"
          />
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="bg-white text-black hover:bg-neutral-200 font-bold text-lg px-10 py-6"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}
