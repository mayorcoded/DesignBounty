import { drizzleConnect } from 'drizzle-react';
import BountyFulfilment from "./BountyFulfilment";

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        drizzleStatus: state.drizzleStatus,
        StandardBounties: state.contracts.StandardBounties
    }
};

const BountyFulfilmentContainer = drizzleConnect(BountyFulfilment, mapStateToProps);
export default BountyFulfilmentContainer;