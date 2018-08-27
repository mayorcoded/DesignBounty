import PostBounty from './PostBounty';
import { drizzleConnect } from 'drizzle-react';

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        drizzleStatus: state.drizzleStatus,
        StandardBounties: state.contracts.StandardBounties
    }
};

const PostBountyContainer = drizzleConnect(PostBounty, mapStateToProps);
export default PostBountyContainer;