import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../../shared/ui/input/input';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (str: string) => {
        setValue(str);
    };

    return (
        <div>
            {t('Main page')}
            <Input
                // eslint-disable-next-line i18next/no-literal-string
                placeholder="Enter text"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default MainPage;
