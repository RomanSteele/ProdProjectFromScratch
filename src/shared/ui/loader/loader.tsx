import { classNames } from '../../../shared/lib/class-names/class-names';
import './loader.scss';

interface loaderProps {
    className?: string;
}

const loader = ({ className }: loaderProps) => (
    <div className={classNames('lds-roller', {}, [className])}>
        <div>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);

export default loader;
