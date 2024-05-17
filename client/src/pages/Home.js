import DayLink from "../components/DayLink";
import HomeLink from "../components/HomeLink";
import TodoLink from "../components/TodoLink";


const Home = () => {
    
    return (
        <div>
            <p>hello twiggy</p>
            <HomeLink/><br/>
            <DayLink/>
            <TodoLink/>
        </div>
    );
};

export default Home;