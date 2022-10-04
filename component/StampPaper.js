export default function StampPaper(params) {
    let { num, count } = params;

    let list = [
        {
            id: "0",
            color: "#ff3",
            background: "#000",
            date: "220923"
        },
        {
            id: "1",
            color: "#fff",
            background: "#f3e",
            date: "220924"
        },
        {
            id: "2",
            color: "#777",
            background: "#00f",
            date: "220925"
        }
    ];

    return (
        <div>
            <p>
                {count}/{num}
            </p>

            <div>
                {list.map((el) => {
                    return <Stamp id={el.id} color={el.color} background={el.background} date={el.date} />;
                })}
            </div>
        </div>
    );

    function Stamp(params) {
        let { id, color, background, date } = params;

        return (
            <>
                <button type="button">
                    {id} / {date}
                </button>

                <style jsx>{`
                    button {
                        color: ${color};
                        background-color: ${background};
                        width: 50px;
                        height: 50px;
                        border: 0px solid ${color};
                        border-radius: 100px;
                    }

                    button:hover {
                        border: 1px solid ${color};
                    }
                `}</style>
            </>
        );
    }
}
