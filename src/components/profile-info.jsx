import "./profile-info.css";

function ProfileInfo() {
    return (
        <div className="b-profile-info">
            <div className="profile-info__img">
                <img src="http://www.chornobyl.com.ua/wp-content/uploads/2017/12/1384775795_1026843613.jpg" alt="" />
            </div>
            <div className="profile-info__content">
                <div className="profile-info__title">
                    <h3>
                        ЧАЭС
                    </h3>
                </div>
                <div className="profile-info__description">
                    <div className="profile-info__item">
                        Дата рождения: <span> 26 апреля 1986</span>
                    </div> 
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;