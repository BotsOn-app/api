import { IsEmail, IsNotEmpty } from 'class-validator';

export class ChangesDto {
    changes_id: number;
    title: string;
    content: string;
    version: string;
}

class BannerDto {
    banner_id: number;
    url: string;
    name: string;
}

class AuthorDto {
    author_id: number;
    name: string;
    avatarUrl: string;
}

class DataDto {
    data_id: number;
    banner: BannerDto;
    name: string;
    description: string;
    verified: boolean;
    changes: ChangesDto[];
}

export class ExtensionsDto {
    author: AuthorDto;
    version: number;
    downloads: number;
    data: DataDto;
}
