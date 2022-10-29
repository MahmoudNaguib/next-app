import Head from "next/head";
import Link from "next/link";
import useSWR from 'swr';
import Loader from "../../components/loader";
import fetcher from "../../libs/fetcher";
import Failed from "../../components/failed";
export default function Index() {
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_POSTS_URL}/posts?_limit=10`, fetcher);
    if (error) return (<Failed />)
    if (!data) return (<Loader />)
    return (
        <div>
            <Head>
                <title>Posts page</title>
                <meta name="description" content="Posts page content"></meta>
            </Head>
            <h1>Posts page</h1>
            <ul>
                {data.map(row => (
                    <li key={row.id}>
                        <Link href={`/posts/${row.id}`}>{row.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
