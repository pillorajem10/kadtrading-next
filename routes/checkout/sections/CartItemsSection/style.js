const styles = (theme) => ({
  cartItems: {
    [theme.breakpoints.only("xs")]: {
      padding: 0,
    },
  },
  cartQuantity: {
    padding: "35px 0",

    [theme.breakpoints.only("xs")]: {
      padding: "25px 24px",
    },
  },
  cartQuantityText: {
    fontSize: 16.8,
    fontWeight: "bold",
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: "rgba(0, 0, 0, 0.87)",
  },
});

export default styles;
