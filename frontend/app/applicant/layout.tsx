import Navbar from "@/components/Navbar";

export default function AddInfoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Navbar></Navbar>
      <div>{children}</div>
    </div>
  );
}