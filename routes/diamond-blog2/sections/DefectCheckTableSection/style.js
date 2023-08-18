const styles = (theme) => ({
  articleSecondHeader: {
    fontSize: 35.6,
    letterSpacing: 0.25,
    color: "rgba(0, 0, 0, 0.87)",

    [theme.breakpoints.only("xs")]: {
      fontSize: 25.2,
      letterSpacing: "normal",
    },
  },
  defectCheckTitle: {
    fontSize: 16.8,
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: "rgba(0, 0, 0, 0.87)",
    margin: "16px 0 70px",

    [theme.breakpoints.only("xs")]: {
      margin: "14px 0 35px",
    },
  },
  defectCheckTable: {
    borderCollapse: "collapse",
    width: "100%",
    marginBottom: 115,

    "& th": {
      border: "1px solid #efefef",
      textAlign: "left",
      padding: "10px 25px",
      backgroundColor: "#efefef",
      fontSize: 16.8,
      fontWeight: "bold",
      lineHeight: 1.67,
      letterSpacing: 0.5,
      color: "rgba(0, 0, 0, 0.87)",
    },

    "& td": {
      border: "1px solid #efefef",
      textAlign: "left",
      padding: "10px 25px",
      fontSize: 16.8,
      lineHeight: 1.67,
      letterSpacing: 0.5,
      color: "rgba(0, 0, 0, 0.87)",
    },

    "& td:first-child": {
      width: 350,
    },

    "& tbody > tr:nth-child(even)": {
      backgroundColor: "#fafafa",
    },

    [theme.breakpoints.only("sm")]: {
      "& td:first-child": {
        width: 250,
      },
    },
  },
  defectCheckListHeader: {
    backgroundColor: "#efefef",
    border: "1px solid #efefef",
    padding: "14px 26px",
  },
  headerText: {
    fontSize: 16.8,
    fontWeight: "bold",
    lineHeight: 1.67,
    letterSpacing: 0.5,
    color: "rgba(0, 0, 0, 0.87)",
  },
  defectCheckList: {
    borderRight: "1px solid #efefef",
    borderLeft: "1px solid #efefef",
    padding: "14px 26px",

    "&:nth-child(odd)": {
      backgroundColor: "#fafafa",
      borderBottom: "1px solid #efefef",
      borderTop: "1px solid #efefef",
    },

    "& ul": {
      margin: 0,
      padding: "0 0 0 16px",
    },

    "& p": {
      fontSize: 16.8,
      lineHeight: 1.19,
      letterSpacing: 0.5,
      color: "rgba(0, 0, 0, 0.87)",
      marginBottom: 8,
    },
  },
});

export default styles;
