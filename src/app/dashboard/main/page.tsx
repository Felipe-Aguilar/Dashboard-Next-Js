import SimpleWidget from "@/components/SimpleWidget/SimpleWidget";
import WidgetsGrid from "@/components/WidgetsGrid/WidgetsGrid";


export const metadata = {
    title: 'Admin Dashboard',
    description: 'Admin Dashboard',
};

const MainPage = () => {
    return ( 
        <div>
            <h3>Dashboard</h3>
            <span>Información general</span>

            <WidgetsGrid />

        </div>
    );
}

export default MainPage;