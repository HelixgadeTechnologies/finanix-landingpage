import Nav from './Nav'
const Layout = ({ children }) => {

    return (
        <>
            <Nav />

        <div>
            <main className="bg-red-300">
            {children}
            </main>
        </div>
        </>
    )
}

export default Layout