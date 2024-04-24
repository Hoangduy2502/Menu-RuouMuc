const menu = [
  {
    id: 1,
    title: "Mực nướng vừa",
    category: "Mực",
    categoryId: "1",
    price: "200.000",
    img:
      "./assets/mucnuong.jpg",
    desc: `Mực vừa cho 2-3 người ăn. Mực thơm, ngọt, chuẩn mực câu`,
    donvi:"đĩa"
  },
  {
    id: 2,
    title: "Mực nướng to",
    category: "Mực",
    categoryId: "1",
    price: "300.000",
    img:
    "./assets/mucnuong.jpg",
    desc: `Mực vừa cho trên 4 người ăn. Mực thơm, ngọt, chuẩn mực câu`,
    donvi:"đĩa"
  },
  {
    id: 4,
    title: "Mực xào chua cay",
    category: "Mực",
    categoryId: "1",
    price: "250.000",
    img:
    "./assets/xaome.jpg",
    desc: `Mực xào me chua cay thẫm đẫm sốt`,
    donvi:"đĩa"
  },
  {
    id: 5,
    title: "Mục xào bơ sữa",
    category: "Mực",
    categoryId: "1",
    price: "250.000",
    img:
    "./assets/bosua.jpg",
    desc: `Mực xào bơ sữa dừa ngậy ngậy ăn cùng bánh mì`,
    donvi:"đĩa"
  },
  {
    id: 6,
    title: "Mực chiên mắm",
    category: "Mực",
    categoryId: "1",
    price: "250.000",
    img:
    "./assets/chienmam.jpg",
    desc: `Mực chiên mắm chua cay mặn ngọt `,
    donvi:"đĩa"
  },
  {
    id: 7,
    title: "Cá bóng",
    category: "Cá",
    categoryId: "2",
    price: "60.0000",
    img:
    "./assets/cabong.jpeg",
    desc: `Cá bóng chiên tỏi/nướng `,
    donvi:"đĩa"
  },
  {
    id: 8,
    title: "Cá chỉ vàng nướng",
    category: "Cá",
    categoryId: "2",
    price: "50.000",
    img:
    "./assets/chivang.png",
    desc: `Cá chỉ vàng nướng`,
    donvi:"đĩa"
  },
  {
    id: 9,
    title: "Cá chai",
    category: "Cá",
    categoryId: "2",
    price: "90.000",
    img:
    "./assets/cachai.jpg",
    desc: `Cá chái nướng/ chiên tỏi`,
    donvi:"đĩa"
  },
  {
    id: 10,
    title: "Trà tắc thái xanh/thường",
    category: "Trà",
    categoryId: "3",
    price: "50.000",
    img:
    "./assets/tratac.jpg",
    desc: `1 ca 2 lít trà`,
    donvi:"2l"
  },
  {
    id: 11,
    title: "Nước quất",
    category: "Trà",
    categoryId: "3",
    price: "40.000",
    img:
    "./assets/tac.jpg",
    desc: `1 ca 2 lít nước quất`,
    donvi:"2l"
  },
  {
    id: 12,
    title: "Trà xoài",
    category: "Trà",
    categoryId: "3",
    price: "25.000",
    img:
    "./assets/tac.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
    donvi:"750ml"
  },
  {
    id: 13,
    title: "Trà đào",
    categoryId: "3",
    category: "Trà",
    price: "20.000",
    img:
    "./assets/tradao.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
    donvi:"750ml"
  },
  {
    id: 14,
    title: "Nước me",
    category: "Trà",
    categoryId: "3",
    price: "15.000",
    img:
    "./assets/nuocme.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
    donvi:"750ml"
  },
  {
    id: 15,
    title: "Nem rán",
    category: "Đồ ăn vặt",
    categoryId: "4",
    price: "60.000",
    img:
    "./assets/nemran.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
    donvi:"đĩa"
  },
];

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
  (values, item) => {
    if (!values.find(category => category.category === item.category)) {
      values.push({ category: item.category, categoryId: item.categoryId });
    }
    return values;
  },
  [{ category: "Tất cả", categoryId: "All" }]
);

const categoryList = () => {
const categoryBtns = categories
  .map((category) => {
    return `<button class="btn btn-outline-dark btn-item" data-id=${category.categoryId}>${category.category}</button>`;
  })
  .join("");

btnContainer.innerHTML = categoryBtns;
const filterBtns = document.querySelectorAll(".btn-item");

//filter menu
filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id;
    console.log(category);
    const menuCategory = menu.filter((menuItem) => {
      if (menuItem.categoryId === category) {
        return menuItem;
      }
    });
    if (category === "All") {
      menuList(menu);
    } else {
      menuList(menuCategory);
    }
  });
});
};

const menuList = (menuItems) => {
let displayMenu = menuItems.map((item) => {
  return `<div class="menu-items col-lg-6 col-sm-12">
          <img
            src=${item.img}
            alt=${item.title}
            class="photo"
          />
          <div class="menu-info">
            <div class="menu-title">
              <h4>${item.title}</h4>
            
            </div>
            <div class="menu-text">
              ${item.desc}
            </div>
            <h4 class="price">${item.price}đ/${item.donvi}</h4>
          </div>
        </div>
  `;
});
displayMenu = displayMenu.join("");
section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();