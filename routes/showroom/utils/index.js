// Picture
import wantaiA from 'public/assets/images/showroom/shi.jpg';
import wantaiB from 'public/assets/images/showroom/shi.jpg';
import wtpA from 'public/assets/images/showroom/shi.jpg';
import egss from 'public/assets/images/showroom/shi.jpg';

export const isProductSetValid = (query) => {
  const existing = productSet[query];
  return (existing && existing !== null);
};

export const getProductSet = (query) => {
  return {};
};
