import Head from "next/head";

export default function Details(props){
    return (
        <div>
            <Head>
                <title>{'Posts - '+props.row.title}</title>
                <meta name="description" content={props.row.body.substring(0,20)}></meta>
            </Head>
            <h1>{props.row.title}</h1>
            <div>{props.row.body}</div>
        </div>
    );
}
export async function getServerSideProps(ctx){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`);
    const data = await res.json();
    return {
        props: {
            row: data
        }
    }
}