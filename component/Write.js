import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../store/store";

export default function Write() {
    let state = useSelector((state) => {
        return state;
    });
    let dispatch = useDispatch();

    let itemCount = state.itemsState.length;

    function addListItem() {
        dispatch(
            addItem({
                no: itemCount,
                title: "cxcnrcnrk",
                date: "2022/02/11",
                content: "내용내요용용"
            })
        );
    }

    return (
        <div>
            <form action="">
                <textarea name="" id="" cols="30" rows="10">
                    텍스트 작성 구역
                </textarea>

                <button type="button" onClick={() => addListItem()}>
                    등록
                </button>
            </form>

            {/* <style jsx>{`
                textarea {
                    width: 100%;
                    min-width: 100%;
                    max-width: 100%;
                }
            `}</style> */}
        </div>
    );
}
