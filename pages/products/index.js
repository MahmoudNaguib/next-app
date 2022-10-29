import Head from "next/head";
import Link from "next/link";

export default function Index(probs) {
    return (
        <div>
            <Head>
                <title>Products page</title>
                <meta name="description" content="Products page content"></meta>
            </Head>
            <h1>Products page</h1>
            <ul>
                {probs.rows.map(row => (
                    <li key={row.id}>
                        <Link href={`/products/${row.id}`}>{row.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.PRODUCTS_URL}/products`);
    const data = await res.json();
    return {
        props: {
            rows: data
        }
    }
}