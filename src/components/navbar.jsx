import s from "./navbar.module.css";

function Navbar() {
    return (
        <div className={s.navbar}>
            <div className={s.navbar__list}>
                <a className={s.navbar__item} href="#">
                    Message
                </a>
            </div>
        </div>
    );
}

export default Navbar