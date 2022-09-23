import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();
    const id = router.query.id;

    return (
        <header>
            <div className="title">뭐라도 해라 D-100</div>
            <nav>
                <div>
                    <NavLink id="silent0rch" title="유랑" />
                    <NavLink id="silent1rch" title="유1랑" />
                    <NavLink id="silent2rch" title="유2랑" />
                    <NavLink id="silent3rch" title="유3랑" />
                </div>
            </nav>
            <style jsx>{`
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
            `}</style>
        </header>
    );

    function NavLink(param) {
        let active = "";

        if (param.id == id) {
            active = "active";
        }

        return (
            <Link href={param.id}>
                <a className={active}>
                    {param.id} = {param.title}
                </a>
            </Link>
        );
    }
}
