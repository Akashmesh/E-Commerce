import Title from "../components/Title"
import { assets } from "../assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
const About = () => {
  return (
    <div>
    <div className="text-2xl text-center pt-8 border-t">
      <Title text1={"ABOUT"} text2={"US"} />
    </div>
    <div className="my-10 flex flex-col md:flex-row gap-16">
      <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
      <p></p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, deleniti veritatis porro tempore sint necessitatibus accusantium totam at libero laboriosam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam minima odio excepturi dignissimos consequatur quos a harum at blanditiis reiciendis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nostrum adipisci, sequi quod suscipit quas dolor sapiente deserunt nam error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium impedit fuga natus quam velit consequuntur eligendi voluptas ex maxime voluptatem!</p>
      <b className="text-gray-800 ">Our Mission</b>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ipsa, dolores praesentium aperiam, aut velit magni illo rem delectus culpa eos vel tempore iste itaque id et excepturi sint soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ipsa?</p>
      </div>
    </div>
    <div className="text-xl py-4">
      <Title text1={"WHY"} text2={"CHOOSE US"} />
    </div>
    <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap5">
        <b>Quality Assurance:</b>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id possimus accusantium molestias nihil esse labore asperiores sit cum vitae odio!</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap5">
        <b>Convenience:</b>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id possimus accusantium molestias nihil esse labore asperiores sit cum vitae odio!</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap5">
        <b>Exceptional Customer Service:</b>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id possimus accusantium molestias nihil esse labore asperiores sit cum vitae odio!</p>
      </div>
    </div>
    <NewsLetterBox />
    </div>
  )
}

export default About