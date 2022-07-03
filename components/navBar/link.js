import Link from "next/link";

export default function CustomLink({ href, content, style }) {

  // const firstLeetterUpperCaseContent = content.

  return (
    <Link href={href} >
        <div style={style} className='link-item' >
          {content}
        </div>
    </Link>
  );
}