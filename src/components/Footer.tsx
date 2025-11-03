const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Chai House</h3>
            <p className="text-secondary-foreground/80">
              Bringing authentic chai experiences to your neighborhood since 2014
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Visit Us</h4>
            <p className="text-secondary-foreground/80">
              123 Spice Street<br />
              Chai District<br />
              City, State 12345
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <p className="text-secondary-foreground/80">
              Monday - Friday: 7am - 8pm<br />
              Saturday - Sunday: 8am - 9pm
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-secondary-foreground/60">
          <p>&copy; 2024 Chai House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
