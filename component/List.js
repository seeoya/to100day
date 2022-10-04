export default function List() {
    return (
        <div className="list">
            <Item />
            <Item />
            <Item />

            페이징? 더보기?
        </div>
    );
}

function Item() {
    return (
        <div className="item">
            <h3>번호/날짜</h3>
            <h3>제목</h3>
            <div>내용</div>
        </div>
    );
}
