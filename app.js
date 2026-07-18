const officialLineDefault = "@nojokenoodle";

const mainFoodOptions = [
  { id: "extra-rice", name: "加飯🍚", price: 20, appliesTo: ["meals"] },
  { id: "extra-noodle", name: "加麵", price: 20, appliesTo: ["noodles"] },
  { id: "double-meat", name: "肉加倍", price: 28, appliesTo: ["noodles", "meals"] },
  { id: "double-wood-ear", name: "木耳加倍", price: 15, appliesTo: ["noodles", "meals"] },
  { id: "cheese", name: "起司🧀", price: 20, appliesTo: ["noodles", "meals"] },
  { id: "chili-sauce-addon", name: "頂級生鮮辣椒醬🌶️", price: 10, appliesTo: ["noodles", "meals", "snacks"] },
  { id: "no-scallion", name: "✗不要綠蔥✗", price: 0, appliesTo: ["noodles", "meals"] },
  { id: "no-wood-ear", name: "✗不要木耳✗", price: 0, appliesTo: ["noodles", "meals"] },
];

const menuItems = [
  {
    id: "soy-sauce-yi-noodle",
    category: "noodles",
    name: "秘製醬香炒意麵✨",
    image: "assets/soy-sauce-yi-noodle.jpg",
    description:
      "靈魂香油蔥與醇厚醬油在高溫火候下激發出迷人琥珀色澤。意麵特殊的孔隙緊緊鎖住每一滴鹹甜醬汁，搭配鮮嫩台灣豬肉絲與鮮蔬，口感濕潤順滑、層次豐富。",
    price: 112,
  },
  {
    id: "thai-boat-noodle",
    category: "noodles",
    name: "泰式船麵風味肉絲炒泡麵",
    image: "assets/thai-boat-noodle.jpg",
    description:
      "一秒飛泰國！濃郁的泰式船麵醬汁，完美吸附在Q彈的泡麵麵條上，搭配鮮嫩台灣豬肉絲與清脆時蔬，多層次香氣在口中爆發，酸、鹹、甜完美平衡。\n(附一片檸檬與蒜酥一包)\n(不會辣)",
    price: 139,
  },
  {
    id: "shacha-noodle",
    category: "noodles",
    name: "經典沙茶肉絲炒泡麵🍝",
    image: "assets/shacha-noodle.jpg",
    description:
      "經典沙茶的濃郁焦香！沙茶的鹹香微辛在舌尖綻放，搭配軟嫩的台灣豬肉絲，讓你每一口都像在吃現炒桌菜般過癮！",
    price: 129,
  },
  {
    id: "kimchi-noodle",
    category: "noodles",
    name: "韓式泡菜肉絲炒泡麵",
    image: "assets/kimchi-noodle.jpg",
    description:
      "韓式正宗酸辣！脆口泡菜與Q彈麵體火熱爆炒，泡菜香入味、台灣鮮嫩豬肉絲，每一口都極致開胃！",
    price: 129,
  },
  {
    id: "lard-scallion-noodle",
    category: "noodles",
    name: "蔥香肉燥肉絲炒泡麵👌",
    image: "assets/lard-scallion-noodle.jpg",
    description:
      "經典台味！與靈魂蔥香肉燥風味醬深度揉合，搭配軟嫩的台灣豬肉絲與清脆時蔬，口感層次分明，保證讓你一口接一口，回味無窮！",
    price: 119,
  },
  {
    id: "nanyang-noodle",
    category: "noodles",
    name: "特製南洋風味肉絲炒泡麵🤤",
    image: "assets/nanyang-noodle.jpg",
    description:
      "拒絕平庸調味！特製南洋風味醬汁完美入味，加上鮮嫩台灣豬肉絲爆炒，給您的味蕾感受不同的體驗\n(附一片檸檬)\n(不會辣)",
    price: 129,
  },
  {
    id: "fried-rice",
    category: "meals",
    name: "香蔥肉絲蛋炒飯",
    image: "assets/fried-rice.jpg",
    description:
      "大火翻炒鎖住米飯靈魂，確保粒粒分明、香味飽滿。台灣豬肉絲、鮮蔬與鮮蔥，在熾熱鍋氣中激發出濃郁蔥香，簡單卻極致。",
    price: 119,
  },
  {
    id: "egg-soup",
    category: "snacks",
    name: "紫菜青菜蛋花湯🍵",
    image: "assets/egg-soup.jpg",
    description: "紫菜、青菜與蛋花的清湯，口感清爽、溫潤順口\n（夏季用菜：高麗菜）",
    price: 59,
  },
  {
    id: "korean-kimchi",
    category: "snacks",
    name: "正宗韓式泡菜 (買一送一)",
    image: "assets/korean-kimchi.jpg",
    description: "超道地的韓式泡菜，「酸、辣、鮮、脆」的極致平衡！",
    price: 65,
  },
  {
    id: "chili-sauce",
    category: "snacks",
    name: "頂級生鮮辣椒醬🌶️",
    description:
      "特製超香辣椒醬！\n會用小盒子裝(內容物≒10g)，可以分餐食用，吃不完可蓋起來放冰箱保存\n(建議在一周內食用完畢)",
    price: 10,
  },
  {
    id: "thai-milk-tea",
    category: "drinks",
    name: "特製泰式奶茶🍹",
    image: "assets/thai-milk-tea.jpg",
    description:
      "特別調整了傳統泰奶的甜度，保留泰奶獨特的茶香及特有的焦糖感與香料風味，並融合醇厚奶質，口感絲滑而不甜膩。這是一款專為台灣味蕾設計的泰奶，讓您感受正宗南洋風情，卻更顯清爽順口。\n（無供應溫熱）\n（不提供加冰塊服務）",
    price: 75,
  },
  {
    id: "osmanthus-green-tea",
    category: "drinks",
    name: "桂花綠茶🍃",
    image: "assets/osmanthus-green-tea.jpg",
    description: "桂花香氣清雅迷人，搭配綠茶回甘清爽\n（無糖、無供應溫熱）\n（不提供加冰塊服務）",
    price: 55,
  },
  {
    id: "jinxuan-black-tea",
    category: "drinks",
    name: "金萱紅茶🍯",
    image: "assets/jinxuan-black-tea.jpg",
    description: "香氣柔和帶蜜香，尾韻回甘，茶湯呈紅褐色\n（無糖、無供應溫熱）\n（不提供加冰塊服務）",
    price: 55,
  },
];

