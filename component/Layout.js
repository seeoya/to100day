import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className="">
            <Header />
            {children}
            <Footer />

            <button
                className="bg-pink-400"
                onClick={() => {
                    document.querySelector("#dialog").showModal();
                }}
            >
                다이얼로그 버튼
            </button>
            <dialog id="dialog" className="bg-violet-200 backdrop:bg-black backdrop:opacity-70">
                <form method="dialog">
                    <div>가나다</div>

                    <button value={"cancel"}>취소</button>
                    <button value={"default"}>확인</button>
                </form>
            </dialog>
        </div>
    );
}
