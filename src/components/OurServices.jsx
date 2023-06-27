import { Card, Container, Icon } from "semantic-ui-react"

const OurServices = () => {
  return (
    <div className="w-full py-10">
      <Container>
        <article className="lg:w-[50%] mx-auto mb-20">
          <h1 className="font-black text-center text-5xl">OUR <span className="text-secondColor">SERVICES</span></h1>
          <p className="font-semibold text-center text-grayColor">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat sint perspiciatis nisi dicta. Eos, iste facere. Nisi, repudiandae porro dolores tempore accusamus ut eius ab magni eligendi expedita? Maiores, modi?</p>
        </article>
      </Container>
      <ul className="flex flex-wrap justify-center items-center w-full">
        <li className="p-10">
          <Card color="olive" className="relative bg-gray-100">
            <a className="absolute top-[-30%] left-[50%] translate-x-[-50%]">
              <Icon name="star" color="yellow" size="massive" />
            </a>
            <article className="mt-[50px] text-center px-5 py-6">
              <h1 className="uppercase text-center font-black">Web design</h1>
              <p className="font-semibold text-gray-500 -mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, a!</p>
              <a className="font-semibold underline">Read More</a>
            </article>
          </Card>
        </li>
        <li className="p-10">
          <Card color="olive" className="relative bg-gray-100">
            <a className="absolute top-[-30%] left-[50%] translate-x-[-50%]">
              <Icon name="star" color="yellow" size="massive" />
            </a>
            <article className="mt-[50px] text-center px-5 py-6">
              <h1 className="uppercase text-center font-black">Web design</h1>
              <p className="font-semibold text-gray-500 -mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, a!</p>
              <a className="font-semibold underline">Read More</a>
            </article>
          </Card>
        </li>
        <li className="p-10">
          <Card color="olive" className="relative bg-gray-100">
            <a className="absolute top-[-30%] left-[50%] translate-x-[-50%]">
              <Icon name="star" color="yellow" size="massive" />
            </a>
            <article className="mt-[50px] text-center px-5 py-6">
              <h1 className="uppercase text-center font-black">Web design</h1>
              <p className="font-semibold text-gray-500 -mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, a!</p>
              <a className="font-semibold underline">Read More</a>
            </article>
          </Card>
        </li>
        <li className="p-10">
          <Card color="olive" className="relative bg-gray-100">
            <a className="absolute top-[-30%] left-[50%] translate-x-[-50%]">
              <Icon name="star" color="yellow" size="massive" />
            </a>
            <article className="mt-[50px] text-center px-5 py-6">
              <h1 className="uppercase text-center font-black">Web design</h1>
              <p className="font-semibold text-gray-500 -mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, a!</p>
              <a className="font-semibold underline">Read More</a>
            </article>
          </Card>
        </li>
      </ul>
    </div>
  )
}

export default OurServices