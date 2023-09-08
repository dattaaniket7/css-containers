export default function Card({ img, title }) {
  return (
    <div className="bg-white rounded-2xl @container">
      <div className="p-12 @6xl:flex gap-12">
        <img className="rounded-md @6xl:w-1/4" src={img} alt={img} />
        <div>
          <h1 className="text-lg font-bold my-2">{title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            earum atque provident numquam ab perferendis temporibus sit,
            consequatur blanditiis laudantium voluptate saepe nesciunt dolore
            veniam iste officiis facilis repudiandae tenetur itaque aperiam
            suscipit qui. Unde harum libero quam cum deleniti aspernatur dolores
            saepe quasi dolor. A magni amet, animi recusandae, consectetur cum,
            architecto consequuntur veniam quia ea maxime minima iusto.
          </p>
          <button className="font-bold mt-4 bg-black text-white px-4 py-2 rounded-md">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
