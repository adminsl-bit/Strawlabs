"use client"

import { Shader, ChromaFlow, Swirl } from "shaders/react"

export function HeaderSwirl() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <Shader className="w-full h-full">
                <Swirl
                    colorA="#000000"
                    colorB="#1a1a1a"
                    speed={0.4}
                    detail={0.5}
                    blend={70}
                />
                <ChromaFlow
                    baseColor="#0066ff"
                    upColor="#0066ff"
                    downColor="#1a1a1a"
                    intensity={0.5}
                    radius={1.2}
                    opacity={0.5}
                />
            </Shader>
        </div>
    )
}
