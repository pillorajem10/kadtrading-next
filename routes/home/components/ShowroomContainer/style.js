const styles = (theme) => ({
  showroomContainer: {
    position: "relative",
    height: 476,
    overflow: "hidden",

    [theme.breakpoints.only("sm")]: {
      height: 350,
    },

    [theme.breakpoints.only("xs")]: {
      height: 276,
    },
  },
  viewOtherRoomContainer: {
    position: "absolute",
    width: 476,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "8px 0",
    textAlign: "center",
    right: -218,
    top: 218,
    transform: "rotate(90deg)",
    cursor: "pointer",
    transition: ".5s",

    [theme.breakpoints.only("sm")]: {
      width: 350,
      right: -154,
      top: 154,
    },

    [theme.breakpoints.only("xs")]: {
      width: 276,
      right: -118,
      top: 118,
    },
  },
  closeViewOtherRoomContainer: {
    transition: ".5s",
    right: -258,
    position: "absolute",
    width: 476,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "8px 0",
    textAlign: "center",
    top: 218,
    transform: "rotate(90deg)",
    cursor: "pointer",

    [theme.breakpoints.only("sm")]: {
      width: 350,
      right: -194,
      top: 154,
    },

    [theme.breakpoints.only("xs")]: {
      width: 276,
      right: -158,
      top: 118,
    },
  },
  viewOtherRoomText: {
    color: "white",
    letterSpacing: 1.25,
  },
  showroomSlidesContainer: {
    position: "absolute",
    padding: 12,
    top: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: 160,
    height: "100%",
    overflowY: "auto",
    transition: ".5s",
    zIndex: 2,

    [theme.breakpoints.only("sm")]: {
      width: 100,
    },

    [theme.breakpoints.only("xs")]: {
      width: 85,
      padding: 5,
    },
  },
  closeShowroomSlidesContainer: {
    position: "absolute",
    padding: 12,
    top: 0,
    right: -160,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "100%",
    overflowY: "auto",
    transition: ".5s",
    width: 160,

    [theme.breakpoints.only("sm")]: {
      right: -100,
      width: 100,
    },

    [theme.breakpoints.only("xs")]: {
      right: -85,
      width: 85,
      padding: 5,
    },
  },
  showroomSlidesImage: {
    width: "100%",
    height: 100,
    marginBottom: 8,
    border: "1px solid white",

    [theme.breakpoints.only("sm")]: {
      height: 60,
    },

    [theme.breakpoints.only("xs")]: {
      height: 55,
      marginBottom: 0,
    },
  },
  showroomOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage:
      "linear-gradient(to bottom, rgba(202, 202, 202, 0), #000000)",
    zIndex: 1,
    transition: ".5s ease",
    opacity: 1,
  },
  closeShowroomOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage:
      "linear-gradient(to bottom, rgba(202, 202, 202, 0), #000000)",
    zIndex: -1,
    transition: ".5s ease",
    opacity: 0,
  },
});

export default styles;
