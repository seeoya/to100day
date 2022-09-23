import { useRouter } from "next/router";
import StampPaper from "/component/StampPaper";
import Write from "/component/Write";
import List from "/component/List";
import Modal from "../component/Modal";
import { useState } from "react";

export default function StampPage({ id }) {
    const router = useRouter();
    const userId = router.query.id || id || "id";

    const [stampNum, setStampNum] = useState(0);

    return (
        <div className="content">
            <div className="stamp">
                <StampPaper num="100" count="30"></StampPaper>
            </div>

            <Modal id={id} num={stampNum}>
                <h2>{userId} 스탬프 페이지 {stampNum}</h2>

                <Write></Write>
                <List></List>
            </Modal>

            <style jsx>{`
                .content {
                }

                .content > div {
                    padding: 30px;
                }

                .stamp {
                    width: 100%;
                    background-color: #ede;
                }
            `}</style>
        </div>
    );
}
