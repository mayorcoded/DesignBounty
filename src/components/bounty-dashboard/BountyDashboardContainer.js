import { drizzleConnect } from 'drizzle-react';
import BountyDashboard from "./BountyDashboard";

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        drizzleStatus: state.drizzleStatus,
        StandardBounties: state.contracts.StandardBounties
    }
};

const BountyDashboardContainer = drizzleConnect(BountyDashboard, mapStateToProps);
export default BountyDashboardContainer;