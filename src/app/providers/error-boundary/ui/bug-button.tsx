import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../../../shared/ui/button/button';

// COMPONENT FOR ERROR BOUNDARY TESTS!

const BugButton = () => {
    const [error, setError] = useState(false);

    const { t } = useTranslation();
    const onThrow = () => setError(!error);

    useEffect(() => {
        if (error === true) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={onThrow}>
            {t('Throw error')}
        </Button>
    );
};

export default BugButton;
