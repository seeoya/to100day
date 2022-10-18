import { useRouter } from "next/router";
import StampPaper from "/component/StampPaper";
import Write from "/component/Write";
import List from "/component/List";
import { useState } from "react";

export default function StampPage({ id }) {
    const router = useRouter();
    const userId = router.query.id || id || "id";

    const [stampNum, setStampNum] = useState(0);

    return (
        <div className="content">
            <div className="stamp">
                <h2>
                    {userId} 스탬프 페1이지 {stampNum}
                </h2>
                <StampPaper num="100" count="30"></StampPaper>
            </div>

            <div className="text">
                <img src="aurora.jpg" alt="오로라" />
                <Write></Write>
                <List></List>
            </div>

            <style jsx global>{`
                .content {
                    display: flex;
                }

                .content > div {
                    padding: 30px;
                }

                .stamp {
                    width: 30%;
                    height: 100%;
                    background-color: #ede;
                }

                .text {
                    width: 70%;
                    height: 100%;
                    background-color: #eed;
                }

                img {
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                }
            `}</style>
        </div>
    );
}
