import React from "react";
import products from "./data/products";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Магазин товаров
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">
                {product.name}
              </h2>

              <p className="text-gray-600 text-sm mb-3">
                {product.description}
              </p>

              <p className="text-blue-500 text-sm mb-2">
                {product.category}
              </p>

              <p className="text-2xl font-bold mb-4">
                {product.price.toLocaleString("ru-RU")} сум
              </p>

              <a
                href="https://t.me/NoAboutme"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-black text-white py-2 rounded-xl hover:bg-gray-800 duration-300"
              >
                Заказать
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;