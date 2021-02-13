import React from 'react';
import Fade from 'react-reveal/Fade';
import maleAvatar from '../../assets/images/male.svg';
import searchAvatar from '../../assets/images/search.svg';
import { useToasts } from 'react-toast-notifications';
import PropTypes from 'prop-types';
import './ResultsCard.scss';

const ResultsCard = ({ person }) => {
    const { addToast } = useToasts();

    const onCardClicked = () => {
        addToast(`${person.name} was selected!`, {
            appearance: 'success',
            autoDismiss: true,
        });
    };

    return (
        <Fade bottom cascase duration={1000}>
            <div className="resultscard" onClick={onCardClicked}>
                <div className="resultscard__container">
                    <div className="resultscard__inner-container">
                        <img
                            className="resultscard__avatar"
                            src={maleAvatar}
                            alt="avatar"
                        />
                        <div className="resultscard__info">
                            <p className="resultscard__name">
                                Name: {person.name}
                            </p>
                            <p className="resultscard__email">
                                Email: {person.email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

ResultsCard.propTypes = {
    person: PropTypes.object.isRequired,
};

export default ResultsCard;
