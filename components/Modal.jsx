"use client";

import { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-slate-800/70">
			<div className="modal-overlay flex items-center justify-center">
				<div className="modal flex items-center justify-center">
					<button
						className="close-btn absolute right-20 top-20 text-white dark:text-white "
						onClick={onClose}
					>
						Close
					</button>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Modal;
