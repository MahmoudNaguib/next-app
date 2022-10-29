import Head from "next/head";
import Link from "next/link";

export default function Index(probs) {
    return (
        <div>
            <Head>
                <title>Posts page</title>
                <meta name="description" content="Posts page content"></meta>
            </Head>
            <h1>Posts page</h1>
            <ul>
                {probs.rows.map(row => (
                    <li key={row.id}>
                        <Link href={`/posts/${row.id}`}>{row.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    console.log(process.env.APP_URL);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
    const data = await res.json();
    return {
        props: {
            rows: data
        }
    }
}