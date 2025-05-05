import { CardList } from "@/components/card-list";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ImageSlider } from "@/components/image-slider";
import { InputSearch } from "@/components/input-search";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-5">
      <Header />
      <ImageSlider />
      <div className="flex gap-4">
        <div className="w-[30%] bg-white p-4 rounded">
          <Sidebar />
        </div>
        <div className="w-[70%] bg-white p-4 rounded">
          <InputSearch />
          <div className="mt-4">
            <CardList />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
