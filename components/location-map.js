import Image from "next/image";

export default function LocationMap() {
  return (
    <Image
      src="/map.png"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
    />
  );
}
