import s from "./profile-info.module.css";

function ProfileInfo() {
    return (
        <div className={s.profileInfo}>
            <div className={s.img}>
                <img src="http://www.chornobyl.com.ua/wp-content/uploads/2017/12/1384775795_1026843613.jpg" alt="" />
            </div>
            <div>
                <div className={s.title}>
                    <h3>
                        ЧАЭС
                    </h3>
                </div>
                <div className={s.description}>
                    <div className={s.descriptionItem}>
                        Дата рождения: <span> 26 апреля 1986</span>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;