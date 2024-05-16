import styles from './Register.module.scss';
import { RegisterModal } from './registerModal/RegisterModal';

export function Register() {
	return (
		<div className={styles.container}>
			<RegisterModal />
		</div>
	);
}
