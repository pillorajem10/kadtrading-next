import React, { useCallback, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from 'axios';

// MUI Stuff
import { withStyles, Hidden } from '@material-ui/core';

// Redux
import { useDispatch } from 'react-redux';
import { merchant, product } from 'redux/actions';

// components
import Breadcrumb from 'routes/product-info/components/Breadcrumb';

// sections
import ProductImageSection from 'routes/product-info/sections/ProductImageSection';
import ProductDetailsSection from 'routes/product-info/sections/ProductDetailsSection';
import MobileProductDetailsSection from 'routes/product-info/sections/MobileProductDetailsSection';
import ProductDescriptionSection from 'routes/product-info/sections/ProductDescriptionSection';
import ComboDealSection from 'routes/product-info/sections/ComboDealSection';
import RecommendationProductsSection from 'routes/product-info/sections/RecommendationProductsSection';
import MerchantRecommendProductsSection from 'routes/product-info/sections/MerchantRecommendProductsSection';
import MobileProductDescriptionSection from 'routes/product-info/sections/MobileProductDescriptionSection';

// styling
import styles from 'routes/product-info/style';

const ProductInfo = ({ classes, productId, meta, structuredData }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleGetProductDetails = useCallback(async () => {

    const res = await dispatch(product.getProductDetailsById(productId));
    const { success, data } = res;

    if (success) {      
      // dispatch(merchant.getMerchantProfileById(data.merchantId));
      dispatch(merchant.getMerchantProfileById('611f129bfc5c778b52d444ab'));      
    }

  }, [dispatch, productId]);

  const handleGetProductReviewSummary = useCallback(() => {
    dispatch(product.getProductReviewSummary(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    handleGetProductDetails();
    // handleGetProductReviewSummary();

    return () => {
      dispatch(product.clearProduct());
    };
  }, [dispatch, handleGetProductDetails, handleGetProductReviewSummary]);


  return (
    <div className={classes.layout}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} key="title" />
        <meta property="og:description" content={meta.description} key="description" />
        <meta property="og:image" content={meta.image} key="image" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://www.hapichair.com/${router.asPath}`}
          key="og:url"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* Desktop / IPad View */}
      <Hidden xsDown>
        <div className={classes.container}>
          {/* Breadcrumb <Breadcrumb /> */}
          

          <section className={classes.section}>
            {/* Product Carousel Section */}
            <ProductImageSection />

            {/* Product Details Section */}
            <ProductDetailsSection />
          </section>

          {/* Product Description Section */}
          <ProductDescriptionSection />

          {/* Combo Deal Section */}
          <ComboDealSection />

          {/* Featured Products Section */}
          <MerchantRecommendProductsSection />

          {/* Random Products Section */}
          <RecommendationProductsSection />
        </div>
      </Hidden>

      {/* Mobile View */}
      <Hidden smUp>
        <div className={classes.container}>
          {/* Breadcrumb           <Breadcrumb /> */}

        </div>

        {/* Product Details Section */}
        <MobileProductDetailsSection />

        <div className={classes.container}>
          {/* Product Description Section */}
          <MobileProductDescriptionSection />

          {/* Combo Deal Section */}
          <ComboDealSection />

          {/* Featured Products Section */}
          <MerchantRecommendProductsSection />

          {/* Random Products Section */}
          <RecommendationProductsSection />
        </div>
      </Hidden>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { productId } = params;
  const env = process.env.NODE_ENV;

  let origin = '';
  switch (env) {
    case 'development':
      origin = 'http://localhost:3007';
      break;
    case 'production':
      origin = 'https://hapichair.com/api-v1';
      break;
    default:
      origin = 'https://hapichair.com';
  }

  // get product details
  const productDetails = await axios.get(`${origin}/product-api-v2/global/${productId}`);
  
  const productData = productDetails.data.data.response;

  /*
  // get product review rating summary
  const productReview = await axios.get(
    `${origin}/product-api-v2/reviews/product-summary/${productId}`,
  );
  */

  const reviewData = []; // productReview.data;
  
  // initialiaze empty meta and structured data
  let meta = { title: '', description: '', image: '' };
  let structuredData = {};

  if (productData.header.error_code === 0) {
    const { diamond_id, sgdPrice,
      imagefile_url, shape, size, color, clarity, cut
    } = productData.body.diamond;

    const data = {
      ...productData.body.diamond,
      id: diamond_id,
      image: imagefile_url,        
      retailPrice: sgdPrice,
      originalPrice: sgdPrice,
      name: `${shape}, ${size} Ct., ${color}, ${clarity} ${cut} Cut Diamond`,
    };

    const image = data.image ?? null; // data.variants[0]?.images[0] || websiteImage;
    
    meta = {
      title: `${data.name} - Jumbo Gold and Diamonds, Singapore's online jewelry store`,
      description: data.name,
      image,
    };

    structuredData = {
      '@context': 'http://schema.org',
      '@type': 'Product',
      name: data.name,
      description: data.name,
      url: `https://hapichair.com/product/${productId}`,
      productID: productId,
      image,
      brand: cut || '',
      sku: 'SKU-1111',
      offers: {
        '@type': 'Offer',
        price: data.retailPrice.toString(),
        priceCurrency: 'SGD',
        availability: 'http://schema.org/InStock',
        seller: {
          '@context': 'http://schema.org',
          '@type': 'Organization',
          name: 'Jumbo Gold And Diamonds',
          url: `https://hapichair.com`,
        },
      },
    };
  }

  /*
  if (reviewData.success && reviewData.data.overallRating !== null) {
    const { overallRating, summary } = reviewData.data;
    const total = summary.map((item) => item.count).reduce((pre, cur) => pre + cur);

    structuredData = {
      ...structuredData,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: overallRating !== null ? overallRating.toString() : '0',
        reviewCount: total.toString(),
        bestRating: '5',
        worstRating: '1',
      },
    };
  }
  */

  return { props: { productId, meta, structuredData } };
};

export default withStyles(styles)(ProductInfo);
