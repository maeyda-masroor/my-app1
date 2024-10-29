import Introduction from './whoweare/page';
import Slider from '../components/Slider';
import CallOut from '@/components/CallOut';
export default function Home() {
  return (
    <div>
      <Slider/>
      <Introduction/>
      <CallOut/>
    </div>
  );
}
