import { drizzleConnect } from 'drizzle-react';
import BountyHome from "./BountyHome";

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        drizzleStatus: state.drizzleStatus,
        StandardBounties: state.contracts.StandardBounties
    }
};

const BountyHomeContainer = drizzleConnect(BountyHome, mapStateToProps);
export default BountyHomeContainer;