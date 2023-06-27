import { Button, Image, Container } from "semantic-ui-react"
import ImageBg from '../assets/aboubackground.png'

const About = () => {
  return (
    <div className="relative w-full bg-gray-100 py-10 px-5 overflow-hidden" id="about">
      <div className="absolute inset-y-20 left-0 w-full transform skew-y-12 bg-gray-200"></div>
      <Container className="flex relative z-10 flex-col justify-center items-center mx-auto">
        <h1 className="text-center font-black text-5xl">ABOUT <span className="text-secondColor">US</span></h1>
        <div className="flex flex-wrap justify-around items-center lg:-mt-10">
          <article className="font-semibold text-lg lg:w-[50%]">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem rem quod laboriosam officia, aperiam, facere porro libero amet deserunt suscipit rerum deleniti beatae quis saepe quos eum est aliquam accusantium laudantium iure repellendus vitae? Autem ipsam itaque nisi sed. Reiciendis molestiae dolore aut excepturi quam. Eius exercitationem laudantium eum ut.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, assumenda!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti deserunt odio consectetur! Illum necessitatibus obcaecati et quidem vero eaque aperiam, quos totam deleniti vitae, sapiente consectetur, molestiae reiciendis ipsam sed libero natus accusamus delectus? Voluptatem quaerat architecto quasi at esse.</p>
            <Button color="yellow" className="drop-shadow-md" size="big">Read More</Button>
          </article>
          <Image src={ImageBg} size="large" />
        </div>
      </Container>
    </div>
  )
}

export default About