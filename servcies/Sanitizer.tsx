import DOMPurify from "isomorphic-dompurify";

export default function Sanitizer({ dirtyHTML }): JSX.Element {
  
  let cleanHTML = DOMPurify.sanitize(dirtyHTML);
  return <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />;
}
