export interface Moment {
    id?: string;
    title: string;
    description: string;
    image: string;
    created_at?: string;
    updated_at?: string;
    comments?: [{text: string, username: string}];
}