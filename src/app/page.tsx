import TestimonialSlider from '../components/TestSlider';
import Introduction from './whoweare/page';
import Slider from '../components/Slider';
import CallOut from '@/components/CallOut';
import Newsletter from '@/components/Newsletter';
import CountersRow from '@/components/CounterRow';
export default function Home() {
  return (
    <div>
      <Slider/>
      <Introduction/>
      <h1 className="text-center text-3xl
                           font-bold mt-12">
                What They Say about us
      </h1>
      <TestimonialSlider />
      <Newsletter/>
      <div className="flex items-center justify-center p-4 bg-gray-100">
            <CountersRow />
        </div>
      <CallOut/>
    </div>
  );
}
