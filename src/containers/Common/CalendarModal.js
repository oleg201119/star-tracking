import React from 'react';
import Modal from 'react-modal';

export default function CalendarModal({ children, isOpen, onRequestClose }) {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			shouldCloseOnOverlayClick={true}
			className="calendar-modal"
		>
			<h2>Add to Calendar</h2>
			<div>{children}</div>
			<div onClick={onRequestClose}>
				<span>Cancel</span>
			</div>
		</Modal>
	);
}
Modal.setAppElement('body');