const state = {
  cart: [],
  filter: "all",
  activeItemId: null,
  lineTarget: localStorage.getItem("officialLineTarget")?.startsWith("@")
    ? localStorage.getItem("officialLineTarget")
    : officialLineDefault,
};

const menuGrid = document.querySelector("#menuGrid");
const cartList = document.querySelector("#cartList");
const originalTotalEl = document.querySelector("#originalTotal");
const subtotalEl = document.querySelector("#subtotal");
const previewEl = document.querySelector("#messagePreview");
const form = document.querySelector("#checkoutForm");
const settingsDialog = document.querySelector("#settingsDialog");
const lineTargetInput = document.querySelector("#lineIdInput");
const itemDialog = document.querySelector("#itemDialog");
const itemDialogTitle = document.querySelector("#itemDialogTitle");
const itemDialogDescription = document.querySelector("#itemDialogDescription");
const itemDialogBasePrice = document.querySelector("#itemDialogBasePrice");
const optionList = document.querySelector("#optionList");
const optionCount = document.querySelector("#optionCount");
const itemQuantity = document.querySelector("#itemQuantity");
const addItemButton = document.querySelector("#addItemButton");

function formatCurrency(value) {
  return `$${value.toLocaleString("zh-TW")}`;
}

function optionsForItem(item) {
  const options = mainFoodOptions.filter((option) => {
    if (
      (
        item.id === "soy-sauce-yi-noodle" ||
        item.id === "thai-boat-noodle" ||
        item.id === "shacha-noodle" ||
        item.id === "kimchi-noodle" ||
        item.id === "lard-scallion-noodle" ||
        item.id === "nanyang-noodle"
      ) &&
      option.id === "no-scallion"
    ) {
      return false;
    }

    if (
      (item.id === "egg-soup" || item.id === "korean-kimchi" || item.id === "chili-sauce") &&
      option.id === "chili-sauce-addon"
    ) {
      return false;
    }

    return option.appliesTo.includes(item.category);
  });

  if (
    item.id === "soy-sauce-yi-noodle" ||
    item.id === "shacha-noodle" ||
    item.id === "lard-scallion-noodle"
  ) {
    options.push({ id: "no-carrot-shreds", name: "✘不要紅蘿蔔絲✘", price: 0 });
  }

  if (item.id === "kimchi-noodle") {
    options.push(
      { id: "double-kimchi", name: "泡菜加倍", price: 25 },
      { id: "no-carrot-shreds", name: "✗不要紅蘿蔔絲✗", price: 0 }
    );
  }

  if (item.id === "egg-soup") {
    options.push(
      { id: "no-scallion", name: "✗不要綠蔥✗", price: 0 },
      { id: "double-vegetables", name: "青菜加倍", price: 15 }
    );
  }

  return options.map((option) => {
    if (
      (
        item.id === "thai-boat-noodle" ||
        item.id === "shacha-noodle" ||
        item.id === "kimchi-noodle" ||
        item.id === "lard-scallion-noodle" ||
        item.id === "nanyang-noodle"
      ) &&
      option.id === "extra-noodle"
    ) {
      return { ...option, price: 30 };
    }

    return option;
  });
}

