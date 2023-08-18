import React, { useState, useEffect } from 'react';

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

// constants
import { arrayOfVarieties } from 'constant'

// picture
import expandIcon from 'public/assets/icons/expand.png';

// styling
import styles from './style';

const FilterVarieties = ({ classes, gatherFilterValues, clearFilters, label, triggerError }) => {
  const {
    listing: { filter, params },
  } = useSelector((state) => state);

  const [varietiesArray, setVarietiesArray] = useState(undefined);

  const [checkSapphire, setCheckSapphire] = useState(false);
  const [checkRuby, setCheckRuby] = useState(false);
  const [checkEmerald, setCheckEmerald] = useState(false);
  const [checkTsavorite, setCheckTsavorite] = useState(false);
  const [checkSpinel, setCheckSpinel] = useState(false);
  const [checkAlexandrite, setCheckAlexandrite] = useState(false);
  const [checkTourmaline, setCheckTourmaline] = useState(false);
  const [checkAquamarine, setCheckAquamarine] = useState(false);

  const [showTextField, setShowTextField] = useState(false);
  const [otherGemStones, setOtherGemstones] = useState('');

  const handleVarieties = (value) => {
    if (!varietiesArray.includes(value)) {
      setVarietiesArray([...varietiesArray, value]);
    } else {
      const filtered = varietiesArray.filter(vr => value !== vr);
      setVarietiesArray(filtered);
    }
  };

  const handleShowTextField = () => {
    setOtherGemstones(!showTextField ? otherGemStones : '');
    setShowTextField(!showTextField);
  };

  useEffect(() => {
    let payload = { varieties: undefined };

    if (varietiesArray) {
      setCheckSapphire(varietiesArray.includes("Sapphire"));
      setCheckRuby(varietiesArray.includes("Ruby"));
      setCheckEmerald(varietiesArray.includes("Emerald"));
      setCheckTsavorite(varietiesArray.includes("Tsavorite"));
      setCheckSpinel(varietiesArray.includes("Spinel"));
      setCheckAlexandrite(varietiesArray.includes("Alexandrite"));
      setCheckTourmaline(varietiesArray.includes("Tourmaline"));
      setCheckAquamarine(varietiesArray.includes("Aquamarine"));

      if (varietiesArray.length > 0 && otherGemStones !== '') {
        payload = { varieties: `${varietiesArray.join(',')},${otherGemStones}` };
      }

      if (varietiesArray.length > 0 && otherGemStones === '') {
        payload = { varieties: varietiesArray.join(',') };
      }

      if (varietiesArray.length === 0 && otherGemStones !== '') {
        payload = { varieties: otherGemStones };
      }
      gatherFilterValues(payload);
    }
 }, [varietiesArray, otherGemStones])

  useEffect(() => {
    if(params.varieties) {
      if (arrayOfVarieties.indexOf(decodeURIComponent(params.varieties).split(',').slice(-1)[0]) <= -1) {
        setVarietiesArray(
          decodeURIComponent(params.varieties).split(',').slice(
            0,
            decodeURIComponent(params.varieties).split(',').indexOf(decodeURIComponent(params.varieties).split(',').slice(-1)[0])
          )
        )
        setOtherGemstones(decodeURIComponent(params.varieties).split(',').slice(-1)[0])
        setShowTextField(true)
      } else {
        setVarietiesArray(decodeURIComponent(params.varieties).split(','))
      }

    } else {
      setVarietiesArray([]);
    }
  }, []);

  useEffect(() => {
    if (clearFilters) {
      setVarietiesArray([]);
      setOtherGemstones('');
      setShowTextField(false);
    }
  }, [clearFilters]);

  return (
    <Accordion
    className={classes.layout}
    defaultExpanded={filter.primaryColour !== null && filter.saturation !== null}
    disabled={filter.primaryColour === null && filter.saturation === null}
  >
    <AccordionSummary
      className={classes.headerWrapper}
      expandIcon={<img className={classes.expandIcon} src={expandIcon} alt="" />}
      aria-controls="toggle-panel-content"
      id="panel-header"
    >
      <Typography className={classes.headerText}>Varieties</Typography>
    </AccordionSummary>

    <AccordionDetails className={classes.content}>
      <div className={classes.pairs}>
          <div className={classes.listItem}>
            <Checkbox
              checked={checkSapphire}
              onChange={() => handleVarieties("Sapphire")}
              className={classes.checkbox}
              color="primary"
            />
            <Typography
              className={classes.listItemText}
              style={{
                color: varietiesArray?.includes("Sapphire")
                  ? '#000000'
                  : 'rgba(0, 0, 0, 0.6)',
              }}
            >
              Sapphire
            </Typography>
          </div>

          <div className={classes.listItem2}>
          <Checkbox
            checked={checkRuby}
            onChange={() => handleVarieties("Ruby")}
            className={classes.checkbox}
            color="primary"
          />
          <Typography
            className={classes.listItemText}
            style={{
              color: varietiesArray?.includes("Ruby")
                ? '#000000'
                : 'rgba(0, 0, 0, 0.6)',
            }}
          >
            Ruby
          </Typography>
        </div>
      </div>

      <div className={classes.pairs}>
        <div className={classes.listItem}>
          <Checkbox
            checked={checkEmerald}
            onChange={() => handleVarieties("Emerald")}
            className={classes.checkbox}
            color="primary"
          />
          <Typography
            className={classes.listItemText}
            style={{
              color: varietiesArray?.includes("Emerald")
                ? '#000000'
                : 'rgba(0, 0, 0, 0.6)',
            }}
          >
            Emerald
          </Typography>
        </div>

        <div className={classes.listItem2}>
          <Checkbox
            checked={checkTsavorite}
            onChange={() => handleVarieties("Tsavorite")}
            className={classes.checkbox}
            color="primary"
          />
          <Typography
            className={classes.listItemText}
            style={{
              color: varietiesArray?.includes("Tsavorite")
                ? '#000000'
                : 'rgba(0, 0, 0, 0.6)',
            }}
          >
            Tsavorite
          </Typography>
        </div>
      </div>


      <div className={classes.pairs}>
      <div className={classes.listItem}>
          <Checkbox
            checked={checkSpinel}
            onChange={() => handleVarieties("Spinel")}
            className={classes.checkbox}
            color="primary"
          />
          <Typography
            className={classes.listItemText}
            style={{
              color: varietiesArray?.includes("Spinel")
                ? '#000000'
                : 'rgba(0, 0, 0, 0.6)',
            }}
          >
            Spinel
          </Typography>
        </div>

        <div className={classes.listItem2}>
          <Checkbox
            checked={checkAlexandrite}
            onChange={() => handleVarieties("Alexandrite")}
            className={classes.checkbox}
            color="primary"
          />
          <Typography
            className={classes.listItemText}
            style={{
              color: varietiesArray?.includes("Alexandrite")
                ? '#000000'
                : 'rgba(0, 0, 0, 0.6)',
            }}
          >
            Alexandrite
          </Typography>
        </div>
      </div>


      <div className={classes.pairs}>
      <div className={classes.listItem}>
          <Checkbox
            checked={checkTourmaline}
            onChange={() => handleVarieties("Tourmaline")}
            className={classes.checkbox}
            color="primary"
          />
          <Typography
            className={classes.listItemText}
            style={{
              color: varietiesArray?.includes("Tourmaline")
                ? '#000000'
                : 'rgba(0, 0, 0, 0.6)',
            }}
          >
            Tourmaline
          </Typography>
        </div>

        <div className={classes.listItem}>
          <Checkbox
            checked={checkAquamarine}
            onChange={() => handleVarieties("Aquamarine")}
            className={classes.checkbox}
            color="primary"
          />
          <Typography
            className={classes.listItemText}
            style={{
              color: varietiesArray?.includes("Aquamarine")
                ? '#000000'
                : 'rgba(0, 0, 0, 0.6)',
            }}
          >
            Aquamarine
          </Typography>
        </div>
      </div>


      <div className={classes.pairs}>
        <div className={classes.listItem}>
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
            Other Gem
          </Typography>
        </div>
      </div>

      <form
        onKeyDown={(e) => e.stopPropagation()}
        hidden={!showTextField}
      >
        <div>
          <TextField
            className={classes.textField}
            variant="outlined"
            value={otherGemStones}
            onChange={(e) => setOtherGemstones(e.target.value)}
            size="small"
            placeholder="Input Other Varieties"
            />
        </div>
      </form>
    </AccordionDetails>
  </Accordion>    
  );
};

export default withStyles(styles)(FilterVarieties);
