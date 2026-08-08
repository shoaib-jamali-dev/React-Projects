import Heading from "../Heading"
import {category} from "../../Data/product.ts";
import Button from "../Button.tsx";


const Category = () => {
    const renderCards = category.map(card=>(
        <div className="flex-1">
            <div key={card.id}>
                <img src={card.image} />
            </div>

            <div className="bg-zinc-100">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
            <Button content="See all"/>
            </div>

        </div>
    ));
  return (
    <section>
      <div className="max-w-[1400px] px-10 mx-auto py-20 ">
          <Heading highlight="Shop" content="by Category" />

          <div className="flex gap-10">
            {renderCards}
          </div>
      </div>
    </section>
  )
}

export default Category
