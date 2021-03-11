import s from '../index.module.css';

const header = (props) => {
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>{props.title && props.title}</h1>
                <p>{props.descr && props.descr}</p>
            </div>
        </header>
    )
};

export default header;
