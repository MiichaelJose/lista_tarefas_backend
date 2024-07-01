import { ITag } from '../types/tag.interface';

class Tag implements ITag {
    name: string;
    image: string;
    txt_color_hex: string | undefined;
    bgd_color_hex: string | undefined;

    constructor(
        name: string,
        image: string,
        txt_color_hex?: string,
        bgd_color_hex?: string
    ) {
        if (!name || !image) {
            throw new Error('name and image are required');
        }
        this.name = name;
        this.image = image;
        this.txt_color_hex = txt_color_hex;
        this.bgd_color_hex = bgd_color_hex;
    }
}

export default Tag;
