import { useEffect, useState } from "react";
import TypeWrtier from "../components/TypeWriter";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
    const [showTypeA, setShowTypeA] = useState(false);
    useEffect(() => {
        
    })
    return (
        <MainLayout>
            <section className="py-48 px-28 w-full min-h-[100vh] sm:min-h-svh md:min-h-[100vh] lg:min-h-svh bg-sky-100 flex justify-center items-center-safe">
                <div className="w-[50%] h-full" style={{ alignContent: "center" }}>
                    <h1 className="text-4xl font-extrabold bubblegum">
                        <TypeWrtier
                            words={["Hello, I'm Syahdan \n An Intermediate - Backend Developer \n with Laravel - Framework"]}
                            speed={50}
                            pauseTime={0}
                        />
                    </h1>
                </div>
                <div className="min-h-64 min-w-64 bg-blue-400 rounded-full"></div>
            </section>
        </MainLayout>
    )
}