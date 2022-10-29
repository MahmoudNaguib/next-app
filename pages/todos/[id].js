import Head from "next/head";

export default function Details(props){
    return (
        <div>
            <Head>
                <title>{'Todos - '+props.row.title}</title>
                <meta name="description" content={props.row.title.substring(0,20)}></meta>
            </Head>
            <h1>{props.row.title}</h1>
            <div>Completed : {(props.row.completed)?'True':'False'}</div>
        </div>
    );
}
export async function getServerSideProps(ctx){
    const res = await fetch(`${process.env.APP_URL}/api/todos/${ctx.params.id}`);
    const data = await res.json();
    return {
        props: {
            row: data
        }
    }
}