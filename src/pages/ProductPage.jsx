const ProductPage = () => {
  return (
    <article className="h-full flex items-center justify-center gap-16">
      <div className="max-w-sm">
        <img
          className="w-full h-full object-cover rounded-lg hover:scale-95 transition-transform"
          src="/assets/product-section.png"
          alt="Aerial view of a city skyline with tall buildings, a large body of water in the background, and a clear sky at sunset."
        />
      </div>

      <div className="text-white space-y-6 max-w-md">
        <h2 className="text-4xl font-bold tracking-wider">About WorldWide.</h2>

        <p className="text-base tracking-wide mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est dicta illum vero culpa
          cum quaerat architecto sapiente eius non soluta, molestiae nihil laborum, placeat debitis,
          laboriosam at fuga perspiciatis?
        </p>

        <p className="text-base tracking-wide">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis doloribus libero sunt
          expedita ratione iusto, magni, id sapiente sequi officiis et.
        </p>
      </div>
    </article>
  );
};

export default ProductPage;
