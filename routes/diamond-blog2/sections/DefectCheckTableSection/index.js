import React, { Fragment } from 'react';

// MUI stuff
import { withStyles, Typography, Hidden } from '@material-ui/core';

// Constant
import { defectCheckList } from '../../utils/const';

// Styling
import styles from './style';

const DefectCheckTableSection = ({ classes }) => {
  return (
    <Fragment>
      <Typography className={classes.articleSecondHeader}>
        Important things to bring to your BTO defect check
      </Typography>

      <Typography className={classes.defectCheckTitle}>
        Before beginning the defect checks though, you ought to be prepared for the task that lies
        ahead. Here’s a suggested list of items:
      </Typography>

      <Hidden xsDown>
        <table className={classes.defectCheckTable}>
          <thead>
            <tr>
              <th>Item to bring</th>
              <th>Purpose</th>
            </tr>
          </thead>

          <tbody>
            {defectCheckList.map(({ title, value }, index) => (
              <tr key={index}>
                <td>{title}</td>
                <td dangerouslySetInnerHTML={{ __html: value }} />
              </tr>
            ))}
          </tbody>
        </table>
      </Hidden>

      <Hidden smUp>
        <Fragment>
          <div className={classes.defectCheckListHeader}>
            <Typography className={classes.headerText}>
              Item to bring / <br /> Purpose
            </Typography>
          </div>

          {defectCheckList.map(({ title, value }, index) => (
            <div className={classes.defectCheckList} key={index}>
              <Typography>{title}</Typography>

              <ul>
                <li>
                  <Typography dangerouslySetInnerHTML={{ __html: value }} />
                </li>
              </ul>
            </div>
          ))}
        </Fragment>
      </Hidden>
    </Fragment>
  );
};

export default withStyles(styles)(DefectCheckTableSection);
