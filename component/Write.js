export default function Write() {
    return (
        <div>
            <form action="">
            <textarea name="" id="" cols="30" rows="10">
                텍스트 작성 구역
            </textarea>

            <button type="submit">등록</button>
            </form>

            <style jsx>{`
                textarea {
                    width: 100%;
                    min-width: 100%;
                    max-width: 100%;
                }
            `}</style>
        </div>
    );
}
