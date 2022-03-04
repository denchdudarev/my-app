import s from "./navbar.module.css";

function Navbar() {
    return (
        <div className={s.navbar}>
            <div className={s.list}>
                <a className={s.item} href="#">
                    Message
                </a>
            </div>
        </div>
    );
}

export default Navbar