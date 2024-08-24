import { ReactNode } from 'react';

interface IContainerProps {
	children: ReactNode;
}

export const Container = ({ children }: IContainerProps) => {
	return <div className="px-24">{children}</div>;
};
