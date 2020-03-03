import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore.js';
import TakeshifyGIF from '../images/introduceTakeshifyGIF.gif'
import useStyles from './Styles.js';

export default function Developments() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            {/* <div></div> */}
            <ExpansionPanel expanded={expanded === 'panel'} onChange={handleChange('panel')} className={classes.panel}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon className={classes.ExpandMoreIcon} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                // style={{ backgroundColor: '#212121' }}
                >
                    <Typography className={classes.heading}> Developments </Typography>
                    <Typography className={classes.secondaryHeading}> What I've developed </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.detail}>
                    <Typography className={classes.detail}>
                        <span className={classes.article}>
                            <a href='https://takeshify.herokuapp.com/'>Takeshify</a>:
                        </span> <br />
                        First app I developed. <br /> Go check this app out!<br />
                        <img src={TakeshifyGIF} className={classes.appimg} /> <br />
                        You can check popularity, followers of your favorite artists on Spotify. <br />
                        Using Spotify API, Ruby on Rails, Bootstrap.<br />

                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}
