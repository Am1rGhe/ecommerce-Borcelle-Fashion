import styles from "./MegaMenu.module.css";

function MegaMenu({ category, isOpen, onClose }) {
  if (!isOpen) return null;

  // Menu data based on category
  const menuData = {
    Women: {
      shopBy: [
        "Gift Guide",
        "Made in Canada",
        "Travel Suits",
        "Co-ord Set",
        "Gift Card",
        "Special Offer",
        "Last Chance",
        "Sale",
      ],
      clothing: [
        "Dresses",
        "Tops & Blouses",
        "T-Shirts",
        "Sweaters & Cardigans",
        "Jeans",
        "Pants & Trousers",
        "Skirts",
        "Blazers & Jackets",
        "Outerwear",
        "Shop All Clothing",
      ],
      accessories: [
        "Bags & Handbags",
        "Belts",
        "Hats",
        "Scarves",
        "Jewelry",
        "Sunglasses",
        "Shoes",
        "Shop All Accessories",
      ],
      featured: [
        {
          name: "Classic White T-Shirt",
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300",
        },
        {
          name: "Summer Dress",
          image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300",
        },
      ],
    },
    Man: {
      shopBy: [
        "Gift Guide",
        "Made in Canada",
        "Travel Suits",
        "Co-ord Set",
        "Gift Card",
        "Special Offer",
        "Last Chance",
        "Sale",
      ],
      clothing: [
        "Shirts & Overshirts",
        "T-Shirts",
        "Sweaters & Cardigans",
        "Polos",
        "Jeans",
        "Pants",
        "Blazers & Vests",
        "Suits",
        "Outerwear",
        "Shop All Clothing",
      ],
      accessories: [
        "Belts & Suspenders",
        "Hats",
        "Scarves",
        "Bags & Wallets",
        "Ties & Bowties",
        "Sunglasses",
        "Underwear & Socks",
        "Shop All Accessories",
      ],
      featured: [
        {
          name: "Our Brand Select Knit cardigan with overshirt style",
          image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300",
        },
        {
          name: "Checked jacquard sweater",
          image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300",
        },
      ],
    },
  };

  const data = menuData[category] || menuData.Man;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.megaMenu}>
        <div className={styles.menuContent}>
          <div className={styles.menuColumn}>
            <h3 className={styles.columnTitle}>Shop by</h3>
            <ul className={styles.menuList}>
              {data.shopBy.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={item === "Sale" ? styles.saleItem : ""}
                    onClick={(e) => e.preventDefault()}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.menuColumn}>
            <h3 className={styles.columnTitle}>Clothing</h3>
            <ul className={styles.menuList}>
              {data.clothing.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={
                      item.includes("Shop All") ? styles.boldItem : ""
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.menuColumn}>
            <h3 className={styles.columnTitle}>Accessories</h3>
            <ul className={styles.menuList}>
              {data.accessories.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={
                      item.includes("Shop All") ? styles.boldItem : ""
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.menuColumn}>
            <h3 className={styles.columnTitle}>Our faves right now</h3>
            <div className={styles.featuredProducts}>
              {data.featured.map((product, index) => (
                <div key={index} className={styles.featuredProduct}>
                  <img src={product.image} alt={product.name} />
                  <p>{product.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MegaMenu;

