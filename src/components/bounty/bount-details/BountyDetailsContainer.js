import BountyDetails from './BountyDetails';
import { drizzleConnect } from 'drizzle-react';


const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        drizzleStatus: state.drizzleStatus,
        StandardBounties: state.contracts.StandardBounties
    }
};

const BountyDetailsContainer = drizzleConnect(BountyDetails, mapStateToProps);
export default BountyDetailsContainer;