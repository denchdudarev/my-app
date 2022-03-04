import ProfileInfo from "./profile-info";
import "./profile.css";

function Profile() {
    return (
        <div className="b-content">
            <div className="b-profile">
                <img src="https://panoramy-chernobylya.ru/wp-content/uploads/2018/11/CHem-otlichaetsya-CHernobyl-ot-Pripyati-1-1024x576.jpg" alt="" />
                <ProfileInfo />
            </div>
        </div>
    );
}

export default Profile;