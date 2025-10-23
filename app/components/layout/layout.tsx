import Footer from "./footer"
import Header from "./header"

const Layout = (props: any) => {

    const { children } = props
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <Header className="absolute right-0" />
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout