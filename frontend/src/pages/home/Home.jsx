import React from "react"
import Hero from '../../components/hero/Hero'
import Features from '../../components/features/Features'


export default function Home() {
    return(
        <main>
            <h1 className="sr-only">Argent Bank</h1>
            <Hero />
            <Features />
        </main>
        
    )
}