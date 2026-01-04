import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Booking from "./pages/Booking.jsx";
import Home from "./pages/Home.jsx";
import Rooms from "./pages/Rooms.jsx";
import Contacts from "./pages/Contacts.jsx";
import Policy from "./pages/Policy.jsx";

export default function App() {
    return (
        <div className="app">
            <Header />

            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rooms" element={<Rooms />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/policy" element={<Policy />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                    <Route path="/booking" element={<Booking />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}
