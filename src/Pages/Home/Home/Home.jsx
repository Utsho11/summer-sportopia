import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Review from "../Review/Review";
import ExtraSection from "../extraSection/ExtraSection";

const Home = () => {
    return (
        <div className="pt-28">
            <ExtraSection></ExtraSection>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Review></Review>
        </div>
    );
};

export default Home;