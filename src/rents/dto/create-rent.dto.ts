export class CreateRentDto {
  property_id: string;
  date_init: string;
  date_end: string;
  status: number;
  client: {
    name: string;
    phone: string;
  };
  total_value: number;
  value_installments: number;
  installments: number;
  mode: number;
}
