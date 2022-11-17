import { useSelector, useDispatch } from "react-redux";

export default function StampPaper(params) {
    let { num, count } = params;

    let state = useSelector((state) => {
        return state;
    });
    let dispatch = useDispatch();

    return (
        <div>
            <p>
                {count}/{num}
            </p>

            <div className="stamp-list">
                {state.itemsState.map((item) => {
                    console.log(item);
                    return <Stamp item={item} />;
                })}
            </div>

            {/* <style jsx>{`
                .stamp-list {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    flex-flow: wrap;
                    gap: 10px;
                }
            `}</style> */}
        </div>
    );

    function Stamp(props) {
        let { no, title, date, content, color, background } = props.item;

        color = color ?? "#fff";
        background = background ?? "pink";

        return (
            <>
                <button type="button">
                    {no} / {date}
                </button>

                {/* <style jsx>{`
                    button {
                        color: ${color};
                        background-color: ${background};
                        width: 55px;
                        height: 55px;
                        border: 0px solid ${color};
                        border-radius: 100px;
                    }

                    button:hover {
                        border: 1px solid ${color};
                    }
                `}</style> */}
            </>
        );
    }
}
