import Nav from './Nav'
import Footer from './Footer'


export default function Layout ({ children }) {

    return (
        <>
            <Nav />

        <div>
            <main className="bg-red-300">
            {children}
            </main>
        </div>
            
        <Footer />
        </>
    )
}