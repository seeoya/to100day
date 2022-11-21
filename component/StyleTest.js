import { Container } from "postcss";
import { useState } from "react";
import StyleLayout from "./StyleLayout";

function StyleTest() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={`container mx-auto ${darkMode ? "dark" : ""}`}>
            <StyleLayout title="다이얼로그">
                <button
                    className="p-3 border-rose-900 border-2 bg-pink-400 hover:bg-violet-400"
                    onClick={() => {
                        document.querySelector("#dialog").showModal();
                    }}
                >
                    다이얼로그 버튼
                </button>

                <dialog id="dialog" className="bg-violet-200 backdrop:bg-black backdrop:opacity-70">
                    <form method="dialog">
                        <div className="flex-center text-center bg-white">가나다</div>

                        <button className="p-2 mt-10 mr-3 bg-rose-200" value={"cancel"}>
                            취소
                        </button>
                        <button className="p-2 bg-rose-800 text-white" value={"default"}>
                            확인
                        </button>
                    </form>
                </dialog>
            </StyleLayout>

            <StyleLayout title="셀렉션">
                <div className="selection:bg-lime-100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tellus ex, iaculis id ex eget, consequat tincidunt libero. Aliquam erat volutpat. Etiam pharetra vehicula malesuada. Donec orci tellus, scelerisque imperdiet euismod in, dapibus et libero. Vestibulum mi massa, semper sit amet eros vitae, molestie molestie eros. Donec quis velit accumsan, interdum quam ut, finibus
                    mi. Maecenas maximus maximus mi, quis placerat nulla rutrum quis. Proin scelerisque hendrerit nisl quis tempor. Sed suscipit dolor vel turpis iaculis, non pharetra sapien semper. In hac habitasse platea dictumst. Praesent finibus diam et dolor luctus, a iaculis erat tincidunt. Phasellus magna massa, lacinia in ipsum eu, scelerisque bibendum sapien. Suspendisse sit amet maximus
                    purus.
                </div>
                <div className="selection:bg-rose-200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tellus ex, iaculis id ex eget, consequat tincidunt libero. Aliquam erat volutpat. Etiam pharetra vehicula malesuada. Donec orci tellus, scelerisque imperdiet euismod in, dapibus et libero. Vestibulum mi massa, semper sit amet eros vitae, molestie molestie eros. Donec quis velit accumsan, interdum quam ut, finibus
                    mi. Maecenas maximus maximus mi, quis placerat nulla rutrum quis. Proin scelerisque hendrerit nisl quis tempor. Sed suscipit dolor vel turpis iaculis, non pharetra sapien semper. In hac habitasse platea dictumst. Praesent finibus diam et dolor luctus, a iaculis erat tincidunt. Phasellus magna massa, lacinia in ipsum eu, scelerisque bibendum sapien. Suspendisse sit amet maximus
                    purus.
                </div>
            </StyleLayout>

            <StyleLayout title="파일 input">
                <input type="file" className="w-1/2 text-sm text-slate-500 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-100 file:text-violet-900 hover:file:bg-indigo-200" name="" id="" />
            </StyleLayout>

            <StyleLayout title="반응형">
                <div className="p-8 w-full bg-rose-200 md:bg-indigo-200 lg:bg-green-200 xl:bg-amber-200 2xl:bg-cyan-200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tellus ex, iaculis id ex eget, consequat tincidunt libero. Aliquam erat volutpat. Etiam pharetra vehicula malesuada. Donec orci tellus, scelerisque imperdiet euismod in, dapibus et libero. Vestibulum mi massa, semper sit amet eros vitae, molestie molestie eros. Donec quis velit accumsan, interdum quam ut, finibus
                    mi. Maecenas maximus maximus mi, quis placerat nulla rutrum quis. Proin scelerisque hendrerit nisl quis tempor. Sed suscipit dolor vel turpis iaculis, non pharetra sapien semper. In hac habitasse platea dictumst. Praesent finibus diam et dolor luctus, a iaculis erat tincidunt. Phasellus magna massa, lacinia in ipsum eu, scelerisque bibendum sapien. Suspendisse sit amet maximus
                    purus.
                </div>
                <div className="p-10 m-10 bg-blue-400 text-white border-orange-900 border-4 shadow-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tellus ex, iaculis id ex eget, consequat tincidunt libero. Aliquam erat volutpat. Etiam pharetra vehicula malesuada. Donec orci tellus, scelerisque imperdiet euismod in, dapibus et libero. Vestibulum mi massa, semper sit amet eros vitae, molestie molestie eros. Donec quis velit accumsan, interdum quam ut, finibus
                    mi. Maecenas maximus maximus mi, quis placerat nulla rutrum quis. Proin scelerisque hendrerit nisl quis tempor. Sed suscipit dolor vel turpis iaculis, non pharetra sapien semper. In hac habitasse platea dictumst. Praesent finibus diam et dolor luctus, a iaculis erat tincidunt. Phasellus magna massa, lacinia in ipsum eu, scelerisque bibendum sapien. Suspendisse sit amet maximus
                    purus.
                </div>
            </StyleLayout>

            <StyleLayout title="다크모드">
                <button
                    className="p-3 bg-slate-800 text-white"
                    onClick={() => {
                        setDarkMode(!darkMode);
                    }}
                >
                    모드 전환
                </button>
                <div className="p-10 m-5 leading-loose bg-rose-100 dark:bg-slate-900 rounded-3xl text-slate-900 dark:text-slate-50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nulla hendrerit, tempor metus cursus, rutrum magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed scelerisque a odio a tincidunt. Sed eget ligula sit amet turpis facilisis molestie eu eu risus. Proin sit amet est ac augue gravida blandit. Integer semper
                    placerat fringilla. Curabitur mauris libero, pretium non venenatis et, aliquam vel mauris. Phasellus ac rutrum leo. Nullam placerat semper ultrices. Duis congue nunc et nunc aliquet, et gravida turpis facilisis. Nulla id tempus quam, eget posuere turpis. In hendrerit arcu velit, in scelerisque orci ultricies nec. Donec neque diam, lobortis nec velit eu, lacinia dapibus metus.
                    Phasellus sollicitudin risus id enim iaculis vestibulum eget sit amet eros. Vestibulum quis tempor magna.
                </div>
            </StyleLayout>

            <StyleLayout title="스피너">
                <div className="inline-flex mr-32 w-20 h-20 bg-transparent rounded-full border-8 border-rose-500 border-y-blue-500 animate-spin"></div>
                스핀
                <div className="inline-flex mr-32 w-20 h-20 bg-transparent rounded-full border-8 border-amber-500 border-y-indigo-700 animate-ping"></div>핑<div className="inline-flex mr-32 w-20 h-20 bg-transparent rounded-full border-8 border-teal-400 border-y-violet-500 animate-pulse"></div>
                펄스
                <div className="inline-flex mr-32 w-20 h-20 bg-transparent rounded-full border-8 border-lime-300 border-y-neutral-800 animate-bounce"></div>
                바운스
            </StyleLayout>

            <StyleLayout title="셀렉션">
                <div className="selection:bg-lime-100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tellus ex, iaculis id ex eget, consequat tincidunt libero. Aliquam erat volutpat. Etiam pharetra vehicula malesuada. Donec orci tellus, scelerisque imperdiet euismod in, dapibus et libero. Vestibulum mi massa, semper sit amet eros vitae, molestie molestie eros. Donec quis velit accumsan, interdum quam ut, finibus
                    mi. Maecenas maximus maximus mi, quis placerat nulla rutrum quis. Proin scelerisque hendrerit nisl quis tempor. Sed suscipit dolor vel turpis iaculis, non pharetra sapien semper. In hac habitasse platea dictumst. Praesent finibus diam et dolor luctus, a iaculis erat tincidunt. Phasellus magna massa, lacinia in ipsum eu, scelerisque bibendum sapien. Suspendisse sit amet maximus
                    purus.
                </div>
                <div className="selection:bg-rose-200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tellus ex, iaculis id ex eget, consequat tincidunt libero. Aliquam erat volutpat. Etiam pharetra vehicula malesuada. Donec orci tellus, scelerisque imperdiet euismod in, dapibus et libero. Vestibulum mi massa, semper sit amet eros vitae, molestie molestie eros. Donec quis velit accumsan, interdum quam ut, finibus
                    mi. Maecenas maximus maximus mi, quis placerat nulla rutrum quis. Proin scelerisque hendrerit nisl quis tempor. Sed suscipit dolor vel turpis iaculis, non pharetra sapien semper. In hac habitasse platea dictumst. Praesent finibus diam et dolor luctus, a iaculis erat tincidunt. Phasellus magna massa, lacinia in ipsum eu, scelerisque bibendum sapien. Suspendisse sit amet maximus
                    purus.
                </div>
            </StyleLayout>

            <StyleLayout title=""></StyleLayout>
        </div>
    );
}

export default StyleTest;
