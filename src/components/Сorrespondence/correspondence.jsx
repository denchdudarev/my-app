
import Dialog from './Dialog/dialog';
import s from './correspondence.module.css';

function Сorrespondence(props) {
    return (
        <div className="b-content">
            <div className={s.correspondence}>
                <h1>
                   Диалоги 
                </h1>
                <div className={s.listDialog}>
                     <Dialog title="Denis" />
                     <Dialog title="Nikolay" />
                     <Dialog title="Alexey" />
                     <Dialog title="Dmitry" />
                     <Dialog title="Taras" />   
                </div>
            </div>
        </div>
    );
}

export default Сorrespondence;