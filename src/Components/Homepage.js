import "../Styles/Homepage.css"
import { useAuth0 } from "@auth0/auth0-react";

function Homepage() {
    const { user } = useAuth0();

    return(
        <>
            <div className = "homepage">
                <h1><center>Welcome to InstaRecipe!</center></h1>
                {/* <h1>{JSON.stringify(user, null, 2)}</h1> */}
                <p><center>Limited ingredients and don't know what to cook? InstaRecipe is here to the rescue!</center></p>
            </div>
        </>
    );
} 

export default Homepage;
