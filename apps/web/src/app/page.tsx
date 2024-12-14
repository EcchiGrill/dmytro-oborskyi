import { sum } from '@dmytro-oborskyi/sample-lib'

export default function Home() {
  return (
    <main className="h-screen place-items-center place-content-center flex text-2xl">
      Frontik: {sum(13, 321312)}
    </main>
  )
}
