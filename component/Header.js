import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();
    const id = router.query.id;

    return (
        <header>
            <Link href="/">
                <a className="mymy title w-full">체크리스트 100</a>
            </Link>
            <nav>
                <div>
                    <NavLink id="id1" title="아이디1" />
                    <NavLink id="id2" title="아이디2" />
                    <NavLink id="id3" title="아이디3" />
                    <NavLink id="id4" title="아이디4" />
                    <NavLink id="style" title="스타일테스트" />
                </div>
            </nav>
            {/* <style jsx>{`
                header {
                    width: 100%;
                    background-color: #eee;
                }

                .title {
                    width: 100%;
                    font-size: 3rem;
                    font-weight: 600;
                    text-align: center;
                }

                nav {
                    display: flex;
                    width: 100%;
                    text-align: center;
                    justify-content: center;
                }

                .active {
                    color: red;
                }
            `}</style> */}
        </header>
    );

    function NavLink(param) {
        return (
            <Link href={`/${param.id}`}>
                <a className={param.id == id ? "text-xl" : ""}>
                    {param.id} = {param.title}
                </a>
            </Link>
        );
    }
}