function maxOptionsForItem(item) {
  return item.id === "kimchi-noodle" ? 8 : 7;
}

function selectedOptions() {
  return Array.from(optionList.querySelectorAll("input:checked")).map((input) => {
    const item = menuItems.find((menuItem) => menuItem.id === state.activeItemId);
    return optionsForItem(item).find((option) => option.id === input.value);
  });
}

function optionTotal(options) {
  return options.reduce((sum, option) => sum + option.price, 0);
}

function cartEntryTotal(entry) {
  return (entry.item.price + optionTotal(entry.options)) * entry.quantity;
}

function itemCount(id) {
  return state.cart
    .filter((entry) => entry.item.id === id)
    .reduce((sum, entry) => sum + entry.quantity, 0);
}

function subtotal() {
  return state.cart.reduce((sum, entry) => sum + cartEntryTotal(entry), 0);
}

function discountedTotal() {
  return Math.round(subtotal() * 0.8);
}

function renderMenu() {
  const items = menuItems.filter((item) => state.filter === "all" || item.category === state.filter);

  menuGrid.innerHTML = items
    .map(
      (item) => `
        <article class="menu-card ${item.image ? "has-image" : ""}">
          ${
            item.image
              ? `<img class="menu-card-image" src="${item.image}" alt="${item.name} 餐點照片">`
              : ""
          }
          <div>
            <h3>${item.name}</h3>
            <p>${item.description.replaceAll("\n", "<br>")}</p>
          </div>
          <div class="card-footer">
            <span class="price">${formatCurrency(item.price)}</span>
            <div class="stepper" aria-label="${item.name} 數量">
              <button type="button" data-action="decrease" data-id="${item.id}" aria-label="減少 ${item.name}">−</button>
              <span>${itemCount(item.id)}</span>
              <button type="button" data-action="customize" data-id="${item.id}" aria-label="選擇 ${item.name}">+</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCart() {
  if (state.cart.length === 0) {
    cartList.innerHTML = `<div class="empty-cart">尚未選擇餐點</div>`;
  } else {
    cartList.innerHTML = state.cart
      .map((entry) => {
        const options = entry.options.length
          ? `<span>${entry.options.map((option) => option.name).join("、")}</span>`
          : `<span>無客製選項</span>`;
        return `
          <div class="cart-item">
            <div>
              <strong>${entry.item.name} × ${entry.quantity}</strong>
              ${options}
            </div>
            <div class="cart-item-actions">
              <strong>${formatCurrency(cartEntryTotal(entry))}</strong>
              <button type="button" data-remove="${entry.id}" aria-label="移除 ${entry.item.name}">移除</button>
            </div>
          </div>
        `;
      })
      .join("");
  }

  originalTotalEl.textContent = formatCurrency(subtotal());
  subtotalEl.textContent = formatCurrency(discountedTotal());
  updatePreview();
}

function formValue(selector) {
  return document.querySelector(selector).value.trim();
}

function buildOrderMessage() {
  const note = formValue("#orderNote") || "無";
  const lines = [
    "【不開玩笑炒泡麵｜線上訂單】",
    "",
    "取餐方式：自取",
    "",
    "餐點：",
  ];

  if (state.cart.length === 0) {
    lines.push("尚未選擇餐點");
  } else {
    state.cart.forEach((entry, index) => {
      lines.push(`${index + 1}. ${entry.item.name} × ${entry.quantity} = ${formatCurrency(cartEntryTotal(entry))}`);
      if (entry.options.length) {
        lines.push(`  客製選項：${entry.options.map((option) => option.name).join("、")}`);
      }
    });
  }

  lines.push(
    "",
    `備註：${note}`,
    "",
    `原價：${formatCurrency(subtotal())}`,
    `自取八折：${formatCurrency(discountedTotal())}`
  );

  return lines.join("\n");
}

function updatePreview() {
  previewEl.textContent = buildOrderMessage();
}

function makeLineUrl(message) {
  const target = state.lineTarget.trim() || officialLineDefault;
  return `https://line.me/R/oaMessage/${encodeURIComponent(target)}/?${encodeURIComponent(message)}`;
}

function validateBeforeSend() {
  if (state.cart.length === 0) {
    alert("請先選擇至少一項餐點。");
    return false;
  }

  return true;
}

function openItemDialog(itemId) {
  const item = menuItems.find((menuItem) => menuItem.id === itemId);
  const options = optionsForItem(item);
  const maxOptions = maxOptionsForItem(item);
  state.activeItemId = itemId;

  itemDialogTitle.textContent = item.name;
  itemDialogDescription.textContent = item.description;
  itemDialogBasePrice.textContent = formatCurrency(item.price);
  itemQuantity.value = "1";
  optionCount.textContent = options.length ? `最多可選擇 ${maxOptions} 個項目` : "此品項無客製選項";
  optionList.innerHTML = options
    .map(
      (option) => `
        <label class="option-row">
          <span>
            <strong>${option.name}</strong>
            <small>${option.price > 0 ? `+${formatCurrency(option.price)}` : "免費"}</small>
          </span>
          <input type="checkbox" value="${option.id}">
        </label>
      `
    )
    .join("");
  updateAddItemButton();
  itemDialog.showModal();
  document.body.classList.add("modal-open");
}

function updateAddItemButton() {
  const item = menuItems.find((menuItem) => menuItem.id === state.activeItemId);
  if (!item) return;
  const quantity = Number(itemQuantity.value) || 1;
  const total = (item.price + optionTotal(selectedOptions())) * quantity;
  addItemButton.textContent = `加入訂單 ${formatCurrency(total)}`;
}

function addActiveItemToCart() {
  const item = menuItems.find((menuItem) => menuItem.id === state.activeItemId);
  const quantity = Math.max(1, Number(itemQuantity.value) || 1);
  state.cart.push({
    id: `entry-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    item,
    options: selectedOptions(),
    quantity,
  });
  itemDialog.close();
  renderMenu();
  renderCart();
}

function removeLastItem(itemId) {
  const index = state.cart.map((entry) => entry.item.id).lastIndexOf(itemId);
  if (index >= 0) {
    state.cart.splice(index, 1);
    renderMenu();
    renderCart();
  }
}

menuGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const { action, id } = button.dataset;
  if (action === "customize") openItemDialog(id);
  if (action === "decrease") removeLastItem(id);
});

cartList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-remove]");
  if (!button) return;
  state.cart = state.cart.filter((entry) => entry.id !== button.dataset.remove);
  renderMenu();
  renderCart();
});

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    document.querySelectorAll(".tab-button").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    renderMenu();
  });
});

optionList.addEventListener("change", () => {
  const item = menuItems.find((menuItem) => menuItem.id === state.activeItemId);
  const maxOptions = maxOptionsForItem(item);
  const checked = optionList.querySelectorAll("input:checked");
  if (checked.length > maxOptions) {
    checked[checked.length - 1].checked = false;
    alert(`最多可選擇 ${maxOptions} 個客製選項。`);
  }
  updateAddItemButton();
});

itemQuantity.addEventListener("input", updateAddItemButton);
document.querySelector("#addItemButton").addEventListener("click", addActiveItemToCart);
itemDialog.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
});

form.addEventListener("input", updatePreview);
form.addEventListener("change", updatePreview);

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!validateBeforeSend()) return;

  window.location.href = makeLineUrl(buildOrderMessage());
});

document.querySelector("#settingsButton")?.addEventListener("click", () => {
  lineTargetInput.value = state.lineTarget;
  settingsDialog.showModal();
});

document.querySelector("#saveLineButton").addEventListener("click", () => {
  const value = lineTargetInput.value.trim() || officialLineDefault;
  state.lineTarget = value;
  localStorage.setItem("officialLineTarget", value);
  settingsDialog.close();
  updatePreview();
});

renderMenu();
renderCart();
