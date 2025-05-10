import MainLayout from "../layouts/MainLayout";

export default function Home() {
    return (
        <MainLayout>
            <section className="py-48 px-48 w-full h-[200vh] bg-sky-100 flex justify-between">
                <div className="w-[50%]">
                    <h1 className="text-4xl font-extrabold bubblegum">Hello, I'm Syahdan</h1>
                </div>
            </section>
        </MainLayout>
    )
}