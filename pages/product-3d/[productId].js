import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from 'axios';

// MUI Stuff
import { withStyles } from '@material-ui/core';

// Redux
import { useDispatch } from 'react-redux';
import { product } from 'redux/actions';

// Styling
import styles from 'routes/product-3d/components/ProductThreeDetail/style';

// Dynamic component
const ProductThreeDetail = dynamic(
  () => import('routes/product-3d/components/ProductThreeDetail'),
  {
    ssr: false,
  },
);

const ProductThreeD = ({ classes, productId, meta }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(product.getProductDetailsById(productId));

    return () => {
      dispatch(product.clearProduct());
    };
  }, [dispatch, productId]);

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
          content={`https://www.bangjeep-enterprise.com${router.asPath}`}
          key="og:url"
        />
      </Head>

      <ProductThreeDetail />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { productId } = params;

  const env = process.env.NODE_ENV;

  let origin = '';

  switch (env) {
    case 'dev':
      origin = 'https://bangjeep-enterprise.com';
      break;
    case 'uat':
      origin = 'https://bangjeep-enterprise.com';
      break;
    case 'qa':
      origin = 'https://bangjeep-enterprise.com';
      break;
    case 'prod':
      origin = 'https://www.bangjeep-enterprise.com';
      break;
    default:
      origin = 'https://bangjeep-enterprise.com';
  }

  const result = await axios.get(`${origin}/product-api-v2/products/${productId}`);

  let meta = {
    title: '',
    description: '',
    image: '',
  };

  const { data, success } = result.data;

  if (success) {
    const image = data.variants[0].images[0];

    meta = {
      title: data.name,
      description: data.description,
      image,
    };
  }

  return { props: { productId, meta } };
};

export default withStyles(styles)(ProductThreeD);
