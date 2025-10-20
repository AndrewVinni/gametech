// Lista de produtos
const products = [
  {
    name: "Ssd Fnx Gamer 120gb Disco Sólido Interno Hd Sata Sfnx17/120g Cor Preto",
    price: "R$ 94,70",
    image: "https://http2.mlstatic.com/D_Q_NP_878228-MLA95356968191_102025-B.webp",
    link: "https://mercadolivre.com/sec/27CCKG1"
  },
  {
    name: "Ssd Kingston A400 960gb Sata 3.0 Interno Original Garantia Original Preto",
    price: "R$ 475,11",
    image: "https://http2.mlstatic.com/D_Q_NP_717435-MLB88420305887_072025-B.webp",
    link: "https://mercadolivre.com/sec/32YPiCT"
  },
  {
    name: "Placa Mãe MAXSUN A520M MS-Challenger Chipset A520 AMD AM4 mATX DDR4",
    price: "R$ 482,09",
    image: "https://http2.mlstatic.com/D_Q_NP_607483-MLA95385247757_102025-B.webp",
    link: "https://mercadolivre.com/sec/2jPbxk5"
  },
  {
    name: "Placa Mãe Asus Prime Z790-p Lga 1700 Atx Ddr5 - Open Box Preto",
    price: "R$ 1.947,00",
    image: "https://http2.mlstatic.com/D_Q_NP_949134-MLB94696540012_102025-B.webp",
    link: "https://mercadolivre.com/sec/1bZ4r2V"
  },
  {
    name: "Placa Mãe H61 Socket Lga 1155 Com M.2 Nvme Lan Giga I3 I5 I7 Preto",
    price: "R$ 145,00",
    image: "https://http2.mlstatic.com/D_Q_NP_951732-MLB94460635687_102025-B.webp",
    link: "https://mercadolivre.com/sec/27rrWBi"
  },
  {
    name: "Placa-mãe Asus P/amd Am4 B550m-plus Tuf Gaming 4xddr4 Matx",
    price: "R$ 889,00",
    image: "https://http2.mlstatic.com/D_Q_NP_722256-MLA95379817583_102025-B.webp",
    link: "https://mercadolivre.com/sec/1cp1Sbg"
  },
  {
    name: "Processador gamer Intel Core I5-13400F BX8071513400F de 10 núcleos e 4.6GHz de frequência",
    price: "R$ 978,15",
    image: "https://http2.mlstatic.com/D_Q_NP_933837-MLA95240455891_102025-B.webp",
    link: "https://mercadolivre.com/sec/2SyVZpR"
  },
  {
    name: "Processador Intel I5-14400f 20mb 3.5ghz Lga 1700 ddr/5",
    price: "R$ 1.049,00",
    image: "https://http2.mlstatic.com/D_Q_NP_798943-MLA94920084820_102025-B.webp",
    link: "https://mercadolivre.com/sec/1yJhNXd"
  },
  {
    name: "Processador AMD Ryzen 5 5500 3.6GHz 4.2GHz Max Turbo Cache 16MB AM4 Sem Vídeo",
    price: "R$ 464,60",
    image: "https://http2.mlstatic.com/D_Q_NP_760577-MLA95379842825_102025-B.webp",
    link: "https://mercadolivre.com/sec/1bYtkhr"
  },
  {
    name: "Pasta Térmica Implastec Ts Cold 4g, Espátula + Sachê Cleaner",
    price: "R$ 40,99",
    image: "https://http2.mlstatic.com/D_Q_NP_843172-MLA95366244027_102025-B.webp",
    link: "https://mercadolivre.com/sec/22sFMiJ"
  },
  {
    name: "Pasta Térmica Prata Tapcamp Alta Performance Processador Pc Note 20g",
    price: "R$ 37,99",
    image: "https://http2.mlstatic.com/D_Q_NP_820139-MLA95373297147_102025-B.webp",
    link: "https://mercadolivre.com/sec/1M2htuN"
  },
  {
    name: "Placa De Vídeo Nvidia Geforce Gt-750ti 2gb Gddr5 Hdmi 128bit",
    price: "R$ 1.252,52",
    image: "https://http2.mlstatic.com/D_Q_NP_991234-MLB50865208771_072022-B-placa-de-video-nvidia-geforce-gt-750ti-2gb-gddr5-hdmi-128bit.webp",
    link: "https://mercadolivre.com/sec/2261Pav"
  },
  {
    name: "Placa Video Gt740 4gb Gddr5 Relógio 993mhz Pronta Entrega",
    price: "R$ 424,64",
    image: "https://http2.mlstatic.com/D_Q_NP_895930-MLB83057520867_032025-B-placa-video-gt740-4gb-gddr5-relogio-993mhz-pronta-entrega.webp",
    link: "https://mercadolivre.com/sec/1ZirNLM"
  },
  {
    name: "Placa De Vídeo Nvidia GT 1030 4Gb Gddr4 64Bit Single Fan Low Profile - Pagt10304Gbg4Lp",
    price: "R$ 541,14",
    image: "hhttps://http2.mlstatic.com/D_Q_NP_836288-MLA95379111429_102025-B.webp",
    link: "https://mercadolivre.com/sec/2wT62ZH"
  },
  {
    name: "Placa De Vídeo Gamer Amd Radeon Rx580 Gddr5 8g Hdmi Dp",
    price: "R$ 789,00",
    image: "https://http2.mlstatic.com/D_Q_NP_749907-MLA94919275114_102025-B.webp",
    link: "https://mercadolivre.com/sec/1LmvvdM"
  },
  {
    name: "Placa De Vídeo Msi Rtx 5060 8gb Gddr7 128 Bits Shadow 2x Oc",
    price: "R$ 2.179,00",
    image: "https://http2.mlstatic.com/D_Q_NP_817476-MLA94921054850_102025-B.webp",
    link: "https://mercadolivre.com/sec/2pezN2U"
  },
  {
    name: "ProGabinete Gamer Redragon Wideload Pro Ca-604b-Pro Preto Mid Tower Vidro ATX",
    price: "R$ 499,90",
    image: "https://http2.mlstatic.com/D_Q_NP_910000-MLA92023630549_092025-B.webp",
    link: "https://mercadolivre.com/sec/1vPDhaL"
  },
  {
    name: "Pc Gamer Xeon 2689 V2 16gb Ram Ssd 480gb Rx550 4g",
    price: "R$ 2.099,00",
    image: "https://http2.mlstatic.com/D_Q_NP_749247-MLB80228746596_112024-B-pc-gamer-xeon-2689-v2-16gb-ram-ssd-480gb-rx550-4gb.webp",
    link: "https://mercadolivre.com/sec/2zhf3Sj"
  },
  {
    name: "Teclado Gamer Mecânico Blue Switch Led Rgb Usb Computador Notebook Pc Ps4 Xbox Cor Preto Digital Informática",
    price: "R$ 159,90",
    image: "https://http2.mlstatic.com/D_Q_NP_974598-MLA95403067817_102025-B.webp",
    link: "https://mercadolivre.com/sec/2APuPYm"
  },
  {
    name: "Mouse sem fio M170 Preto Logitech",
    price: "R$ 52,78",
    image: "https://http2.mlstatic.com/D_Q_NP_871186-MLA95354924593_102025-B.webp",
    link: "https://mercadolivre.com/sec/2T4yD1y"
  },
  {
    name: "Mouse Gamer Para Jogo 3.200 Dpi Óptico Com Led Rgb Usb 7 Botões 4 Velocidades Dpi Ergométrico Casenn Preto",
    price: "R$ 30,66",
    image: "https://http2.mlstatic.com/D_Q_NP_632534-MLA94938933320_102025-B.webp",
    link: "https://mercadolivre.com/sec/2TUnjrD"
  },
  {
    name: "Mouse Para Computador Notebook Com Fio Usb E Mousepad",
    price: "R$ 34,77",
    image: "https://http2.mlstatic.com/D_Q_NP_797344-MLA94933165108_102025-B.webp",
    link: "https://mercadolivre.com/sec/1UXUr3b"
  }
];

// Função para exibir os produtos
function displayProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>${product.price}</p>
      <a href="${product.link}" target="_blank">Comprar</a>
    `;
    productList.appendChild(productDiv);
  });
}

// Chama a função para exibir os produtos
displayProducts();
