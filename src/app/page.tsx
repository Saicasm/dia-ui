import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-light-bg-primary bg-opacity-90">
      <div className="flex flex-col"></div>
    </main>
  );
}
