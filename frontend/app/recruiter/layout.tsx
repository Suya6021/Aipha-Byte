import NavRec from "@/components/NavRec";

export default function AddInfoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <NavRec></NavRec>
      <div>{children}</div>
    </div>
  );
}