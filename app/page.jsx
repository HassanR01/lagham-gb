import ItemsList from "./components/menu/itemsList";


export const metadata = {
  title: "Menu Warta Restaurant | منيو مطعم ورطة",
  description: "مطعم ورطة، اجمد مطعم سماش برجر وفراخ في اسكندرية ❤️ | Generated by Rockai Dev",
  siteName: 'Warta.eg',
};


export default function Menu() {
  return (
    <>
      <section id="Menu">
        <h1 className="title text-2xl font-bold mb-10 text-gray-50 text-center sm:text-4xl">اطلب اللي يشبعك</h1>
        <div className="menuList w-full flex flex-col items-center justify-center">

            <ItemsList />

        </div>
      </section>
    </>
  );
}
