export default function Home() {
  return (
    <div className="py-4 px-3 mx-auto max-w-screen-desktop">
      <div className="font-source-sans">
        <h1 className="text-4xl font-bold max-w-prose mb-4">
          Welcome to USWDS + Tailwind!
        </h1>
        
        <div className="max-w-prose mb-8">
          <p className="text-lg mb-4 text-gray-70">
            This is a Next.js application configured with the U.S. Web Design System (USWDS) 
            using Tailwind CSS. The configuration provides access to all USWDS colors, fonts, 
            and design tokens.
          </p>
          
          <p className="mb-6 text-gray-70">
            Below are some examples of USWDS components and styling:
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Buttons</h2>
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              type="button"
              className="rounded font-bold leading-none text-white px-5 py-3 bg-blue-60 hover:bg-blue-warm-70 active:bg-blue-warm-80 focus:outline focus:outline-4 focus:outline-offset-4 focus:outline-blue-40"
            >
              Primary Button
            </button>
            
            <button
              type="button"
              className="rounded font-bold leading-none text-blue-60 px-5 py-3 bg-transparent border-2 border-blue-60 hover:bg-blue-60 hover:text-white active:bg-blue-warm-70 focus:outline focus:outline-4 focus:outline-offset-4 focus:outline-blue-40"
            >
              Secondary Button
            </button>
            
            <button
              type="button"
              className="rounded font-bold leading-none text-white px-5 py-3 bg-red-60 hover:bg-red-warm-70 active:bg-red-warm-80 focus:outline focus:outline-4 focus:outline-offset-4 focus:outline-red-40"
            >
              Danger Button
            </button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Typography</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-merriweather text-xl font-bold mb-2">Font Families</h3>
              <p className="font-public-sans mb-2">This text uses Public Sans (font-public-sans)</p>
              <p className="font-source-sans mb-2">This text uses Source Sans (font-source-sans)</p>
              <p className="font-open-sans mb-2">This text uses Open Sans (font-open-sans)</p>
              <p className="font-merriweather mb-2">This text uses Merriweather (font-merriweather)</p>
              <p className="font-roboto-mono mb-2">This text uses Roboto Mono (font-roboto-mono)</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Colors</h2>
          <div className="grid grid-cols-2 tablet:grid-cols-4 desktop:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="w-full h-16 bg-blue-60 rounded mb-2"></div>
              <p className="text-sm">blue-60</p>
            </div>
            <div className="text-center">
              <div className="w-full h-16 bg-red-60 rounded mb-2"></div>
              <p className="text-sm">red-60</p>
            </div>
            <div className="text-center">
              <div className="w-full h-16 bg-green-60 rounded mb-2"></div>
              <p className="text-sm">green-60</p>
            </div>
            <div className="text-center">
              <div className="w-full h-16 bg-gold-60 rounded mb-2"></div>
              <p className="text-sm">gold-60</p>
            </div>
            <div className="text-center">
              <div className="w-full h-16 bg-orange-60 rounded mb-2"></div>
              <p className="text-sm">orange-60</p>
            </div>
            <div className="text-center">
              <div className="w-full h-16 bg-gray-60 rounded mb-2"></div>
              <p className="text-sm">gray-60</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Responsive Breakpoints</h2>
          <div className="p-4 bg-gray-5 rounded">
            <p className="mobile-lg:hidden">Mobile (default)</p>
            <p className="hidden mobile-lg:block tablet:hidden">Mobile Large (480px+)</p>
            <p className="hidden tablet:block desktop:hidden">Tablet (640px+)</p>
            <p className="hidden desktop:block">Desktop (1024px+)</p>
          </div>
        </div>

        <div className="bg-blue-5 border-l-4 border-blue-60 p-4 rounded">
          <h3 className="font-bold text-blue-90 mb-2">Success!</h3>
          <p className="text-blue-80">
            Your USWDS + Tailwind configuration is working correctly. You now have access to 
            all USWDS design tokens, colors, fonts, and responsive utilities.
          </p>
        </div>
      </div>
    </div>
  );
}
