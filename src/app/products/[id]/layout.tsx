export default function ProductLayout({children}: {children: React.ReactNode}) {
    return (
        <section>
            {children}
            <div>
                <h2>Featured products section</h2>
            </div>
        </section>
    );
}