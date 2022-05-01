import React, { useState, useEffect } from 'react'
import LogoCube from '../components/LogoCube'
import {useWindowDimensions} from '../utilities'

export default function Home() {
    
    return (
        <>
            <section className="home">
                <LogoCube />
            </section>
        </>
    )
}