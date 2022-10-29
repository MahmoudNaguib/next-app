import Head from "next/head";
import Image from "next/image";

export default function Details(props){
    return (
        <div>
            <Head>
                <title>{'Products - '+props.row.title}</title>
                <meta name="description" content={props.row.description.substring(0,20)}></meta>
            </Head>
            <div><Image src={props.row.image} alt={props.row.title} width="500" height="300"/></div>
            <h1>{props.row.title}</h1>
            <div>{props.row.description}</div>
        </div>
    );
}
export async function getServerSideProps(ctx){
    const res = await fetch(`${process.env.PRODUCTS_URL}/products/${ctx.params.id}`);
    const data = await res.json();
    return {
        props: {
            row: data
        }
    }
}