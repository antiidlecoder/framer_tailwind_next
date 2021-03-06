import Head from 'next/head'
import Link from "next/link";
import withTransition from '../HOC/withTransition';

function About() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                About!!
            </div>
        </div>
    )
}

export default withTransition(About);