import { useSelector, useDispatch } from "react-redux";

export default function List() {
    let state = useSelector((state) => {
        return state;
    });
    let dispatch = useDispatch();

    return (
        <div className="list">
            {state.itemsState.map((item) => {
                return <Item key={item.no} item={item} />;
            })}
            페이징? 더보기?
        </div>
    );
}

function Item(props) {
    let { item } = props;

    return (
        <div className="item">
            <h2>{item.no}/{item.date}</h2>
            <h3>{item.title}</h3>
            <div>{item.content}</div>

            {/* <style jsx>{`
                h2 {
                    color: red;
                }

                h3 {
                    color: blue
                }

                .item {
                    background-color: #fff;
                }
                
                `}</style> */}
        </div>
    );
}
