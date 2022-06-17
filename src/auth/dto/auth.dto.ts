import { z } from 'zod';

const User = {
    id: z.string().min(1),
    username: z.string().min(1),
    discriminator: z.string().length(4),
    avatar: z.string().nullable(),
    bot: z.boolean().optional(),
    system: z.boolean().optional(),
    mfa_enabled: z.boolean().optional(),
    banner: z.string().optional().nullable(),
    accent_color: z.string().optional().nullable(),
    locale: z.string().optional(),
    verified: z.boolean().optional(),
    email: z.string().optional().nullable(),
    flags: z.number().optional(),
    premium_type: z.number().optional(),
    public_flags: z.number().optional(),
};

export const UserTokenSchema = z.object({
    access_token: z.string(),
    expires_in: z.number().min(6000),
    refresh_token: z.string().min(1),
    scope: z.string().min(1),
    token_type: z.string().refine((value) => value === 'Bearer'),
});

export const UserSchema = z.object(User);

export const PostUserSchema = z.object({
    user: UserSchema,
    token: UserTokenSchema,
});

export const AuthSchema = z.object({
    accessToken: z.string(),
    expiresIn: z.bigint(),
    refreshToken: z.string().min(1),
    userId: z.string(),
    id: z.number().min(1),
    publicAccessToken: z.string().min(0),
});

export const GetAuthSchema = z.object({
    ...User,
    token: AuthSchema.omit({ accessToken: true, refreshToken: true }),
});

export type User = z.infer<typeof UserSchema>;
export type UserToken = z.infer<typeof UserTokenSchema>;
export type PostUser = z.infer<typeof PostUserSchema>;
export type Auth = z.infer<typeof AuthSchema>;
export type GetAuth = z.infer<typeof GetAuthSchema>;
