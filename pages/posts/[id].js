import Head from "next/head";
import useSWR from 'swr';
import Loader from "../../components/loader";
import fetcher from "../../libs/fetcher";
import Failed from "../../components/failed";
import {useRouter} from "next/router";
export default function Details(props){
    const router=useRouter();
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_POSTS_URL}/posts/${router.query.id}`, fetcher);
    if (error) return (<Failed />)
    if (!data) return (<Loader />)
    return (
        <div>
            <Head>
                <title>{'Posts - '+data.title}</title>
                <meta name="description" content={data.body.substring(0,20)}></meta>
            </Head>
            <h1>{data.title}</h1>
            <div>{data.body}</div>
        </div>
    );
}

