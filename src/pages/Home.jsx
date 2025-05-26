import TypeWrtier from "../components/TypeWriter";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
    const greeting = TypeWrtier("Woi asu celeng kabeh kewan", 50);
    return (
        <MainLayout>
            <section className="py-48 px-28 w-full min-h-[100vh] sm:min-h-svh md:min-h-[100vh] lg:min-h-svh bg-sky-100 flex justify-between">
                <div className="w-[50%] h-full justify-items-center align-middle" style={{ alignContent: "center" }}>
                    <h1 className="text-4xl font-extrabold bubblegum">
                        {greeting}
                    </h1>
                </div>
                <div className="w-[50%] h-full justify-items-center align-middle">
                </div>
            </section>
            <section>

            </section>
        </MainLayout>
    )
}