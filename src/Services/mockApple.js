const database = [
    {
        id: 1,
        nombre: "Iphone SE (3ra generación)",
        categoria: "iphone",
        info: [
            {
                color: "black",
                memoria: 64,
                chip: "A13 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/MHY5VcdS/iphone-se-3.png",
        stock: 5,
        precio: 205999,
    },
    {
        id: 2,
        nombre: "Iphone 11 (64GB)",
        categoria: "iphone",
        info: [
            {
                color: "red",
                memoria: 64,
                chip: "A13 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/MHJ3yJwy/iphone-11-64.webp",
        stock: 3,
        precio: 270000,
    },
    {
        id: 3,
        nombre: "Iphone 11 (128GB)",
        categoria: "iphone",
        info: [
            {
                color: "White",
                memoria: 128,
                chip: "A13 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/8cdK4Xkx/Iphone11-128.webp",
        stock: 4,
        precio: 285000,
    },
    {
        id: 4,
        nombre: "Iphone 12 (256GB)",
        categoria: "iphone",
        info: [
            {
                color: "Black",
                memoria: 256,
                chip: "A14 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/CLY650m0/Iphone12-256.webp",
        stock: 6,
        precio: 420000,
    },
    {
        id: 5,
        nombre: "Iphone 12 Mini (128GB)",
        categoria: "iphone",
        info: [
            {
                color: "Black",
                memoria: 128,
                chip: "A14 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/cLL97cp5/Iphone12-Mini.webp",
        stock: 6,
        precio: 330000,
    },
    {
        id: 6,
        nombre: "Iphone 12 Pro Max(512GB)",
        categoria: "iphone",
        info: [
            {
                color: "Black",
                memoria: 512,
                chip: "A14 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/L6TQZWb1/Iphone12-Pro-Max.webp",
        stock: 3,
        precio: 599000,
    },
    {
        id: 7,
        nombre: "Iphone 13 (128GB)",
        categoria: "iphone",
        info: [
            {
                color: "Black",
                memoria: 128,
                chip: "A15 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/GmgMXyr3/Iphone13-128.webp",
        stock: 4,
        precio: 385000,
    },
    {
        id: 8,
        nombre: "Iphone 13 Pro Max (1TB)",
        categoria: "iphone",
        info: [
            {
                color: "White",
                memoria: 1000,
                chip: "A15 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/KYK0w8vP/Iphone13-Pro-Max.webp",
        stock: 6,
        precio: 780000,
    },
    {
        id: 9,
        nombre: "Iphone 14 (256GB)",
        categoria: "iphone",
        info: [
            {
                color: "White",
                memoria: 256,
                chip: "A15 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/W4Q5vchQ/Iphone14-256.webp",
        stock: 8,
        precio: 490000,
    },
    {
        id: 10,
        nombre: "Iphone 14 Pro (512GB)",
        categoria: "iphone",
        info: [
            {
                color: "Ore",
                memoria: 512,
                chip: "A16 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/nzB0VSmM/Iphone14-Pro.webp",
        stock: 6,
        precio: 775000,
    },
    {
        id: 11,
        nombre: "Iphone 14 Pro Max (1TB)",
        categoria: "iphone",
        info: [
            {
                color: "Ore",
                memoria: 1000,
                chip: "A16 Bionic"
            }
        ],
        imgurl: "https://i.postimg.cc/1XSM800B/Iphone14-Pro-Max.webp",
        stock: 5,
        precio: 1010000,
    },
    {
        id: 12,
        nombre: "AirPods",
        categoria: "airpods",
        info: [
            {
                color:"Blanco",
                memoria: "",
                chip: "",
            }
        ],
        imgurl: "https://i.postimg.cc/g2g717yW/AirPod.webp",
        stock: 5,
        precio: 60000,
    },
    {
        id: 13,
        nombre: "AirPods PRO (2da Generación)",
        categoria: "airpods",
        info: [
            {
                color:"Blanco",
                memoria: "",
                chip: "",
            }
        ],
        imgurl: "https://i.postimg.cc/9fzk2B1q/Air-Pods-Pro.webp",
        stock: 7,
        precio: 70000,
    },
    {
        id: 14,
        nombre: "Apple Watch SE",
        categoria: "watch",
        info: [
            {
                color:"Black",
                memoria: "",
                chip: "",
            }
        ],
        imgurl: "https://i.postimg.cc/TPS43WHN/Aple-Watch-SE.webp",
        stock: 2,
        precio: 180000,
    },
    {
        id: 15,
        nombre: "Apple Watch Series 7",
        categoria: "watch",
        info: [
            {
                color:"Blanco estelar",
                memoria: "",
                chip: "",
            }
        ],
        imgurl: "https://i.postimg.cc/rmrY0FBV/Apple-Watch-Series7.webp",
        stock: 3,
        precio: 205000,
    },
    {
        id: 14,
        nombre: "Apple Watch Series 8",
        categoria: "watch",
        info: [
            {
                color:"Black",
                memoria: "",
                chip: "",
            }
        ],
        imgurl: "https://i.postimg.cc/G3v5btPz/Apple-Watch-Series8.webp",
        stock: 7,
        precio: 70000,
    }
    
]

const ProductosApple = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(database);
      }, 3000);
    });
  };
  
  export default ProductosApple;