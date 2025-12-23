"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

export function InsightsScene() {
    const pointsRef = useRef<THREE.Points>(null!)

    // Create sphere geometry with more points
    const particlesGeometry = new THREE.SphereGeometry(1.5, 64, 64)
    const particlePositions = particlesGeometry.attributes.position

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.15
            pointsRef.current.rotation.x = state.clock.elapsedTime * 0.1
        }
    })

    return (
        <Points ref={pointsRef} positions={particlePositions.array as Float32Array} stride={3}>
            <PointMaterial
                transparent
                color="#8b5cf6"
                size={0.015}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </Points>
    )
}
