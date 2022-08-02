export class CreatePropertyDto {
    status: string;
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
