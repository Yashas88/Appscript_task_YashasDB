import { useState, useMemo } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SortBar from "../components/SortBar";
import Filters from "../components/Filters";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import { fetchProducts, getCategories } from "../utils/api";

export default function Home({ products, categories }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState("recommended");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(true);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredAndSorted = useMemo(() => {
    let result = [...products];

    // Filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Sort
    if (sortOption === "price-low") {
      result.sort((a, b) => (a?.price ?? 0) - (b?.price ?? 0));
    } else if (sortOption === "price-high") {
      result.sort((a, b) => (b?.price ?? 0) - (a?.price ?? 0));
    } else if (sortOption === "newest") {
      result.sort((a, b) => (b?.id ?? 0) - (a?.id ?? 0));
    } else if (sortOption === "popular") {
      result.sort((a, b) => (b?.rating?.rate ?? 0) - (a?.rating?.rate ?? 0));
    }

    return result;
  }, [products, selectedCategories, sortOption]);

  return (
    <>
      <Head>
        <title>Appscrip Store</title>
        <meta
          name="description"
          content="Explore high-quality products including clothing, jewelry, and electronics at the best prices. Shop now from Appscrip Store."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph tags for social SEO */}
        <meta property="og:title" content="Discover Our Products" />
        <meta property="og:description" content="Browse premium products online." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://appscrip-store.com" />
        <link rel="icon" href="/favicon.ico" />
        {/* Schema.org ItemList structured data for products */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Product Listing",
              itemListElement: products.map((product, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: product.title,
                image: product.image,
                offers: {
                  "@type": "Offer",
                  price: product.price,
                  priceCurrency: "INR"
                }
              }))
            })
          }}
        />
      </Head>

      <div className="page-wrapper">
        <Header />
        <Navbar />

        <main className="main-content">
          <h1 style={{position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden'}}>DISCOVER OUR PRODUCTS</h1>
          <Hero />


          <SortBar
            itemCount={filteredAndSorted.length}
            sortOption={sortOption}
            onSortChange={setSortOption}
            showFilters={showFilters}
            onToggleShowFilters={() => setShowFilters((prev) => !prev)}
            filtersOpen={filtersOpen}
            onToggleFilters={() => setFiltersOpen((prev) => !prev)}
          />

          <div className={`plp-container${!showFilters ? " no-filters" : ""}`}>
            <aside className={`plp-sidebar${showFilters ? " visible" : ""}${filtersOpen ? " open" : ""}`}>
              <Filters
                categories={categories}
                selectedCategories={selectedCategories}
                onToggleCategory={toggleCategory}
              />
            </aside>

            <section className="plp-products">
              <ProductGrid products={filteredAndSorted} />
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const products = await fetchProducts();
    const categories = getCategories(products);
    return { props: { products, categories } };
  } catch {
    return { props: { products: [], categories: [] } };
  }
}
