"use client"
import Header from "./header";
import { useState } from "react";
export default function HeaderClient() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />;
}