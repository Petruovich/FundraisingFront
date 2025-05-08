import Image from "next/legacy/image";

type CardProps = {
  image: string;
  title: string;
  description: string;
};

export const Card = ({ image, title, description }: CardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden w-full max-w-sm">
      <div className="relative w-full h-40">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const mockData = [
  {
    id: 1,
    image: "/1.jpg",
    title: "Гуманітарна допомога",
    description: "Це ініціатива для підтримки постраждалих від війни."
  },
  {
    id: 2,
    image: "/2.jpeg",
    title: "Медичні ініціативи",
    description: "Допомога лікарям та медикам у зонах конфлікту."
  },
  {
    id: 3,
    image: "/3.jpeg",
    title: "Реабілітація",
    description: "Реабілітація для постраждалих людей після травм."
  },
];

export const CardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {mockData.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};


