import s from "./post.module.css";

function Post(props) {
    return (
        <div className={s.post}>
            <img className={s.icon} src="http://www.chornobyl.com.ua/wp-content/uploads/2017/12/1384775795_1026843613.jpg" alt="" />
            <div className={s.description}>
               <div className={s.title}>
                {props.title}
                </div>
                <div className={s.dateOfBirth}>
                    {props.dateOfBirth}
                </div> 
            </div>
        </div>
    );
}

export default Post;