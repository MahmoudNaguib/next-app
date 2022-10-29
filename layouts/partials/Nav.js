import Link from "next/link";

export default function Nav(){
    return (
        <div>
            <Link href="/">Home</Link>,
            <Link href="/about">About</Link>,
            <Link href="/contact">Contact</Link>,
            <Link href="/posts">Posts</Link>,
            <Link href="/todos">Todos</Link>,
            <Link href="/products">Products</Link>,
        </div>
    );
}