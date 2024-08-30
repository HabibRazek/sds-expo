import FifBloc from "@/components/fifth-bloc/FifBloc";
import Bloc from "@/components/first-bloc/Bloc";
import Fbloc from "@/components/fourth-bloc/Fbloc";
import Sbloc from "@/components/second-bloc/Sbloc";
import Countdown from "@/components/count-down/Countdown";
import NosPartenaires from "@/components/nos-partenaires/NosPartenaires";
import PartenairesMedia from "@/components/nos-partenaires/PartenairesMedia";
import NavBar from "@/components/header/NavBar";
import Sponsor from "@/components/sponsor/Sponsor";
import DiscoverExpoGallery from "@/components/DiscoverExpoGallery/DiscoverExpoGallery";
import DiscoverExpoGalleryconf from "@/components/DiscoverExpoGallery/DiscoverExpoGalleryConf";
import Intervenus from "@/components/intervenus/Intervenus";
import DiscoverExpoGalleryAwards from "@/components/DiscoverExpoGallery/DiscoverExpoGalleryAwards";




export default function Home() {
  const targetDate = new Date('2024-10-24T00:00:00Z').getTime();
  return (
    <div>
      <NavBar />
      <DiscoverExpoGallery />
      <div>
        <Countdown targetDate={targetDate} />
      </div>
      <DiscoverExpoGalleryconf />
      <DiscoverExpoGalleryAwards />
      <Intervenus />
      <Sponsor />
      <Bloc />
      <FifBloc />
      <Sbloc />
      <NosPartenaires />
      <PartenairesMedia />
      <Fbloc className='mt-8' />
    </div>
  )
}
