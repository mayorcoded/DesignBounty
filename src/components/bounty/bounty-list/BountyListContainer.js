import BountyList from './BountyList';
import { drizzleConnect } from 'drizzle-react';


const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        drizzleStatus: state.drizzleStatus,
        StandardBounties: state.contracts.StandardBounties
    }
};

const BountyListContainer = drizzleConnect(BountyList, mapStateToProps);
export default BountyListContainer;