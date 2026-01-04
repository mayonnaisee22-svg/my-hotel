import { Link } from "react-router-dom";

export default function RoomCard({ room }) {
    return (
        <li className="roomCard">
            <div className="roomImg">
                <div className="roomImgInner">{room.image}</div>
                {room.tag ? <div className="roomTag">{room.tag}</div> : null}
            </div>

            <div className="roomBody">
                <div className="roomCardTop">
                    <h2 className="roomName">{room.name}</h2>
                    <div className="roomPrice">от {room.priceFrom} € / ночь</div>
                </div>

                <div className="roomMeta">
                    {room.guests} гостей • {room.area} м²
                </div>

                <ul className="roomFeatures">
                    {room.features.map((f) => (
                        <li className="roomFeature" key={f}>
                            {f}
                        </li>
                    ))}
                </ul>

                <Link className="roomButton" to={`/booking?room=${room.id}`}>
                    Забронировать
                </Link>
            </div>
        </li>
    );
}
