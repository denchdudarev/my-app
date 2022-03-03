import ProfileInfo from "./profile-info";
import "./profile.css";

function Profile() {
    return (
        <div className="b-content">
            <div className="b-profile">
                <img src="https://static.dw.com/image/57337665_403.jpg" alt="" />
                <ProfileInfo />
            </div>
        </div>
    );
}

export default Profile;