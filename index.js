const menu = [
  {
    id: 1,
    title: "دزينة رقاقات جبنة",
    category: "رقاقات",
    price: 5.5,
    img: "./images/rkakat.jpeg",
    alt: "دزينة رقاقات جبنة",

  },
  {
    id: 2,
    title: "دزينة رقاقات جبنة و سجق ",
    category: "رقاقات",
    price: 6.5,
    img: "./images/rkakatwsjek.jpeg",
    alt: "دزينة رقاقات جبنة و سجق ",

  },
  {
    id: 3,
    title: "دزينة رقاقات لحمة",
    category: "رقاقات",
    price: 6.5,
    img: "./images/rkakatlahme.jpeg",
    title: "دزينة رقاقات لحمة"

  },
  {
    id: 4,
    title: "دزينة صفيحة بعلبكية",
    category: "صفيحة",
    price: 5,
    img: "./images/baalbakeye.jpeg",
    alt: "دزينة صفيحة بعلبكية"
  },
  {
    id: 5,
    title: "دزينة كبة ",
    category: "كبة",
    price: 8,
    img: "./images/kobeh.jpeg",
    alt: "دزينة كبة ",
  },
  {
    id: 6,
    title: "دزينة كبة بالصينية نص كيلو ",
    category: "كبة",
    price: 7,
    img: "./images/kobehsaneyenoskilo.jpeg",
    alt: "دزينة كبة بالصينية نص كيلو ",

  },
  {
    id: 7,
    title: "دزينة كبة بالصينية كيلو ",
    category: "كبة",
    price: 13,
    img: "./images/kobehsaneyekilo.jpeg",
    alt: "دزينة كبة بالصينية كيلو ",

  },
  {
    id: 8,
    title: "٥٠ حبة شيش برك ",
    category: "كبة",
    price: 5,
    img: "./images/sheshbarak.jpeg",
    alt: "٥٠ حبة شيش برك ",

  },
  {
    id: 9,
    title: "كيلو ورق عنب بلحمة",
    category: "ورق",
    price: 10,
    img: "./images/warakblehame.jpeg",
    alt: "كيلو ورق عنب بلحمة",

  },
  {
    id: 10,
    title: "كيلو ورق عنب بزيت",
    category: "ورق",
    price: 7,
    img: "./images/warakbzet.jpeg",
    alt: "كيلو ورق عنب بزيت",

  },
  {
    id: 11,
    title: "كيلو سلق بزيت",
    category: "ورق",
    price: 7,
    img: "./images/selekbzet.jpeg",
    alt: "كيلو سلق بزيت",

  },
  {
    id: 12,
    title: "كيلو ملفوف ",
    category: "ورق",
    price: 10,
    img: "./images/malfof.jpeg",
  },
  {
    id: 13,
    title:"دزينة فطاير سبانخ",
    category: "فطاير",
    price: 10,
    img: "./images/fatayersabanekh.jpeg",
    alt:"دزينة فطاير سبانخ"

  }
];

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayCategoryItems();
});

const sectionElement = document.querySelector(".section-center");
const categoryElement = document.querySelector(".btn-container");

function displayMenuItems(menuList) {
  let sectionContent = "";

  // map ile ?
  menuList.forEach((item) => {
    sectionContent += `<article class="menu-item">
        <img src=${item.img} alt="menu item" class="photo" />
        <div class="item-info">
          <header>
            <h4 class="price">$${item.price}</h4>
            <h4>${item.title}</h4>
            
          </header>
          
        </div>
      </article>`;
  });
  sectionElement.innerHTML = sectionContent;
}

function displayCategoryItems() {
  let categories = [];
  let categoryContent = `<button type="button" class="filter-btn" data-id="الكل">الكل</button>`;

  menu.forEach((item) => {
    const foodIndex = categories.indexOf(item.category);
    if (foodIndex === -1) {
      categories.push(item.category);
    }
  });

  categories.forEach((category) => {
    categoryContent += `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`;
  });

  categoryElement.innerHTML = categoryContent;

  // =============

  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    // event
    button.addEventListener("click", function (e) {
      // Yemek filtreleme işlemi gerçekleşecek.
      const selectedCategoryName = e.target.getAttribute("data-id");
      const filteredMenu = menu.filter(
        (item) => item.category === selectedCategoryName
      );

      console.log("selectedCategoryName: " + selectedCategoryName);

      if (selectedCategoryName == "الكل") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(filteredMenu);
      }
    });
  });
}
