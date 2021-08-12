import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'


const NotFoundPage = () => {
    return (
        <main>
            <Layout>
                <title>Not found</title>
                <h1>Page not found</h1>
                <p> Sorry - we couldn’t find what you were looking for. <br></br>
                <Link to="/"> Click to return home. </Link>
                </p>
            </Layout>
        </main>
    )
}

export default NotFoundPage
