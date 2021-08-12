// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

// Step 2: Define your component
const IndexPage = () => {
    return (
        <main>
            <Layout>
                <section>
                    <title>Home Page</title>
                    <h1>Welcome to my Gatsby site!</h1>
                    <h2>I'm making this by following the Gatsby Tutorial.</h2>
                </section>

                <section className = "radioplayer">
                    {/* TODO: Currently playing, next up, parallax image scrolling, current show */}
                </section>

                <section className = "archives"> 
                    {/*TODO: Latest shows, send a message */}
                </section>
            </Layout>
    </main>
    )
}

// Step 3: Export your component
export default IndexPage