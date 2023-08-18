const styles = (theme) => ({
  deliveryFormSection: {
    border: '1px solid black',
    borderRadius: 8    
  },
  textFieldRow: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: 40,
    justifyContent: "space-between",
    padding: '0px 15px',

    /*
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 60,
    */

    [theme.breakpoints.only("xs")]: {
      display: "block",
      marginBottom: 0,
    },
  },
  textFieldColumn: {
    width: "48%",

    [theme.breakpoints.only("xs")]: {
      width: "100%",
      marginBottom: 30,
    },
  },
  saveAddressLabel: {
    fontSize: 12.6,
    lineHeight: 1.27,
    letterSpacing: 0.4,
    color: "rgba(0, 0, 0, 0.6)",
  },
  textField: {
    width: "100%",
  },
  errorMessage: {
    fontSize: 12.6,
    lineHeight: 1.27,
    letterSpacing: 0.4,
    color: "#f44336",
    marginTop: 3,
  },
});

export default styles;
