import { z } from "zod";

export default class ZodSchema {
    static workspaceIdSchema = z.object({
        userId: z.string().uuid()
    });
    
    static workspaceCreateRegistrationSchema = z.object({
        userId: z.string().uuid(),
        name: z.string().max(10),
        image: z.string().optional()
    });
    
    static workspaceUpdateRegistrationSchema = z.object({
        name: z.string().max(10),
        image: z.string().optional()
    });
    
    static tagIdSchema = z.object({
        id: z.string().uuid(),   // Valida se o parâmetro 'id' é um UUID válido
    });
    
    static tagCreateRegistrationSchema = z.object({
        name: z.string(),
        image: z.string().optional(),
        txt_color_hex: z.string().optional(),
        bgd_color_hex: z.string().optional()
    });
    
    static tagUpdateRegistrationSchema = z.object({
        name: z.string(),
        image: z.string().optional(),
        txt_color_hex: z.string().optional(),
        bgd_color_hex: z.string().optional()
    });
    
    static taskCreateRegistrationSchema = z.object({
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
    
    static taskUpdateRegistrationSchema = z.object({
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
    
    static displayIdSchema = z.object({
        id: z.string().uuid()
    });
    
    static displayCreateRegistrationSchema = z.object({
        type: z.string().optional(),
        workspaceId: z.string().uuid(),
        tagId: z.string().uuid(),
        journeys: z.array(z.object({
            name: z.string()
        })).optional()
    });
}
