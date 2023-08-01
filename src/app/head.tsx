
type HeadProps = {
  title: string
}
export default function Head({ title }: HeadProps) {
  return (
    <>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </>
  )
}