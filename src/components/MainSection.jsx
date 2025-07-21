
export default function MainSection({children, className}) {
    return (
        <section className={`h-[100dvh] align-middle justify-center-safe` + className}>
            {children}
        </section>
    );
}