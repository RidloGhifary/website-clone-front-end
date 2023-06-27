import { Button, Icon, Input } from "semantic-ui-react"

const Contact = () => {
  return (
    <>
      <div className="w-full bg-secondColor py-10 px-5" id="contactus">
        <article className="mx-auto mb-10">
          <h1 className="font-black text-center text-5xl text-white">START YOUR NEW PROJECTS</h1>
        </article>
        <form method="post" className="lg:w-[70%] mx-auto text-center flex flex-wrap gap-3 justify-center">
          <label htmlFor="name"></label>
          <Input type="text" name="name" placeholder="YOUR NAME" className="flex-none md:flex-1 w-full" />
          <label htmlFor="email"></label>
          <Input type="email" name="email" placeholder="YOUR EMAIL" className="flex-none md:flex-1 w-full" />
          <label htmlFor="phone"></label>
          <Input type="number" name="phone" placeholder="YOUR PHONE" className="flex-none md:flex-1 w-full" />
          <Button color="orange" className="drop-shadow-md">SEND REQUEST</Button>
        </form>
        <p className="md:w-[70%] w-[90%] mx-auto mt-10 text-center text-white font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis similique quibusdam quod reiciendis harum voluptas repellendus nemo dolore, doloribus ipsa, minus culpa, aliquam eos mollitia quam neque. Ratione, dolores reprehenderit.</p>
      </div>

      <div className="w-full py-10 px-5">
        <article className="lg:w-[40%] md:w-[60%] mx-auto mb-10">
          <h1 className="font-black text-center text-5xl">OUR <span className="text-secondColor">CONTACT</span></h1>
          <p className="font-semibold text-center text-grayColor">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat sint perspiciatis nisi dicta. Eos, iste facere. Nisi, repudiandae porro dolores tempore accusamus ut eius ab magni eligendi expedita? Maiores, modi?</p>
        </article>

        <div className="w-full mx-auto text-center">
          <article>
            <span>
              <Icon name="map marker alternate" size="big" color="olive" />
            </span>
            <span className="font-semibold text-oliveColor">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, magnam?</span>
          </article>
          <article className="flex flex-wrap gap-5 justify-center mt-5">
            <a className="font-semibold text-oliveColor hover:text-oliveColor hover:scale-105 cursor-pointer">
              <Icon name="phone" color="olive" size="large" />
              +1 (222)-999-233
            </a>
            <a className="font-semibold text-oliveColor hover:text-oliveColor hover:scale-105 cursor-pointer">
              <Icon name="phone" color="olive" size="large" />
              +1 (222)-999-234
            </a>
            <a className="font-semibold text-oliveColor hover:text-oliveColor hover:scale-105 cursor-pointer">
              <Icon name="mail" color="olive" size="large" />
              yourmail@gmail.com
            </a>
          </article>
        </div>
        <div className="mapouter relative text-right w-full h-[400px] mt-6">
          <div className="overflow-hidden w-full h-[400px] bg-none">
            <iframe className="h-[400px]" width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=667&amp;height=400&amp;hl=en&amp;q=indonesia&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            <a href="https://gachanox.io/">Gacha Nox Download</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact