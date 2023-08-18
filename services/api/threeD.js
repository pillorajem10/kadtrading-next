import { GET_BLOB } from '../request';

import targetEnvironment from '../../constant/environmentConfig';

const fetchZipFile = async (payload) => {
  const { productId, variantId } = payload;
  const env = targetEnvironment[window.location.origin];

  return GET_BLOB(
    `${window.location.origin}/3d-api/products/${productId}/${variantId}-W-M?env=${env}`,
  );
};

export default fetchZipFile;
