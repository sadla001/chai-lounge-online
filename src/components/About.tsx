const About = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Welcome to our chai haven, where every cup tells a story of tradition and passion. 
              We've been crafting authentic Indian chai for over a decade, using recipes passed 
              down through generations.
            </p>
            <p>
              Our commitment to quality means we source only the finest tea leaves from Assam 
              and Darjeeling, and our spices are freshly ground daily. Every chai is made to 
              order, ensuring the perfect balance of flavors in every sip.
            </p>
            <p>
              Whether you're seeking comfort on a rainy day or a moment of peace in your busy 
              schedule, we invite you to experience the warmth and hospitality that chai brings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
