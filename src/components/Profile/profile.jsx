import ProfileInfo from "./ProfileInfo/profile-info";
import MyPosts from "./MyPosts/my-posts";
import s from "./profile.module.css";

function Profile() {
    return (
            <div className={s.profile}>
                <img src="https://panoramy-chernobylya.ru/wp-content/uploads/2018/11/CHem-otlichaetsya-CHernobyl-ot-Pripyati-1-1024x576.jpg" alt="" />
                <ProfileInfo />
                <MyPosts />
            </div>
    );
}

export default Profile;