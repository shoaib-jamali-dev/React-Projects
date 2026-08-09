import Heading from "../Heading"
import {category} from "../../Data/product.ts";
import Button from "../Button.tsx";


const Category = () => {
    const renderCards = category.map(card=>(
        <div key={card.id} className="flex-1 basis-[300px] shadow-md overflow-hidden">
            <div  className=" md:min-h-[30vh] h-[20vh] relative -mb-10 ">
                <img src={card.image} className="absolute bottom-0 object-contain w-full h-full "/>
            </div>

            <div className="bg-zinc-100 pt-17 p-8 rounded-xl">
                <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
                <p className="text-zinc-600 my-3">{card.description}</p>
            <Button content="See all"/>
            </div>

        </div>
    ));
  return (
    <section>
      <div className="max-w-[1400px] px-10 mx-auto py-20 ">
          <Heading highlight="Shop" content="by Category" />

          <div className="flex flex-wrap gap-10 md:mt-15 mt-10 justify-center ">
            {renderCards}
          </div>
      </div>
    </section>
  )
}

export default Category
