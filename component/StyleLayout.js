function StyleLayout({ title, children }) {
    return (
        <div>
            <h2 className="text-3xl font-bold mt-6 mb-3">{title}</h2>
            <div>{children}</div>
        </div>
    );
}

export default StyleLayout;
