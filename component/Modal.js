import { useState } from "react";

export default function Modal({ children }, params) {
    let { id, num } = params;

    return (
        <div className="modal">
            <div className="modal-wrap">
                <div className="modal-btns">
                    <button type="button">닫기</button>
                </div>

                <div className="modal-content">{children}</div>
            </div>

            <style jsx>{`
                .modal {
                    display: flex;
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.7);
                    justify-content: center;
                    align-items: center;
                    z-index: 9999;
                }

                .modal-btns {
                    position: absolute;
                    top: 0;
                    right: 0;
                    z-index: 9999;
                }
                .modal-wrap {
                    display: flex;
                    position: relative;
                    width: 70%;
                    min-width: 300px;
                    max-width: 800px;
                    padding: 50px;
                    background-color: var(--white);
                    border-radius: 30px;
                    z-index: 9999;
                    justify-content: center;
                    align-items: center;
                }

                .modal-content {
                    width: 100%;
                }
            `}</style>
        </div>
    );
}
