import Head from "next/head";
import Link from "next/link";

export default function Index(probs) {
    return (
        <div>
            <Head>
                <title>Todos page</title>
                <meta name="description" content="Todos page content"></meta>
            </Head>
            <h1>Todos page</h1>
            <ul>
                {probs.rows.map(row => (
                    <li key={row.id}>
                        <Link href={`/todos/${row.id}`}>{row.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch(`${process.env.APP_URL}/api/todos`);
    const data = await res.json();
    return {
        props: {
            rows: data
        }
    }
}