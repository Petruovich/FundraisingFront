import { CardList } from "@/components/card-list";
import { ImageSlider } from "@/components/image-slider";
import { InputSearch } from "@/components/input-search";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <section className="" id="home">
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
    </section>
  );
}
