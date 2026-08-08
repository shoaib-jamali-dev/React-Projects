
type HeadingProp = {
    highlight: string
    content: string
}

const Heading = ({highlight,content}:HeadingProp) => {
  return (
  
        <div className="w-fit mx-auto">
                <h2 className="md:text-5xl text-3xl font-bold "><span className="text-orange-500">{highlight}</span> {content}</h2>
                <div className="w-34 h-1 md:mt-6 mt-3.5 bg-orange-300 ml-auto"></div>
        </div>
  )
}

export default Heading
