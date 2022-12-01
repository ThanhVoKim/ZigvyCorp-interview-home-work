import { IComment, IUser } from '.';

export interface IPost {
	id: number;
	userId: number;
	title: string;
	body: string;
	tags?: string[];
	createdAt: Date;
	comments: IComment[];
}
