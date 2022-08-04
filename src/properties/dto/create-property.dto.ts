export class CreatePropertyDto {
    _id?: string;
    status: number;
    label: string;
    images: string[];
    user_id: string; // remover depois fazer com o auth no service
    address: {
        label: string;
        cep: string;
        city: string;
        public_place: string;
    }
}
