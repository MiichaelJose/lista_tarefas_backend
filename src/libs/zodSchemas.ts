import { z } from "zod";

export const workspaceIdSchema = z.object({
    id: z.string().uuid()
});

export const workspaceCreateRegistrationSchema = z.object({
    name: z.string()
});

export const workspaceUpdateRegistrationSchema = z.object({
    name: z.string()
});


export const tagIdSchema = z.object({
    id: z.string().uuid(),   // Valida se o parâmetro 'id' é um UUID válido
});

export const tagCreateRegistrationSchema = z.object({
    name: z.string(),
    image: z.string().optional(),
    txt_color_hex: z.string().optional(),
    bgd_color_hex: z.string().optional()
});

export const tagUpdateRegistrationSchema = z.object({
    name: z.string(),
    image: z.string().optional(),
    txt_color_hex: z.string().optional(),
    bgd_color_hex: z.string().optional()
});

export const taskCreateRegistrationSchema = z.object({
    displayId: z.string().uuid(),
    title: z.string().max(100),
    description: z.string().max(255),
    people_task: z.array(
        z.object({
            _id: z.string().uuid(),
            name: z.string()
        })
    ).optional(),
    status: z.string().optional(),
    initial_at: z.string().datetime({ offset: true }),
    ended_at: z.date().optional()
});

export const taskUpdateRegistrationSchema = z.object({
    displayId: z.string().uuid(),
    title: z.string().max(100),
    description: z.string().max(255),
    people_task: z.array(
        z.object({
            _id: z.string().uuid(),
            name: z.string()
        })
    ),
    status: z.string().optional(),
    initial_at: z.string().datetime({ offset: true }),
    ended_at: z.date().optional()
});

export const displayCreateRegistrationSchema = z.object({
    type: z.string().optional(),
    workspaceId: z.string().uuid(),
    tagId: z.string().uuid(),
    journeys: z.array(z.object({
        name: z.string()
    })).optional()
});