import { Blobs } from "../src/components/Blobs";

export default function Home() {
  return (
    <>
      <main className="main">
        <Blobs.BlobOne />
        <Blobs.BlobTwo />
        <div className="container"></div>
      </main>
    </>
  );
}
