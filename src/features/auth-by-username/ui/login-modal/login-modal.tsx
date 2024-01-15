import { classNames } from '../../../../shared/lib/class-names/class-names';
import { Modal } from '../../../../shared/ui/modal/modal';
import LoginForm from '../login-form/login-form';
import cls from './login-modal.module.scss';

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
        <LoginForm />
    </Modal>
);
