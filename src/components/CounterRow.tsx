// components/CountersRow.tsx
import Counter from './Counter';

const CountersRow: React.FC = () => {
    return (
        <div className="flex flex-wrap justify-center space-x-4 space-y-4">
            <Counter start={1} end={80} duration={2000} what='Students' />
            <Counter start={1} end={10} duration={2000} what= 'team members'/>
            <Counter start={1} end={5} duration={2000}  what='programs'/>
            <Counter start={1} end={2} duration={2000}  what='meeting'/>
        </div>
    );
};

export default CountersRow;
