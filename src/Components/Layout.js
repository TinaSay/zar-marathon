import s from '../index.module.css';

const layout = (props) => {

    const styleBg = props.urlBg ? {backgroundImage: `url(${props.urlBg})`} : {background: props.colorBg};

    return (
        <section className={s.root} style={styleBg}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{props.title && props.title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        <p>{props.descr && props.descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
};

export default layout;