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
            <Post title="Госуда́рственное специализи́рованное предприя́тие «Черно́быльская а́томная электроста́нция и́мени Влади́мира Ильича́ Ле́нина»" dateOfBirth="25 сентября 1977 года" />
            <Post title="Смоленская АЭС" dateOfBirth="1982 год" />
            <Post title="Ленинградская АЭС" dateOfBirth="23 декабря 1973" />
        </div>
    );
}

export default MyPosts;