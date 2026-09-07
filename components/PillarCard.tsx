type Props = {
  title: string
  description?: string
}

export default function PillarCard({ title, description }: Props) {
  return (
    <article>
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
    </article>
  )
}
