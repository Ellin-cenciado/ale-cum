import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Feliz cumple ale!!</h1>
      <Link href="/galery">Galeria dse fotos</Link>
    </main>
  );
}
