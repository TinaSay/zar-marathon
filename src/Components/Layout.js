import s from '../index.module.css';

const layout = (props) => {

    return (
        <section className={s.root} style={{backgroundColor: `${props.colorBg}`}}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{props.title && props.title}</h3>
                        <span className="separator"></span>
                    </div>
                    <div className={s.full}>
                        <p>{props.descr && props.descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
};

export default layout;