import { rooms } from "../data/rooms.js";
import RoomCard from "../components/RoomCard.jsx";
export const rooms = [
    {
        id: "standard",
        name: "Standard",
        priceFrom: 45,
        guests: 2,
        area: 18,
        tag: "Самый популярный",
        image: "standard",
        features: ["Wi-Fi", "Душ", "TV"],
    },
    {
        id: "family",
        name: "Family",
        priceFrom: 70,
        guests: 4,
        area: 28,
        tag: "Для семьи",
        image: "family",
        features: ["Wi-Fi", "Мини-кухня", "Балкон"],
    },
];

export default function Rooms() {
    return (
        <>
            <h1 className="pageTitle">Номера</h1>
            <p className="pageLead">Выберите подходящий вариант размещения.</p>

            <ul className="roomGrid">
                {rooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                ))}
            </ul>
        </>
    );
}
