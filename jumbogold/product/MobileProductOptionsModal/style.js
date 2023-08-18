const styles = () => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalWrapper: {
    borderRadius: 5,
    boxShadow: "0 3px 4px 0 rgba(167, 167, 167, 0.5), 0 2px 10px 0 #000000",
    backgroundColor: "#ffffff",
    margin: "0 18px",
    outline: "none",
    width: "100%",
    padding: "17px 15px",
  },
  productOptionItem: {
    padding: "12px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "initial",
  },
  productOptionItemSelected: {
    padding: "12px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "initial",

    "& p": {
      fontWeight: "bold",
    },
  },
  productOptionItemText: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 1.15,
    color: "rgba(0, 0, 0, 0.87)",
    marginBottom: 7,
  },
  productOptionPriceWrapper: {
    display: "flex",
  },
  productOptionItemPrice: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 1.29,
    letterSpacing: 0.42,
    color: "rgba(0, 0, 0, 0.87)",
    marginRight: 5,
  },
  productOptionItemOriginalPrice: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 1.29,
    letterSpacing: 0.42,
    color: "rgba(0, 0, 0, 0.38)",
    textDecoration: "line-through",
  },
  optionRadioButton: {
    padding: "0 !important",
    height: 20,
  },
});

export default styles;
