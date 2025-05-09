export default function UserProfileLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section id="user-profile">
            {children}
        </section>
    );
}