type ServiceCardProps = {
  image: string;
  number: string;
  title: string;
  desc: string;
  className: string;
};

export default function ServiceCard(props: ServiceCardProps) {
  return (
    <article
      className={`mx-auto flex h-[40rem] max-w-sm cursor-pointer flex-col items-center justify-around rounded-md px-12 py-10 shadow-xl duration-500 hover:-translate-y-2 ${props.className}`}
    >
      <div className="flex h-48 w-48 max-w-xs items-center justify-center">
        <img src={props.image} alt="Service" />
      </div>
      <div className="">
        <h1 className="mt-22 mb-10 text-6xl font-extrabold text-gray-800">
          {props.number}
        </h1>
        <h2 className="mb-5 font-bold text-gray-800">{props.title}</h2>
        <p className="text-sm leading-relaxed text-gray-700">{props.desc}</p>
      </div>
    </article>
  );
}
