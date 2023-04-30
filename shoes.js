const options = {
  includeScore: false,
  threshold: 0.3,
  keys: [{ name: "shoeName", weight: 3 }],
};

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("rightPanel");
  const categoryContainer = document.getElementById("categoryContainer");
  const inputSearch = document.getElementById("fuzzy-search");
  const categoryElements = document.querySelectorAll('.titleShoes');
  const shoeArray = [
    {
      shoeName: "Nike Air Max Pulse",
      shoeType: "Air Max Pulse",
      shoeGender: "Men",
      shoeColor: "White",
      shoeLink:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d0b94722-d603-4e66-829c-51f1801ec3fa/air-max-pulse-shoes-DtVTbL.png",
      shoePrice: "1 799",
    },
    {
      shoeName: "Nike Air Max Pulse",
      shoeType: "Air Max Pulse",
      shoeGender: "Women",
      shoeColor: "White",
      shoeLink:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5d0da49e-48b1-47c1-b859-9022c5b30339/air-max-pulse-shoes-f2h8p7.png",
      shoePrice: "1 799",
    },
    {
      shoeName: "Nike Air Max Furyosa",
      shoeType: "Air Max Furyosa",
      shoeGender: "Women",
      shoeColor: "Black",
      shoeLink:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/683e0a29-3886-4644-90bb-4d74ce46b875/air-max-furyosa-shoes-vn0PDD.png",
      shoePrice: "1 799",
    },
    {
      shoeName: "Nike Air Max Furyosa",
      shoeType: "Air Max Furyosa",
      shoeGender: "Women",
      shoeColor: "Green",
      shoeLink:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7c0a129e-0ff1-4cc1-b09d-0f6cfe38b8cf/air-max-furyosa-shoes-flFXN4.png",
      shoePrice: "1 799",
    },
    {
      shoeName: "Nike Air Max 270 GO",
      shoeType: "Air Max 270",
      shoeGender: "Older Kids",
      shoeColor: "Black",
      shoeLink:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c74b9897-9cb9-4e1b-80ba-e9105ad62295/air-max-270-go-older-easy-on-off-shoes-VRMtnB.png",
      shoePrice: "1 499",
    },
    {
      shoeName: "Nike Air Max 270 GO",
      shoeType: "Air Max 270",
      shoeGender: "Younger Kids",
      shoeColor: "Black",
      shoeLink:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c18c97f3-73c9-4fe8-aeb3-81cbc1b53568/air-max-270-go-younger-easy-on-off-shoes-MjCgzr.png",
      shoePrice: "1 199",
    },
    {
      shoeName: "Nike Air Max 270 GO",
      shoeType: "Air Max 270",
      shoeGender: "Younger Kids",
      shoeColor: "Grey",
      shoeLink:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1c9eea35-9c7d-4c87-b89b-bf780b6697fb/air-max-270-go-younger-easy-on-off-shoes-VhtWtc.png",
      shoePrice: "1 199",
    },
    {
      shoeName: "Nike Air Max 270 GO",
      shoeType: "Air Max 270",
      shoeGender: "Baby",
      shoeColor: "Black",
      shoeLink:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b67c98af-ad3a-4846-a8e3-5d4c00d2bf78/air-max-270-go-easy-on-off-shoes-nB235P.png",
      shoePrice: "949",
    },
    {
      shoeName: "Nike Air Max Plus",
      shoeType: "Air Max Plus",
      shoeGender: "Women",
      shoeColor: "White",
      shoeLink:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4a3629fa-829e-4c5a-ab61-cca2e94f44a5/air-max-plus-shoes-m1MrgD.png",
      shoePrice: "2 149",
    },
    {
      shoeName: "Nike Air Max 90",
      shoeType: "Air Max 90",
      shoeGender: "Men",
      shoeColor: "Pink",
      shoeLink:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aa0f15c7-2b17-4815-9fbc-4e0d3b5f2ae7/air-max-plus-shoes-m9TXRH.png",
      shoePrice: "1 699",
    },
    {
      shoeName: "Nike Air Max 90 Futura",
      shoeType: "Air Max 90",
      shoeGender: "Women",
      shoeColor: "White",
      shoeLink:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/56cf6489-b014-4c8d-8edf-92953b655d94/air-max-90-futura-shoes-CsnG6l.png",
      shoePrice: "1 799",
    },
    {
      shoeName: "Nike Air Max 90 SE",
      shoeType: "Air Max 90",
      shoeGender: "Men",
      shoeColor: "Brown",
      shoeLink:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7c142bfe-42fb-41b4-bfb1-885be573a6a2/air-max-90-shoes-DVs6BT.png",
      shoePrice: "1 799",
    },
    {
      shoeName: "Nike Dunk Low",
      shoeType: "Dunk",
      shoeGender: "Men",
      shoeColor: "Orange",
      shoeLink:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f3036cb-8b5b-4adb-998f-9c732d5818cb/dunk-low-shoes-hQBFRp.png",
      shoePrice: "817",
    },
    {
      shoeName: "Nike Dunk High Retro",
      shoeType: "Dunk",
      shoeGender: "Men",
      shoeColor: "Black",
      shoeLink:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3f796e1e-1f14-444c-bef1-ffd2da6b62b4/air-jordan-i-high-g-golf-shoes-8T3vwn.png",
      shoePrice: "817",
    },
  ];
  const fuse = new Fuse(shoeArray, options);
  function shoeCreator(result, type) {
    for (let i = 0; i < result.length; i++) {
      if (type == "searched") {
        var shoe = result[i].item;
      } else {
        var shoe = result[i];
      }

      const shoeContainer = document.createElement("div");
      shoeContainer.classList.add("shoeContainer");

      const shoeImage = document.createElement("div");
      shoeImage.classList.add("shoeImage");
      shoeImage.style.backgroundImage = `url(${shoe.shoeLink})`;
      shoeContainer.appendChild(shoeImage);

      const ul = document.createElement("ul");
      shoeContainer.appendChild(ul);

      const shoeName = document.createElement("li");
      shoeName.classList.add("shoeName");
      shoeName.textContent = shoe.shoeName;
      ul.appendChild(shoeName);

      const shoeGender = document.createElement("li");
      shoeGender.classList.add("shoeGender");
      shoeGender.textContent = `${shoe.shoeGender}'s Shoes`;
      ul.appendChild(shoeGender);

      const shoeColor = document.createElement("li");
      shoeColor.classList.add("shoeColor");
      shoeColor.textContent = shoe.shoeColor;
      ul.appendChild(shoeColor);

      const shoePrice = document.createElement("li");
      shoePrice.classList.add("shoePrice");
      shoePrice.textContent = `${shoe.shoePrice}kr`;
      ul.appendChild(shoePrice);

      container.appendChild(shoeContainer);
    }
  }
  shoeCreator(shoeArray, "empty");
  inputSearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      container.innerHTML = "";
      var result = fuse.search(inputSearch.value);
      console.log(inputSearch.value.length);
      if (result.length > 0) {
        shoeCreator(result, "searched");
      } else if ((inputSearch.value.length === 0)) {
        shoeCreator(shoeArray, "empty");
      } else {
        container.innerHTML = "<h1>No items found</h1>";
        container.style.justifyContent = "Center"
      }
    }
  });
  categoryElements.forEach(title => {
    title.addEventListener('click', () => {
        container.innerHTML = ""
        const categoryOptions = {
            includeScore: false,
            threshold: 0.1,
            keys: [{ name: "shoeName", weight: 3 }],
          };
        let category = new Fuse(shoeArray, categoryOptions)
        let categoryResults = category.search(title.innerHTML)
        console.log(categoryResults)
        shoeCreator(categoryResults, "searched")
    })
  })
});
