const layout=(props)=>{

    return(
        <section className="root" style={{ backgroundColor: `${props.colorBg}` }} >
            <div className="wrapper">
                <article>
                    <div className="title">
                        <h3>{props.title && props.title}</h3>
                        <span className="separator"></span>
                    </div>
                    <div className="desc full">
                        <p>{props.descr && props.descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
};

export default layout;