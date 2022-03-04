import s from "./post.module.css";

function Post() {
    return (
        <div className={s.post}>
            <div className={s.icon}>
                <img src="https://w7.pngwing.com/pngs/999/924/png-transparent-chernobyl-disaster-chernobyl-tour-chernobyl-nuclear-power-plant-ionizing-radiation-hazard-symbol-energy.png" alt="" />
            </div>
            <div className="description">
                Госуда́рственное специализи́рованное предприя́тие «Черно́быльская а́томная электроста́нция и́мени Влади́мира Ильича́ Ле́нина»
            </div>    
        </div>
    );
}

export default Post;