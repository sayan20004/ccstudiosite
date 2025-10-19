import React from 'react'
const presentationImage = 'url(path/to/presentation-visuals.jpg)';
const sellProductsImage = 'url(path/to/sell-products-image.jpg)';
const noJargonImage = 'url(path/to/no-jargon-image.jpg)';

// --- Reusable Button Component ---
const Button = ({ children }) => (
  <button
    // Use an arbitrary value for the custom orange color if it's not in your config, 
    // or define it in tailwind.config.js (e.g., 'bg-primary-orange')
    // We'll use a direct hex value for the background here:
    className="bg-[#FF6F3D] text-white py-3 px-6 rounded-md font-bold text-lg hover:bg-orange-600 transition duration-300 mt-5"
  >
    {children}
  </button>
);

// --- Component for the two bottom cards ---
const Card = ({ title, description, imageSrc, darkText = false }) => (
  <div
    className="relative flex flex-col justify-between p-8 rounded-xl shadow-xl overflow-hidden min-w-[300px] flex-1"
    // Use conditional background based on the 'darkText' prop
    style={{ backgroundColor: darkText ? 'white' : '#333333' }}
  >
    {/* Image Overlay/Background */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: imageSrc, opacity: darkText ? 0.1 : 0.2 }}
    />

    {/* Content */}
    <div className={`relative z-10 ${darkText ? 'text-gray-900' : 'text-white'}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-base leading-relaxed">{description}</p>
    </div>
    
    <Button>Book A Call</Button>
  </div>
);

// --- The main 'Turn your ideas' section ---
const FeatureSection = () => (
  <div className="bg-[#262626] text-white p-12 rounded-xl flex flex-col lg:flex-row gap-10 items-center mt-10">
    
    {/* Left Content */}
    <div className="lg:w-1/2">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
        <span className="text-[#FF6F3D]">Turn your ideas into show-stopping presentations</span> full of eye-catching visuals
      </h1>
      <p className="mt-5 text-lg opacity-80 leading-relaxed">
        Once everything is ready to go, we'll give your team an in-depth handover and, if needed, training to get the very best out of your asset. Nimble Group is different from most creative communication companies. Our mission is to demystify the production process, so it's understood that the challenges of simplifying visual health for various purposes.
      </p>
      <Button>Book A Call</Button>
    </div>

    {/* Right Image/Visuals Placeholder */}
    <div 
      className="lg:w-1/2 min-h-[300px] bg-cover bg-center rounded-lg"
      style={{ backgroundImage: presentationImage }}
    >
        {/* You'd use a Grid or absolute positioning here to fully replicate the complex photo collage */}
    </div>
  </div>
);

const AfterCeoSays = () => {
  return (
    <div>
        <div className="max-w-7xl mx-auto p-4 sm:p-8">

      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-5xl sm:text-6xl font-black text-gray-900">
          <span className="text-[#FF6F3D]">The Services We Offer</span>
          <br />
          For Your Business
        </h1>
      </header>

      {/* Top Feature Section */}
      <FeatureSection />

      {/* Bottom Cards Section */}
      <div className="flex flex-col md:flex-row gap-6 mt-10">
        <Card
          title="Sell More Products Worldwide"
          description="Creatively explain the benefits of your product and the different processes it treats so it can get into the hands of those who need it the most."
          imageSrc={sellProductsImage}
          darkText={false}
        />
        <Card
          title="No Jargon Need. Stop Worrying it"
          description="Creatively explain the benefits of your product and the different processes it treats so it can get into the hands of those who need it the most."
          imageSrc={noJargonImage}
          darkText={true}
        />
      </div>
    </div>
    </div>
  )
}

export default AfterCeoSays