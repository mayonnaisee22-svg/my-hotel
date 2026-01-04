import { rooms } from "../data/rooms.js";
import RoomCard from "../components/RoomCard.jsx";

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
