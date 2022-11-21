function StyleLayout({ title, children }) {
    return (
        <div className="py-10 mb-5">
            <h2 className="text-3xl font-bold mb-5">{title}</h2>
            <div>{children}</div>
        </div>
    );
}

export default StyleLayout;
