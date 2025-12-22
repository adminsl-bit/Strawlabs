"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
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

        const whatsappNumber = "1234567890" // Replace with your actual WhatsApp number
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
        <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Contact Us</h2>
            <p className="text-lg text-neutral-400 mb-8 text-center max-w-md font-light">
                We'd love to hear from you. Drop us a line below.
            </p>
            <form onSubmit={handleSubmit} className="w-full space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-[#1a1a1a] border-neutral-800 text-white placeholder:text-neutral-500"
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-[#1a1a1a] border-neutral-800 text-white placeholder:text-neutral-500"
                    />
                </div>
                <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-[#1a1a1a] border-neutral-800 text-white placeholder:text-neutral-500"
                />
                <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-[#1a1a1a] border-neutral-800 text-white placeholder:text-neutral-500"
                />
                <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-[#1a1a1a] border-neutral-800 text-white placeholder:text-neutral-500"
                />
                <div className="text-center pt-4">
                    <Button
                        type="submit"
                        size="lg"
                        className="bg-white text-black hover:bg-neutral-200 font-bold text-lg px-8 py-6 w-full"
                    >
                        Send Message
                    </Button>
                </div>
            </form>
        </div>
    )
}
