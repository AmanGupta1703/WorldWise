const PricingPage = () => {
  return (
    <article className="h-full flex items-center justify-center gap-16">
      <div className="text-white space-y-6 max-w-md">
        <h2 className="text-4xl font-bold tracking-wider">
          Simple pricing.
          <br />
          Just $9/month.
        </h2>

        <p className="text-base tracking-wide">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel labore mollitia iusto.
          Recusandae quos provident, laboriosam fugit voluptatem iste.
        </p>
      </div>

      <div className="max-w-sm">
        <img
          className="w-full h-full object-cover rounded-lg hover:scale-95 transition-transform"
          src="/assets/pricing-section.png"
          alt="Aerial view of a city skyline with tall buildings, a large body of water in the background, and a clear sky at sunset."
        />
      </div>
    </article>
  );
};

export default PricingPage;
