import s from "./dialog.module.css";

function Dialog(props) {
    return (    
    <div className="dialog">
        <div className={s.title}>
            {props.title}    
        </div>
    </div>
    );
}

export default Dialog;