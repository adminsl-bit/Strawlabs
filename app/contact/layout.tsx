import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with S.T.R.A.W. Labs. We'd love to hear from you and discuss how we can help transform your AI concepts into clarity.",
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
