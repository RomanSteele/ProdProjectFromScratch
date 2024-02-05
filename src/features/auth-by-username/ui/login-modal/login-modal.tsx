import { Suspense } from 'react';
import { classNames } from '../../../../shared/lib/class-names/class-names';
import { Modal } from '../../../../shared/ui/modal/modal';
import cls from './login-modal.module.scss';
import { LoginFormAsync } from '../login-form/login-form.async';
import Loader from '../../../../shared/ui/loader/loader';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={classNames(cls.LoginModal, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
