const database = [
    {
        id: 1,
        nombre: "Iphone SE (3ra generación)",
        categoria: "Iphone",
        info: [
            {
                color: "black",
                memoria: 64,
                chip: "A13 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/MHY5VcdS/iphone-se-3.png",
        stock: 5,
        precio: 1150,
    },
    {
        id: 2,
        nombre: "Iphone 11 (64GB)",
        categoria: "Iphone",
        info: [
            {
                color: "red",
                memoria: 64,
                chip: "A13 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/MHJ3yJwy/iphone-11-64.webp",
        stock: 3,
        precio: 1510,
    },
    {
        id: 3,
        nombre: "Iphone 11 (128GB)",
        categoria: "Iphone",
        info: [
            {
                color: "White",
                memoria: 128,
                chip: "A13 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/8cdK4Xkx/Iphone11-128.webp",
        stock: 4,
        precio: 1600,
    },
    {
        id: 4,
        nombre: "Iphone 12 (256GB)",
        categoria: "Iphone",
        info: [
            {
                color: "Black",
                memoria: 256,
                chip: "A14 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/CLY650m0/Iphone12-256.webp",
        stock: 6,
        precio: 2350,
    },
    {
        id: 5,
        nombre: "Iphone 12 Mini (128GB)",
        categoria: "Iphone",
        info: [
            {
                color: "Black",
                memoria: 128,
                chip: "A14 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/cLL97cp5/Iphone12-Mini.webp",
        stock: 6,
        precio: 1850,
    },
    {
        id: 6,
        nombre: "Iphone 12 Pro Max(512GB)",
        categoria: "Iphone",
        info: [
            {
                color: "Black",
                memoria: 512,
                chip: "A14 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/L6TQZWb1/Iphone12-Pro-Max.webp",
        stock: 3,
        precio: 3360,
    },
    {
        id: 7,
        nombre: "Iphone 13 (128GB)",
        categoria: "Iphone",
        info: [
            {
                color: "Black",
                memoria: 128,
                chip: "A15 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/GmgMXyr3/Iphone13-128.webp",
        stock: 4,
        precio: 2180,
    },
    {
        id: 8,
        nombre: "Iphone 13 Pro Max (1TB)",
        categoria: "Iphone",
        info: [
            {
                color: "White",
                memoria: 1000,
                chip: "A15 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/KYK0w8vP/Iphone13-Pro-Max.webp",
        stock: 6,
        precio: 4380,
    },
    {
        id: 9,
        nombre: "Iphone 14 (256GB)",
        categoria: "Iphone",
        info: [
            {
                color: "White",
                memoria: 256,
                chip: "A15 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/W4Q5vchQ/Iphone14-256.webp",
        stock: 8,
        precio: 2750,
    },
    {
        id: 10,
        nombre: "Iphone 14 Pro (512GB)",
        categoria: "Iphone",
        info: [
            {
                color: "Ore",
                memoria: 512,
                chip: "A16 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/nzB0VSmM/Iphone14-Pro.webp",
        stock: 6,
        precio: 4350,
    },
    {
        id: 11,
        nombre: "Iphone 14 Pro Max (1TB)",
        categoria: "Iphone",
        info: [
            {
                color: "Ore",
                memoria: 1000,
                chip: "A16 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/1XSM800B/Iphone14-Pro-Max.webp",
        stock: 5,
        precio: 5670,
    },
    {
        id: 12,
        nombre: "AirPods",
        categoria: "AirPods",
        info: [
            {
                color:"Blanco",
                memoria: "",
                chip: "",
            }
        ],
        imgurl: "https://i.postimg.cc/g2g717yW/AirPod.webp",
        stock: 5,
        precio: 330,
    },
    {
        id: 13,
        nombre: "AirPods PRO (2da Generación)",
        categoria: "AirPods",
        info: [
            {
                color:"Blanco",
                memoria: "",
                chip: "",
            }
        ],
        imgurl: "https://i.postimg.cc/9fzk2B1q/Air-Pods-Pro.webp",
        stock: 7,
        precio: 390,
    },
    {
        id: 14,
        nombre: "Apple Watch SE",
        categoria: "Watch",
        info: [
            {
                color:"Black",
                memoria: "",
                chip: "",
            }
        ],
        imgurl: "https://i.postimg.cc/TPS43WHN/Aple-Watch-SE.webp",
        stock: 2,
        precio: 1010,
    },
    {
        id: 15,
        nombre: "Apple Watch Series 7",
        categoria: "Watch",
        info: [
            {
                color:"Blanco estelar",
                memoria: "",
                chip: "",
            }
        ],
        imgurl: "https://i.postimg.cc/rmrY0FBV/Apple-Watch-Series7.webp",
        stock: 3,
        precio: 1150,
    },
    {
        id: 16,
        nombre: "Apple Watch Series 8",
        categoria: "Watch",
        info: [
            {
                color:"Black",
                memoria: "",
                chip: "",
            }
        ],
        imgurl: "https://i.postimg.cc/G3v5btPz/Apple-Watch-Series8.webp",
        stock: 7,
        precio: 390,
    },
    {
        id: 17,
        nombre: `Apple MacBook Pro (13", 2020, 8GB de RAM)`,
        categoria: "MacBook",
        info: [
            {
                color:"Gris espacial",
                memoria: "256GB",
                chip: "M1",
            }
        ],
        imgurl: "https://i.postimg.cc/ZRwdfFSB/macbook-PRO-512-GB.webp",
        stock: 8,
        precio: 2850,
    },
    {
        id: 18,
        nombre: `Apple MacBook Pro (14", 2022, 16GB de RAM)`,
        categoria: "MacBook",
        info: [
            {
                color:"Plata",
                memoria: "1TB",
                chip: "M1 PRO",
            }
        ],
        imgurl: "https://i.postimg.cc/504zqKZW/macbook-1-TB.webp",
        stock: 11,
        precio: 4740,
    },
    {
        id: 19,
        nombre: `Apple MacBook Pro (16", 2022, 16GB de RAM)`,
        categoria: "MacBook",
        info: [
            {
                color:"Gris espacial",
                memoria: "512GB",
                chip: "M1 PRO",
            }
        ],
        imgurl: "https://i.postimg.cc/qqYCrJgp/macbook-Pro2020.webp",
        stock: 3,
        precio: 1150,
    },
    {
        id: 20,
        nombre: `Apple MacBook Air (13.6", 2022, 8GB de RAM)`,
        categoria: "MacBook",
        info: [
            {
                color:"Space gray",
                memoria: "256GB",
                chip: "M2 8-Core",
            }
        ],
        imgurl: "https://i.postimg.cc/Rhqn26SP/macbook-Air-2022.webp",
        stock: 9,
        precio: 2610,
    },
    {
        id: 21,
        nombre: `Apple MacBook Air (13", 2022, 8GB de RAM)`,
        categoria: "MacBook",
        info: [
            {
                color:"Plata",
                memoria: "512GB",
                chip: "M1",
            }
        ],
        imgurl: "https://i.postimg.cc/ZYDNpcHX/macbook-Air-2020.webp",
        stock: 5,
        precio: 2790,
    },

    
]

const ProductosApple = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(database);
      }, 3000);
    });
  };

  const getProducto = (id) => {
    return new Promise((resolve, reject) => {
      const prod = database.find(elem => elem.id === parseInt(id));
      setTimeout(() => {
          if (prod) resolve(prod);
          else reject("No se encontró el producto");   
      }, 2000);
    });
};

  const getProdByCategory = (categoriaURL) => {
    return new Promise((resolve, reject) => {
      let reqItems = database.filter((item) => item.categoria === categoriaURL);
  
      setTimeout(() => {
        if (reqItems) resolve(reqItems);
        else reject("No se encontró la categoría")
      }, 2000);
    });
  };

  export default ProductosApple;
  export {getProducto, getProdByCategory};