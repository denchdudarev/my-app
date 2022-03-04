import s from "./my-posts.module.css";
import Post from "./Post/post";

function MyPosts() {
    return (
        <div className={s.myPosts}>
            <div className="content">
                <h1>
                    My Posts
                </h1>
                <form className={s.formPosts}>
                    <input type="text" />
                </form>
            </div>
            <Post />
        </div>
    );
}

export default MyPosts;