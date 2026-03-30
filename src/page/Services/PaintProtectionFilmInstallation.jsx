
// Components
import ServiceBanner from '../../Common/ServiceBanner';
import ServiceDetail from '../../Common/ServiceDetail';
import Package from '../../Common/Package';

// Data - Single source of truth for this page
import {
    packagesData,
    serviceBannerData,
    serviceDetailData, // Assuming you refactor this next
} from '../../Data/PaintProtectionFilmInstallation/data';
import ServiceNavbar from '../../components/ServiceNavbar';


const PaintProtectionFilmInstallation = () => {
    return (
        <div className="bg-black">
            <ServiceNavbar />
            <ServiceBanner data={serviceBannerData} />
            <ServiceDetail data={serviceDetailData} />
            <Package data={packagesData}/>
        </div>
    );
};

export default PaintProtectionFilmInstallation;