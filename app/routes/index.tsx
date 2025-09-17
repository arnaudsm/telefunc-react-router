import { onHello } from "~/service/hello.telefunc";

export default function Home() {
  const onClick = async () => {
    const res = await onHello({ name: "John" })
    alert(res)
  }
  return <button onClick={onClick}>click</button>
}
