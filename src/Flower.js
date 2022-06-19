import Navbar from './Navbar';

const products = [
    {
      id: 1,
      name: 'Arabella Bouqet',
      href: '#',
      imageSrc: 'https://cdn.shopify.com/s/files/1/1589/6833/products/ArabellaBouquet_350x.jpg?v=1653279151',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 55.000,00',
      color: 'Blue Red',
    },
    {
      id: 2,
      name: 'Everglow Bouqet',
      href: '#',
      imageSrc: 'https://cdn.shopify.com/s/files/1/1589/6833/products/Everglow-Bouquet_350x.jpg?v=1653279148',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp.100.000,00',
      color: 'White Red',
    },
    {
      id: 3,
      name: 'White Rose Blue Bouqet',
      href: '#',
      imageSrc: 'https://cdn.shopify.com/s/files/1/1589/6833/products/4e737a17-5090-4d3b-a509-0cb5c38d64fd_5e860bb7-7c37-4925-97d1-4a15917fd0ee_350x.jpg?v=1582183764',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp 350.000,00',
      color: 'Cloudy blue',
    },
    {
      id: 4,
      name: 'Black Midnight Bouqet',
      href: '#',
      imageSrc: 'https://cdn.shopify.com/s/files/1/1589/6833/products/Classic-Midnight-Hand-Bouquet---Fiery-Red-36_350x.jpg?v=1612264694',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Rp.450.000,00',
      color: 'Black Red',
    },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-neutral-100">
        <Navbar/>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900">Flower Bucket</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  