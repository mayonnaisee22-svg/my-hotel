import { useState } from "react";
import { useSearchParams } from "react-router-dom";
export default function Booking() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [dates, setDates] = useState("");
    const [guests, setGuests] = useState(2);
    const [comment, setComment] = useState("");
    const [searchParams] = useSearchParams();
    const roomFromUrl = searchParams.get("room")|| "";
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [room, setRoom] = useState(roomFromUrl);

    function handleSubmit(e) {
        e.preventDefault();

        setError("");
        setSuccess(false);

        const trimmedName = name.trim();
        const trimmedPhone = phone.trim();
        const trimmedDates = dates.trim();

        if (!trimmedName) {
            setError("Введите имя.");
            return;
        }
        if (!trimmedPhone) {
            setError("Введите телефон.");
            return;
        }
        if (!trimmedDates) {
            setError("Введите даты проживания (например: 12–15 марта).");
            return;
        }

        setSuccess(true);


        setName(""); setPhone(""); setDates(""); setGuests(2); setComment("");
    }

    return (
        <>
            <h1 className="pageTitle">Бронирование</h1>
            <p className="pageLead">Оставьте заявку — мы свяжемся с вами для подтверждения.</p>

            <form className="form" onSubmit={handleSubmit}>
                <div className="formGrid">
                    <label className="field">
                        <span className="fieldLabel">Имя</span>
                        <input
                            className="input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Иван"
                        />
                    </label>

                    <label className="field">
                        <span className="fieldLabel">Телефон</span>
                        <input
                            className="input"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+371 00000000"
                        />
                    </label>

                    <label className="field">
                        <span className="fieldLabel">Даты</span>
                        <input
                            className="input"
                            value={dates}
                            onChange={(e) => setDates(e.target.value)}
                            placeholder="12–15 марта"
                        />
                    </label>

                    <label className="field">
                        <span className="fieldLabel">Гостей</span>
                        <select
                            className="input"
                            value={guests}
                            onChange={(e) => setGuests(Number(e.target.value))}
                        >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                    </label>
                    <label className="field">
                        <span className="fieldLabel">Номер</span>
                        <input
                            className="input"
                            value={room}
                            onChange={(e) => setRoom(e.target.value)}
                            placeholder="standard / family"
                        />
                    </label>

                </div>

                <label className="field">
                    <span className="fieldLabel">Комментарий (необязательно)</span>
                    <textarea
                        className="textarea"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Например: нужен тихий номер"
                        rows={4}
                    />
                </label>

                {error ? <div className="alert alertError">{error}</div> : null}
                {success ? (
                    <div className="alert alertOk">Заявка отправлена. Мы свяжемся с вами.</div>
                ) : null}

                <button className="btn btnPrimary" type="submit">
                    Отправить заявку
                </button>

                <div className="muted" style={{ marginTop: 10 }}>
                    Нажимая “Отправить заявку”, вы соглашаетесь на обработку персональных данных.
                </div>
            </form>
        </>
    );
}
