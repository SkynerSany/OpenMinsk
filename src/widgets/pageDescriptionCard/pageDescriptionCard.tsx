import { Link } from "react-router-dom"

function DescriptionText({title, titleBolder, text, link}) {
  return (
    <>
      <p>{ title }<span>{ titleBolder }</span></p>
      <p>{ text }</p>
      <Link to={`/${link}`} className="">{'start'}</Link>
    </>
  )
}

export default function PageDescriptionCard() {
  return (
    <section>

    </section>
  )
}
