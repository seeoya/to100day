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
        </div>
    );
}
