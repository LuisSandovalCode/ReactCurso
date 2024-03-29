import React from 'react';
import "./styles/BadgeDetails.css";
import PlatziConfLogo from '../images/platziconf-logo.svg';
import Badge from '../component/badge';
import { Link } from 'react-router-dom';
import DeleteBadgeModal from '../component/DeleteBadgeModal';

function useIncreaseCount(max)
{   
    const [count,setCount] = React.useState(0);

    if(count>max)
    {
        setCount(0);
    }

    return [count,setCount];
}

function BadgeDetails(props)
{
    const [count, setCount] = useIncreaseCount(4);
    const CurrentBadge = props.CurrentBadge;
    return(
        <div>
        <div className="BadgeDetails__hero">
            <div class="container">
                <div className="row">
                    <div className="col-6">
                        <img src={PlatziConfLogo} alt="Logo Conferencia"/>
                    </div>    
                    <div className="col-6 BadgeDetails__hero-attendant-name">
                        <h1>{CurrentBadge.firstName} {CurrentBadge.lastName}</h1>
                    </div>    
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Badge
                        Name={CurrentBadge.firstName}
                        LastName={CurrentBadge.lastName}
                        Job={CurrentBadge.jobTitle}
                        FB={CurrentBadge.twitter}
                        email={CurrentBadge.email}
                    />
                </div>
                <div className="col">
                    <h2>Actions</h2>
                    <div>
                        <button onClick={()=>{
                            setCount(count + 1);
                        }} className="btn btn-primary mr-4">
                            Increase Count {count}
                        </button>
                        <div><Link className="btn btn-primary mb-4" to={`/Badges/${CurrentBadge.id}/Edit`}>Edit</Link></div>
                    </div>
                    <div>
                        <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                        <DeleteBadgeModal isOpen={props.modalIsOpen}
                                onClose={props.onCloseModal}
                                onDeleteBadge={props.onDeleteBadge}
                                />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    );
}

export default BadgeDetails;