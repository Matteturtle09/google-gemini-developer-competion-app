import AppHeader from "@/components/AppHeader"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <AppHeader/>
            {children}
        </section>
    )
}