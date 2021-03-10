const header = (props) => {
    return (
        <header className="root">
            <div className="forest"></div>
            <div className="container">
                <h1>{props.title && props.title}</h1>
                <p>{props.descr && props.descr}</p>
            </div>
        </header>
    )
};

export default header;
