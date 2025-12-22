import type { ReactNode } from "react"
import Image from "next/image"

export type Post = {
  title: string
  excerpt: string
  slug: string
  content: React.ReactNode
  cover?: string
  tag?: string
  readingTime?: number // in seconds
  writer?: string
  publishedAt?: Date
}

export const allPosts: Post[] = [
  {
    title: "Building AI Agents for Real-World Use Cases",
    excerpt: "How we build practical AI agents that deliver measurable business value, from WhatsApp assistants to workflow automation.",
    slug: "building-ai-agents",
    tag: "AI Strategy",
    readingTime: 480,
    writer: "Straw Labs Team",
    publishedAt: new Date("2025-01-15"),
    cover: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    content: (
      <>
        <Image
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop"
          alt="AI Agents and Automation"
          width={800}
          height={400}
          className="rounded-lg mb-8"
        />

        <p>
          AI agents are transforming how businesses operate. But the gap between AI hype and practical implementation
          remains wide. At Straw Labs, we focus on building AI agents that solve real problems and deliver measurable value.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">What Makes a Good AI Agent?</h3>
        <p>
          A good AI agent isn't about using the latest model or the most complex architecture. It's about solving a
          specific problem well. We've built agents for customer support, workflow automation, and data processing—each
          tailored to its use case.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Key Principles We Follow</h3>
        <ul className="list-disc list-inside space-y-2 my-4">
          <li><strong>Start Simple:</strong> Begin with clear, focused use cases. A chatbot that handles one thing well beats one that handles everything poorly.</li>
          <li><strong>Measure Impact:</strong> Track real business metrics—response time, resolution rate, cost savings. If you can't measure it, you can't improve it.</li>
          <li><strong>Iterate Fast:</strong> Deploy quickly, gather feedback, improve. The best AI agents evolve with real-world usage.</li>
          <li><strong>Human in the Loop:</strong> AI should augment humans, not replace them. Build escalation paths and feedback mechanisms.</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-4">Real-World Example: WhatsApp Business Assistant</h3>
        <p>
          We recently built a WhatsApp-based AI assistant for a retail business. Instead of trying to handle everything,
          we focused on three core functions: order status, product availability, and store hours. The result? 70% reduction
          in support queries and faster response times.
        </p>

        <pre className="bg-[#1a1a1a] p-4 rounded-lg my-8 overflow-x-auto">
          <code className="text-sm font-mono">
            {`// Simple agent architecture
const agent = {
  intent: detectIntent(message),
  context: getUserContext(userId),
  response: generateResponse(intent, context),
  action: executeAction(response)
}`}
          </code>
        </pre>

        <h3 className="text-2xl font-bold mt-8 mb-4">The Tech Stack</h3>
        <p>
          We prefer open-source AI stacks for transparency and control. Our typical setup includes:
        </p>
        <ul className="list-disc list-inside space-y-2 my-4">
          <li>LangChain or custom orchestration for agent logic</li>
          <li>Open-source LLMs (Llama, Mistral) or OpenAI for specific use cases</li>
          <li>Vector databases for context and memory</li>
          <li>Integration layers for WhatsApp, Slack, or web interfaces</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-4">Lessons Learned</h3>
        <p>
          After building dozens of AI agents, here's what we've learned: The technology is rarely the bottleneck.
          The real challenges are understanding the business problem, designing the right user experience, and
          maintaining the system over time. Focus on these, and the AI will follow.
        </p>

        <p className="mt-8 text-neutral-400">
          Want to build an AI agent for your business? We'd love to help. Reach out to discuss your use case.
        </p>
      </>
    ),
  },
  {
    title: "The Art of Digital Storytelling",
    excerpt: "Exploring how animations and interactions can create compelling narratives online.",
    slug: "digital-storytelling",
    tag: "Design",
    readingTime: 300,
    writer: "Straw Labs Design",
    publishedAt: new Date("2024-12-10"),
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
    content: (
      <>
        <p>
          In the digital age, storytelling has transcended the boundaries of traditional text. We now have a vast canvas
          of interactive elements, animations, and immersive experiences to weave narratives that captivate and engage
          users on a deeper level. This is the art of digital storytelling: using technology not just to present
          information, but to create a journey.
        </p>
        <h3 className="text-2xl font-bold mt-8 mb-4">The Power of Interaction</h3>
        <p>
          Allowing users to interact with the story—whether by clicking, dragging, or scrolling—transforms them from
          passive observers into active participants. Every interaction can unveil a new piece of the narrative, making
          the experience personal and memorable. GSAP and Framer Motion are powerful tools that allow us to orchestrate
          these complex animations with precision and performance.
        </p>
      </>
    ),
  },
  {
    title: "Performance in the Age of WebGL",
    excerpt: "Optimizing Three.js scenes for a smooth experience on all devices.",
    slug: "performance-webgl",
    tag: "Engineering",
    readingTime: 600,
    writer: "Straw Labs Tech",
    publishedAt: new Date("2024-11-20"),
    cover: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop",
    content: (
      <>
        <p>
          WebGL has opened up a new dimension for web experiences, allowing for rich, 3D graphics directly in the
          browser. However, with great power comes great responsibility. A poorly optimized Three.js scene can quickly
          bring a browser to its knees. Performance is not an afterthought; it's a critical component of the user
          experience.
        </p>
        <h3 className="text-2xl font-bold mt-8 mb-4">Key Optimization Techniques</h3>
        <ul className="list-disc list-inside space-y-2 my-4">
          <li>
            <strong>Geometry Instancing:</strong> Render multiple copies of the same object with a single draw call.
          </li>
          <li>
            <strong>Texture Atlasing:</strong> Combine multiple textures into a single image to reduce HTTP requests and
            GPU memory usage.
          </li>
          <li>
            <strong>Level of Detail (LOD):</strong> Use simpler models for objects that are far from the camera.
          </li>
          <li>
            <strong>Shaders:</strong> Offload complex calculations from the CPU to the GPU using custom GLSL shaders.
          </li>
        </ul>
        <pre className="bg-[#1a1a1a] p-4 rounded-lg my-8 overflow-x-auto">
          <code className="text-sm font-mono">
            {`// Example of using InstancedMesh in Three.js
const mesh = new THREE.InstancedMesh(geometry, material, count);
const matrix = new THREE.Matrix4();
for (let i = 0; i < count; i++) {
  matrix.setPosition(Math.random() * 10, Math.random() * 10, Math.random() * 10);
  mesh.setMatrixAt(i, matrix);
}
scene.add(mesh);`}
          </code>
        </pre>
      </>
    ),
  },
  {
    title: "GSAP vs. Framer Motion: A Deep Dive",
    excerpt: "When to use which library to achieve stunning web animations.",
    slug: "gsap-vs-framer-motion",
    tag: "Animation",
    readingTime: 420,
    writer: "Straw Labs Creative",
    publishedAt: new Date("2024-10-05"),
    cover: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop",
    content: (
      <>
        <p>
          When it comes to web animation, GSAP (GreenSock Animation Platform) and Framer Motion are two of the most
          popular and powerful libraries available. Both can create stunning animations, but they have different
          philosophies and are suited for different use cases.
        </p>
        <h3 className="text-2xl font-bold mt-8 mb-4">GSAP: The Powerhouse</h3>
        <p>
          GSAP is a professional-grade animation library that offers unparalleled performance, flexibility, and control.
          It's imperative, meaning you tell it exactly what to do and when. This makes it ideal for complex,
          timeline-based animations and orchestrating intricate sequences.
        </p>
        <h3 className="text-2xl font-bold mt-8 mb-4">Framer Motion: The React-Friendly Choice</h3>
        <p>
          Framer Motion is a declarative animation library designed specifically for React. It integrates seamlessly
          with React components, making it incredibly easy to animate components based on state changes. Its simple API
          and focus on gesture-based animations make it a great choice for UI interactions.
        </p>
        <p>
          Ultimately, the choice depends on the project. For complex, artistic animations, GSAP is often the winner. For
          interactive UIs in React, Framer Motion shines. In many projects, like this one, we even use both to leverage
          their respective strengths.
        </p>
      </>
    ),
  },
  {
    title: "Designing for Emotion",
    excerpt: "How to evoke feelings and create memorable user journeys.",
    slug: "designing-for-emotion",
    tag: "UI/UX",
    readingTime: 360,
    writer: "Straw Labs Design",
    publishedAt: new Date("2024-09-12"),
    cover: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2000&auto=format&fit=crop",
    content: (
      <>
        <p>
          Great design goes beyond usability and aesthetics; it connects with users on an emotional level. Designing for
          emotion is about creating experiences that are not just functional but also delightful, engaging, and
          memorable.
        </p>
        <Image
          src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2000&auto=format&fit=crop"
          alt="Designing for Emotion"
          width={800}
          height={400}
          className="rounded-lg my-8"
        />
        <p>
          This can be achieved through various means: the use of color, typography, imagery, and of course, animation. A
          subtle animation can make an interface feel more responsive and alive. A beautiful transition can turn a
          simple navigation into a moment of delight. By considering the emotional impact of our design choices, we can
          create products that users love.
        </p>
      </>
    ),
  },
]

export const getPostBySlug = (slug: string) => {
  return allPosts.find((post) => post.slug === slug)
}
