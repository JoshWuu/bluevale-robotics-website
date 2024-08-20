import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Welcome to Bluevale Robotics 
      </h1>
      <p className="mb-4">
        {`At our robotics club, you’ll have the opportunity to create your own engineering projects from the ground up. 
        Learn how to harness the power of Arduinos and master the art of coding them to bring your ideas to life. 
        You'll dive into hands-on experiences, building circuits using breadboards and a variety of electrical components provided to you. 
        Whether you're a beginner or have some experience, this is your chance to explore the exciting world of robotics, develop new skills, 
        and see your creations in action!`}
      </p>
      <div id="particles-js"></div>

      <div class="count-particles">
        <span class="js-count-particles">--</span> particles
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
