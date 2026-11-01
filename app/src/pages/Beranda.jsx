import mahasiswa from '../../mahasiswa.json'


export default function Beranda() {
  return (
    <section>
      <h1>Daftar Destinasi Wisata yang ada di Lampung</h1>
      <p>Tema: {mahasiswa.tema}</p>
    </section>
  )
}