type Product = {
  id: string;
  name: string;
  price: number;
  metadata?: Record<string, string>;
};

const product1 = {
  id: "1",
  name: "Product 1",
  price: 100,
  metadata_XXX: {
    color: "red",
    size: "XL",
  },
};

const product: Product = product1;

const product2: Product = {
  id: "1",
  name: "Product 1",
  price: 100,
  metadata_XXX: {
    color: "red",
    size: "XL",
  },
};

function saveProduct(product: Product) {}
saveProduct({
  id: "1",
  name: "Product 1",
  price: 100,
  metadataXXX: {
    color: "red",
    size: "XL",
  },
});

function saveProducts(product: Product[]) {}
saveProducts([
  {
    id: "1",
    name: "Product 1",
    price: 100,
    metadataXXX: {
      color: "red",
      size: "XL",
    },
  },
]);

function retrieveNewProductsFromETL(): any[] {
  return [
    {
      id: "1",
      name: "Product 1",
      price: 100,
      metadata: {
        color: "red",
        size: "XL",
      },
    },
  ];
}

function doSave() {
  const newProducts = retrieveNewProductsFromETL();
  saveProducts(
    newProducts.map(product => {
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        metadataXXX: product.metadata,
      } satisfies Product;
    })
  );
}

export {};
