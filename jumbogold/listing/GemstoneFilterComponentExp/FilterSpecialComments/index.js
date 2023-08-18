import React, { useEffect, useState } from 'react';

// MUI Stuff
import {
  withStyles,
  Checkbox,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  Typography,
} from '@material-ui/core';

// redux
import { useSelector } from 'react-redux';

// picture
import expandIcon from 'public/assets/icons/expand.png';

// styling
import styles from './style';

// utils
import { arrayOfSpecialComments } from 'constant';

const FilterStyles = ({ classes, gatherFilterValues, clearFilters }) => {
  const {
    listing: { params },
  } = useSelector((state) => state);

  const [specialCommentsArray, setSpecialCommentsArray] = useState(undefined);

  const [checkRoyalBlue, setCheckRoyalBlue] = useState(false);
  const [checkCornflowerBlue, setCheckCornflowerBlue] = useState(false);
  const [checkPadparadscha, setCheckPadparadscha] = useState(false);
  const [checkVivid, setCheckVivid] = useState(false);
  const [checkPigeonBlood, setCheckPigeonBlood] = useState(false);
  const [checkPeach, setCheckPeach] = useState(false);
  const [checkTeal, setCheckTeal] = useState(false);
  const [checkBiColour, setCheckBiColour] = useState(false);
  const [checkColourChangeGem, setCheckColourChangeGem] = useState(false);

  const [showTextField, setShowTextField] = useState(false);
  const [otherGemStones, setOtherGemstones] = useState('');

  const handleSpecialComments = (value) => {
    if (!specialCommentsArray.includes(value)) {
      setSpecialCommentsArray([...specialCommentsArray, value]);
    } else {
      const filtered = specialCommentsArray.filter(colour => value !== colour);
      setSpecialCommentsArray(filtered);
    }
  };

  const handleShowTextField = () => {
    if (showTextField === false) {
      setShowTextField(true);
    } else {
      setOtherGemstones('');
      setShowTextField(false);
    }
  };

  useEffect(() => {
   if (specialCommentsArray) {
     if (specialCommentsArray.includes("Royal Blue")) {
       setCheckRoyalBlue(true)
     } else {
       setCheckRoyalBlue(false)
     }


     if (specialCommentsArray.includes("Cornflower Blue")) {
       setCheckCornflowerBlue(true)
     } else {
       setCheckCornflowerBlue(false)
     }


     if (specialCommentsArray.includes("Padparadscha")) {
       setCheckPadparadscha(true)
     } else {
       setCheckPadparadscha(false)
     }


     if (specialCommentsArray.includes("Vivid")) {
       setCheckVivid(true)
     } else {
       setCheckVivid(false)
     }


     if (specialCommentsArray.includes("Pigeon Blood")) {
       setCheckPigeonBlood(true)
     } else {
       setCheckPigeonBlood(false)
     }


     if (specialCommentsArray.includes("Peach")) {
       setCheckPeach(true)
     } else {
       setCheckPeach(false)
     }


     if (specialCommentsArray.includes("Teal")) {
       setCheckTeal(true)
     } else {
       setCheckTeal(false)
     }


     if (specialCommentsArray.includes("Bi-colour")) {
       setCheckBiColour(true)
     } else {
       setCheckBiColour(false)
     }


     if (specialCommentsArray.includes("Colour Change")) {
       setCheckColourChangeGem(true)
     } else {
       setCheckColourChangeGem(false)
     }


     if(specialCommentsArray.length < 1 && otherGemStones === '') {
       const values = { specialComments: undefined }
       gatherFilterValues(values);
     } else if (specialCommentsArray.length < 1 && otherGemStones !== '') {
       const values = {
         specialComments: otherGemStones
       }
       gatherFilterValues(values);
     } else {
       if (otherGemStones === '') {
         const values = {
           specialComments: specialCommentsArray.join(',')
         }
         gatherFilterValues(values);
       } else {
         const values = {
           specialComments: `${specialCommentsArray.join(',')},${otherGemStones}`
         }
         gatherFilterValues(values);
       }
     }
   }
 }, [specialCommentsArray, otherGemStones])

  useEffect(() => {
    if(params.specialComments) {
      if (arrayOfSpecialComments.indexOf(decodeURIComponent(params.specialComments).split(',').slice(-1)[0]) <= -1) {
        setSpecialCommentsArray(
          decodeURIComponent(params.specialComments).split(',').slice(
            0,
            decodeURIComponent(params.specialComments).split(',').indexOf(decodeURIComponent(params.specialComments).split(',').slice(-1)[0])
          )
        )
        setOtherGemstones(decodeURIComponent(params.specialComments).split(',').slice(-1)[0])
        setShowTextField(true)
      } else {
        setSpecialCommentsArray(decodeURIComponent(params.specialComments).split(','))
      }

    } else {
      setSpecialCommentsArray([]);
    }
  }, []);

  useEffect(() => {
    if (clearFilters !== undefined) {
      setSpecialCommentsArray([]);
      setOtherGemstones('');
      setShowTextField(false);
    }
  }, [clearFilters]);

  return (
    <Accordion
      className={classes.layout}
    >
      <AccordionSummary
        className={classes.headerWrapper}
        expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
        aria-controls="toggle-panel-content"
        id="panel-header"
      >
        <Typography className={classes.headerText}>Special Comments</Typography>
      </AccordionSummary>

      <AccordionDetails className={classes.content}>
        <div className={classes.pairs}>
          <div className={classes.listItem}>
            <Checkbox
              checked={checkRoyalBlue}
              onChange={() => handleSpecialComments("Royal Blue")}
              className={classes.checkbox}
              color="primary"
            />
            <Typography
              className={classes.listItemText}
              style={{
                color: specialCommentsArray?.includes("Royal Blue")
                  ? '#000000'
                  : 'rgba(0, 0, 0, 0.6)',
              }}
            >
              Royal Blue
            </Typography>
          </div>

          <div className={classes.listItem2}>
            <Checkbox
              checked={checkCornflowerBlue}
              onChange={() => handleSpecialComments("Cornflower Blue")}
              className={classes.checkbox}
              color="primary"
            />
            <Typography
              className={classes.listItemText}
              style={{
                color: specialCommentsArray?.includes("Cornflower Blue")
                  ? '#000000'
                  : 'rgba(0, 0, 0, 0.6)',
              }}
            >
              Cornflower Blue
            </Typography>
          </div>
        </div>

        <div className={classes.pairs}>
          <div className={classes.listItem}>
            <Checkbox
              checked={checkPadparadscha}
              onChange={() => handleSpecialComments("Padparadscha")}
              className={classes.checkbox}
              color="primary"
            />
            <Typography
              className={classes.listItemText}
              style={{
                color: specialCommentsArray?.includes("Padparadscha")
                  ? '#000000'
                  : 'rgba(0, 0, 0, 0.6)',
              }}
            >
              Padparadscha
            </Typography>
          </div>

          <div className={classes.listItem2}>
            <Checkbox
              checked={checkVivid}
              onChange={() => handleSpecialComments("Vivid")}
              className={classes.checkbox}
              color="primary"
            />
            <Typography
              className={classes.listItemText}
              style={{
                color: specialCommentsArray?.includes("Vivid")
                  ? '#000000'
                  : 'rgba(0, 0, 0, 0.6)',
              }}
            >
              Vivid
            </Typography>
          </div>
        </div>

        <div className={classes.pairs}>
          <div className={classes.listItem}>
            <Checkbox
              checked={checkPigeonBlood}
              onChange={() => handleSpecialComments("Pigeon Blood")}
              className={classes.checkbox}
              color="primary"
            />
            <Typography
              className={classes.listItemText}
              style={{
                color: specialCommentsArray?.includes("Pigeon Blood")
                  ? '#000000'
                  : 'rgba(0, 0, 0, 0.6)',
              }}
            >
              Pigeon Blood
            </Typography>
          </div>

          <div className={classes.listItem2}>
            <Checkbox
              checked={checkPeach}
              onChange={() => handleSpecialComments("Peach")}
              className={classes.checkbox}
              color="primary"
            />
            <Typography
              className={classes.listItemText}
              style={{
                color: specialCommentsArray?.includes("Peach")
                  ? '#000000'
                  : 'rgba(0, 0, 0, 0.6)',
              }}
            >
              Peach
            </Typography>
          </div>
        </div>

        <div className={classes.pairs}>
          <div className={classes.listItem}>
            <Checkbox
              checked={checkTeal}
              onChange={() => handleSpecialComments("Teal")}
              className={classes.checkbox}
              color="primary"
            />
            <Typography
              className={classes.listItemText}
              style={{
                color: specialCommentsArray?.includes("Teal")
                  ? '#000000'
                  : 'rgba(0, 0, 0, 0.6)',
              }}
            >
              Teal
            </Typography>
          </div>

          <div className={classes.listItem2}>
            <Checkbox
              checked={checkBiColour}
              onChange={() => handleSpecialComments("Bi-colour")}
              className={classes.checkbox}
              color="primary"
            />
            <Typography
              className={classes.listItemText}
              style={{
                color: specialCommentsArray?.includes("Bi-colour")
                  ? '#000000'
                  : 'rgba(0, 0, 0, 0.6)',
              }}
            >
              Bi-colour
            </Typography>
          </div>
        </div>

        <div className={classes.pairs}>
          <div className={classes.listItem}>
            <Checkbox
              checked={checkColourChangeGem}
              onChange={() => handleSpecialComments("Colour Change")}
              className={classes.checkbox}
              color="primary"
            />
            <Typography
              className={classes.listItemText}
              style={{
                color: specialCommentsArray?.includes("Colour Change")
                  ? '#000000'
                  : 'rgba(0, 0, 0, 0.6)',
              }}
            >
              Colour Change
            </Typography>
          </div>

          <div className={classes.listItem2}>
            <Checkbox
              checked={showTextField}
              onClick={handleShowTextField}
              className={classes.checkbox}
              color="primary"
            />
            <Typography
              className={classes.listItemText}
              style={{
                color: showTextField
                  ? '#000000'
                  : 'rgba(0, 0, 0, 0.6)',
              }}
            >
              Others
            </Typography>
          </div>
        </div>

        <form
          onKeyDown={(e) => e.stopPropagation()}
          hidden={!showTextField}
          className={classes.inputForm}
        >
          <div>
            <TextField
              className={classes.textField}
              variant="outlined"
              value={otherGemStones}
              onChange={(e) => setOtherGemstones(e.target.value)}
              size="small"
              placeholder="Input Other Special Comments"
             />
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default withStyles(styles)(FilterStyles);
