const stripeTargetEnv = {
  'https://hapichair.com': process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY,
  'https://www.hapichair.com': process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY,
  'http://localhost:3002': process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY,
};

export default stripeTargetEnv;
