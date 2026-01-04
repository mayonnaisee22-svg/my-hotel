import { Link } from "react-router-dom";
import { site } from "../data/site.js";

export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="heroInner">
                    <div className="heroText">
                        <h1 className="heroTitle">{site.hero.title}</h1>
                        <p className="heroLead">{site.hero.lead}</p>

                        <div className="heroActions">
                            <Link className="btn btnPrimary" to="/rooms">
                                Смотреть номера
                            </Link>
                            <Link className="btn btnGhost" to="/booking">
                                Забронировать
                            </Link>
                        </div>
                    </div>

                    <div className="heroCard">
                        <div className="heroCardTitle">Быстрое бронирование</div>
                        <div className="muted">
                            Перейдите на страницу бронирования и оставьте заявку — мы свяжемся с вами.
                        </div>

                        <ul className="heroBadges">
                            {site.hero.badges.map((b) => (
                                <li className="badge" key={b}>
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="featureRow">
                {site.features.map((f) => (
                    <div className="feature" key={f.title}>
                        <div className="featureTitle">{f.title}</div>
                        <div className="muted">{f.text}</div>
                    </div>
                ))}
            </section>
        </>
    );
}
