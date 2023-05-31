import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();
    const id = router.query.id;

    return (
        <header>
            <Link href="/">
                <a className="flex justify-center items-center py-4 w-full bg-sky-900 text-amber-100 text-4xl font-bold">체크리스트 100</a>
            </Link>

            <nav className="flex justify-center items-center p-2 bg-sky-100 text-sm gap-3">
                    <NavLink id="my" title="MY" />
                    <NavLink id="id1" title="아이디1" />
                    <NavLink id="id2" title="아이디2" />
                    <NavLink id="id3" title="아이디3" />
                    <NavLink id="id4" title="아이디4" />
            </nav>
        </header>
    );

    function NavLink(param) {
        return (
            <Link href={`/${param.id}`}>
                <a className={param.id == id ? "font-bold" : ""}>{param.title}</a>
            </Link>
        );
    }
}
